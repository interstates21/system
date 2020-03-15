import { AwesomeButton } from 'react-awesome-button';
import '../react-awesome-button/dist/styles.css';
// import 'react-awesome-button/dist/themes/theme-red.css';
import React from 'react';

const MyAwesomeButton = ({
  title,
  onPress = () => {},
  type = 'primary',
  size = 'large',
  containerClass = '',
}) => {
  return (
    <div className={containerClass}>
      <AwesomeButton onPress={onPress} size={size} ripple type={type}>
        {title}
      </AwesomeButton>
    </div>
  );
};

export default MyAwesomeButton;
