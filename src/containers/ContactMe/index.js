import React from 'react';
import classes from './classes.module.css';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const ContactMe = () => {
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <AwesomeButton
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          size="large"
          type="facebook"
          href="https://www.facebook.com/profile.php?id=100002359261444"
        >
          <Icon className={classes.icon} icon={['fab', 'facebook']} /> Check
          Profile
        </AwesomeButton>
        <AwesomeButton
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="instagram"
          size="large"
          href="https://www.instagram.com/alexsuperghost/"
        >
          <Icon className={classes.icon} icon={['fab', 'instagram']} /> Check
          Pictures
        </AwesomeButton>
        <AwesomeButton
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="github"
          size="large"
          href="https://github.com/interstates21/"
        >
          <Icon className={classes.icon} icon={['fab', 'github']} /> Check Code
        </AwesomeButton>
        <AwesomeButton
          className={classes.button}
          cssModule={AwesomeButtonStyles}
          type="linkedin"
          size="large"
          href="https://linkedin.com/in/oleksii-kupin-188b05154"
        >
          <Icon className={classes.icon} icon={['fab', 'linkedin']} /> Check
          Career
        </AwesomeButton>
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
