import React from 'react';
import MyToolchain from '../../components/MyToolchain';

import MyCode from '../../components/MyCode';
import classes from './classes.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const jsExample = `
import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import {View} from 'react-native';
import {clearStatus} from '@/store/actions';
import {Status} from '@/constants/types';
import styles from './styles';

const alertFriendlyStatuses = [
  'login',
  'register',
  'inspectionApprove',
  'getCompany',
  'postInspection',
  'logout',
];

const MyAlertManager = ({statuses, errors, dispatchClearStatus}) => {
  const [alerts, setAlerts] = useState({});

  const filterObject = useCallback((data, allowed) => {
    const obj = {...data};
    Object.keys(obj)
      .filter(key => !allowed.includes(key))
      .forEach(key => delete obj[key]);
    return obj;
  }, []);

  useEffect(() => {
    setAlerts(filterObject(statuses, alertFriendlyStatuses));
  }, [statuses]);

  return Object.keys(alerts).map((key, index) => (
    <MyAlert
      status={alerts[key]}
      error={errors[key]}
      key={index}
      onClearStatus={() => dispatchClearStatus(key)}
    />
  ));
};

const MyAlert: React.FC<{
  status: Object;
  error: Object;
  onClearStatus: Function;
}> = ({status, error, onClearStatus}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status === Status.Loading) {
      setVisible(true);
    } else if (status === Status.Failure) {
      setVisible(true);
    } else {
      // todo clear status
      onClearStatus();
      setVisible(false);
    }
  }, [status]);

  const getText = () => {
    if (status === Status.Loading) {
      return 'Sending...';
    }
    if (status === Status.Failure) {
      return Object.values(error).reduce((c, e, index) => c + \`\n * \${e}\`, '');
    } else {
      return 'Success';
    }
  };
  return (
    visible && (
      <View style={styles.container}>
        <AwesomeAlert
          overlayStyle={styles.overlay}
          contentContainerStyle={styles.alertContainer}
          show={visible}
          showProgress={status === Status.Loading}
          title={null}
          message={getText()}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={true}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            setVisible(false);
          }}
          onConfirmPressed={() => {
            setVisible(false);
          }}
        />
      </View>
    )
  );
};

const connectState = state => ({
  errors: state.errors,
  statuses: state.statuses,
});

const connectActions = {
  dispatchClearStatus: clearStatus,
};

export default connect(
  connectState,
  connectActions,
)(MyAlertManager);
};`;

const cExample = `
#include "rtv1.h"

static void		get_raydirection(t_world *e, int j, int i)
{
	float	jcam;
	float	icam;
	float	hcam;
	float	wcam;
	// get ray direction from the eye to each pixel on the screen
	jcam = (2.0f * j) / W - 1.0; // transform (current x pixel) in the window space (from 0 to WIDTH) to the camera abstract space (from -1 to 1)
	icam = (-2.0f * i) / H + 1.0; // same for y;
	hcam = tan(e->fov); // the camera canvas top is a tangent (triangle math) of your eye_field_of_view angle from a camera constructor
	wcam = hcam * ASPECTRATIO; // the camera canvas width/height must be the same as in the window space. We can find the cam canvas left side then;
	e->raydir.x = jcam * wcam * e->right.x // the ray direction = (camera transformed x) * (move to the left side) * (new coordinate frame x) + 
	+ icam * hcam * e->up.x + e->forward.x;// + the same for y + (new coordinate frame z * 1 (for each pixel the z direction is always the same))
	e->raydir.y = jcam * wcam * e->right.y
	+ icam * hcam * e->up.y + e->forward.y;
	e->raydir.z = jcam * wcam * e->right.z
	+ icam * hcam * e->up.z + e->forward.z;
	e->raydir = v_norm(e->raydir);
}

t_color	intersect(t_world *e, t_v3 eye, t_v3 dir)
{
	float		tmin;
	float		t;
	t_meshlist	*iter;
	t_meshlist	final_obj;

	tmin = INFIN;
	iter = e->meshlist; // begin list
	while (iter)
	{
		e->geometry = iter->geometry; // argument for an iter->function
		if ((t = iter->function(e, eye, dir))) // get intersection point with an object if there is one
			if (tmin > t) // if the current intersection is the closest so far - remember the cuurent intersection
			{
				// collect shading information if we decided to remember the intersection
				tmin = t;
				final_obj = (*iter);
				final_obj.normal = e->temp_normal;
				final_obj.color = iter->color;
			}
		iter = iter->next;
	}
	e->depth++; // this function called n + 1 times. Needed to stop recursion
	if (tmin >= INFIN || tmin < ZERO) // no intersection has found
		return (rgb(0, 0, 0));
	final_obj.hit = v_add(eye, v_scale(dir, tmin)); // find the hit point to use in coloring
	if (v_dot(dir, final_obj.normal) > 0) // if we are intersecting object from inside - remember this to use in refractions.
	{
		final_obj.normal = v_scale(final_obj.normal, -1); // reverse the normal so that it has a correct angle from inside.
		final_obj.isinside = 1;
	}
	if (e->depth > 4)
		return (get_color(e, final_obj)); // stop recursion at some reasonable point
	if (final_obj.isreflective || final_obj.isrefractive)
	  	return (intersect_recursive(e, final_obj, dir)); // if the object is not diffuse - redirect the light to the next diffuce object and get it's color recursively
	// else if(final_obj.isinside)
	// 	return (rgb(0,0,0));
	return (get_color(e, final_obj));
}

float			intersect_shadow(t_world *e, t_v3 hit, t_v3 lightvec)
{
	float		tmin;
	float		t;
	t_meshlist	*iter;

	if (e->meshlist == NULL)
		return (0);
	tmin = INFIN;
	iter = e->meshlist;
	while (iter)
	{
		e->geometry = iter->geometry;
		if ((t = iter->function(e, hit, lightvec)))
			if (tmin > t)
				tmin = t;
		iter = iter->next;
	}
	return (tmin);
}

static int		beautiful_black_frame(t_world *e, int i, int j)
{
	if (i < 10 || j < 10 || j > (W - 11) || i > (H - 11))
	{
		put_pixel(e, j, i, rgb(0, 0, 0));
		return (1);
	}
	return (0);
}

void			foreach_pixel(t_world *e)
{
	int		i;
	int		j;

	i = 0;
	while (i < H)
	{
		j = 0;
		while (j < W)
		{
			if (beautiful_black_frame(e, i, j))
			{
				put_pixel(e, j++, i, rgb(0, 0, 0));
				continue;
			}
			e->depth = 0;
			get_raydirection(e, j, i); //direction through the current pixel (j, i, (-z const))
			put_pixel(e, j++, i, intersect(e, e->eye, e->raydir));
		}
		i++;
	}
}`;

const nodeExample = `
const Room = require("./Room");
const Player = require("./Player");
const eventTypes = require("../../config/socketEvents");

class GameManager {
  constructor(io) {
    this.clients = new Map();
    this.io = io;
    this.rooms = {};
    this.nRooms = 0;
  }

  emitError(socket, message) {
    socket.emit(eventTypes.GAME_ERROR, {
      message,
      rooms: this.getRoomsArray()
    });
  }

  emitUpdateAll(message, payload = {}) {
    // todo ::: broadcast!!!
    this.io.emit(eventTypes.GAME_UPDATE, {
      message: message,
      rooms: this.getRoomsArray(),
      ...payload
    });
  }

  broadcastUpdate(socket, message, payload = {}) {
    // todo ::: broadcast!!!
    socket.broadcast.emit(eventTypes.GAME_UPDATE, {
      message: message,
      rooms: this.getRoomsArray(),
      ...payload
    });
  }

  emitUpdateUser(socket, message, payload = {}) {
    socket.emit(eventTypes.GAME_UPDATE, {
      message: message,
      rooms: this.getRoomsArray(),
      ...payload
    });
  }

  startGame({ roomID }) {
    this.rooms[roomID].startGame();
    console.log(\`Starting Game in \${roomID}\`, this.rooms);
    this.emitUpdateAll(\`Starting Game in \${roomID}\`);
  }

  checkAndDeleteRoom(room) {
    if (room.isEmpty()) {
      delete this.rooms[room.id];
      this.emitUpdateAll(\`The room \${room.id} has gone\`);
    }
  }

  clientManager({ socket }) {
    this.clients.set(socket.id, { socket, name: "incognito", room: null });
    console.info(\`Client connected incognito id=\${socket.id}\`);

    this.emitUpdateUser(socket, \`You are connected!\`, { currentRoom: null });

    socket.on(eventTypes.DISCONNECT, () => {
      const client = this.clients.get(socket.id);
      console.info(\`Client gone [id=\${socket.id} name=\${client.name}]\`);
      if (client.room) {
        client.room.removePlayer(client.name);
        this.checkAndDeleteRoom(client.room);
      }

      this.broadcastUpdate(
        socket,
        \`Client gone [id=\${socket.id} name=\${client.name}]\`
      );
      this.clients.delete(socket.id);
    });
  }

  createRoomManager({ socket, data }) {
    // identify a client

    const newRoomID = this.nRooms;

    if (this.duplicateUserExists(socket, data.name)) {
      console.log("duplicate!!!");
      return;
    }

    const newPlayer = new Player({
      name: data.name,
      socket: this.clients.get(socket.id).socket
    });

    const newRoom = new Room({ id: newRoomID, host: newPlayer });
    this.clients.set(socket.id, { socket, name: data.name, room: newRoom });
    this.rooms[newRoomID] = newRoom;
    this.nRooms++;

    this.broadcastUpdate(socket, \`\${data.name} CREATES room \${newRoomID}\`, {
      newRoomID
    });
    this.emitUpdateUser(socket, "Room Joined!", {
      currentRoom: newRoom.toObject()
    });
  }

  duplicateUserExists(socket, name) {
    let res = false;
    this.clients.forEach(client => {
      if (client.name === name) {
        this.emitError(socket, "The username exists :(");
        res = true;
      }
    });

    return res;
  }

  joinRoomManager({ socket, data }) {
    const newPlayer = new Player({
      name: data.name,
      socket: this.clients.get(socket.id).socket
    });

    // errors //
    const currentRoom = this.rooms[data.roomID];
    if (this.duplicateUserExists(socket, data.name)) {
      console.log("duplicate name " + data.name);
      return;
    }
    this.clients.set(socket.id, { socket, name: data.name, room: currentRoom });
    currentRoom.join(newPlayer);
    this.broadcastUpdate(socket, \`\${data.name} joins room \${data.roomID}\`);
    this.emitUpdateUser(socket, "Room Joined!", {
      currentRoom: currentRoom.toObject()
    });
  }

  getRoomsArray() {
    return Object.values(this.rooms).map(r => r.toObject());
  }

  run() {
    this.io.on(eventTypes.CONNECTION, socket => {
      this.clientManager({ socket });
      socket.on(eventTypes.CREATE_ROOM, data => {
        console.log("CREATE_ROOM", data);
        this.createRoomManager({ socket, data });
      });

      socket.on(eventTypes.JOIN_ROOM, data => {
        console.log("JOIN_ROOM", data);
        this.joinRoomManager({ socket, data });
      });

      socket.on(eventTypes.START_GAME, ({ roomID }) => {
        console.log("START_GAME", roomID);
        this.startGame({ socket, roomID });
      });
    });
  }
}

module.exports = GameManager;`;

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

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const Skills = () => {
  return (
    <div className={classes.container}>
      <Slider className={classes.slider} {...settings}>
        <MyCode title="React Native" value={jsExample} type="javascript" />
        <MyCode title="C Gaphics" value={cExample} type="c_cpp" />
        <MyCode title="Node" value={nodeExample} type="javascript" />
        <MyCode title="Redux Saga" value={sagaExample} type="javascript" />
        {/* <MyToolchain /> */}
      </Slider>
    </div>
  );
};

export default Skills;
