const sagaExample = `import { put, call, select } from "redux-saga/effects";
import * as actions from "../../actions";
import axios from "axios";

const getToken = state => state.auth.token;
const getPage = state => state.currentPages.templates;
const getShowDeleted = state => state.deleted.show;
const getEditorData = state => state.createTemplate;

const apiCall = (pack, token) => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_PATH,
    headers: {
      Authorization: \`Bearer \${token}\`
    }
  });

  const path = \`/dashboard/templates\`;
  return instance
    .post(path, pack)
    .then(response => response)
    .catch(error => error.response);
};


const formatParams = payload => {
  const formatSteps = steps => {
    return steps.map((s, index) => ({ name: s, order: index }));
  };

  const formatSubData = category => {
    if (!category.allowSub) return formatSteps(category.steps);

    const finalSub = category.subcategories.map(sub => {
      return {
        subcategory_id: sub.subcategory.id,
        steps: formatSteps(sub.steps),
        areas: sub.areas
      };
    });
    return finalSub;
  };

  const formatCategories = categories => {
    const finalCategories = categories.map(category => {
      return {
        category_id: category.id,
        model: category.model.model_path,
        [category.allowSub ? "subcategories" : "steps"]: formatSubData(category)
      };
    });
    return finalCategories;
  };

  const finalArray = {
    name: payload.name,
    vehicle_type_id: payload.vehicle.id,
    categories: formatCategories(payload.categories)
  };

  console.log("finalArray = ", finalArray);
  return finalArray;
};

export default function* createTemplateAsync(action) {
  try {
    const token = yield select(getToken);
    const editorData = yield select(getEditorData);

    const res = yield call(apiCall, formatParams(editorData), token);

    console.log(" res = ", res);
    if (res.status === 200 || res.status === 201) {
      yield put(actions.createTemplateSuccess());
      const getParams = {
        page: yield select(getPage),
        soft_deleted: yield select(getShowDeleted),
        search: null,
        sort: "id"
      };
      yield put(actions.getTemplatesRequest(getParams));
    } else yield put(actions.createTemplateFailure(res.data));
  } catch (err) {
    yield put(actions.createTemplateFailure(err));
  }
}
`;

export default sagaExample;
