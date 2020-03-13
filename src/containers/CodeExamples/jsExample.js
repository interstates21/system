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

export default jsExample;
