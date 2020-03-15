import React from 'react';
import classes from './classes.module.css';
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

const ContactMe = () => {
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <AwesomeButtonSocial
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="facebook"
          url="https://www.facebook.com/profile.php?id=100002359261444"
        >
          Check Profile
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="instagram"
          url="https://www.instagram.com/alexsuperghost/"
        >
          Check Pictures
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="github"
          url="https://github.com/interstates21/"
        >
          Check Code
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="linkedin"
          url="https://linkedin.com/in/oleksii-kupin-188b05154"
        >
          Check Career
        </AwesomeButtonSocial>
      </div>
      <p className={classes.data}>interstates21@gmail.com</p>
      <p className={classes.data}>+38 (063) 581-61-21</p>
    </div>
  );
};

export default ContactMe;

// <View style={styles.headerInfo}>
// <Text style={styles.data}> +380635816121</Text>
// <Text style={styles.data}>
//   70 Irpinska, apt 155, Kyiv, Ukraine, 03179
// </Text>
// <Link style={styles.data} src="mailto:interstates21@gmail.com">
//   interstates21@gmail.com
// </Link>
// <Link style={styles.data} src="https://github.com/interstates21/">
//   github: interstates21
// </Link>
// <Link
//   style={styles.data}
//   src="https://linkedin.com/in/oleksii-kupin-188b05154"
// >
//   linkedin: oleksii-kupin-188b05154
// </Link>
// <Link
//   style={styles.data}
//   src="https://www.facebook.com/profile.php?id=100002359261444"
// >
//   facebook: Alex Superghost (id=100002359261444)
// </Link>
// </View>
