import React from 'react';
import {
  Document,
  Page,
  Text,
  Image,
  Link,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const PDFComponent = () => (
  <Document title="CV React" author="Oleksii Kupin">
    <Page style={styles.body} size="A4">
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}> REACT FRONTEND DEVELOPER</Text>
          <Text style={styles.title}> OLEKSII KUPIN</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.data}> +380635816121</Text>
          <Text style={styles.data}>
            70 Irpinska, apt 155, Kyiv, Ukraine, 03179
          </Text>
          <Link style={styles.data} src="mailto:interstates21@gmail.com">
            interstates21@gmail.com
          </Link>
          <Link style={styles.data} src="https://github.com/interstates21/">
            github: interstates21
          </Link>
          <Link
            style={styles.data}
            src="https://linkedin.com/in/oleksii-kupin-188b05154"
          >
            linkedin: oleksii-kupin-188b05154
          </Link>
          <Link
            style={styles.data}
            src="https://www.facebook.com/profile.php?id=100002359261444"
          >
            facebook: Alex Superghost (id=100002359261444)
          </Link>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.centeredTitle}>Core Qualification</Text>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>Language</Text>
          <Text style={styles.qualVal}> JS, ES6, TypeScript</Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>React</Text>
          <Text style={styles.qualVal}>
            Hooks, Design Patterns, React Native, Web / Mobile Deployment
          </Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>Redux</Text>
          <Text style={styles.qualVal}>Saga, Thunk, Persist</Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>Node</Text>
          <Text style={styles.qualVal}>Express, Socket.io, OOP, MongoDB</Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>Other</Text>
          <Text style={styles.qualVal}>
            C/C++, Computer Graphics, UNITY, Basic Webpack, THREE.js, axios
          </Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>Styling</Text>
          <Text style={styles.qualVal}>
            Styled Components, CSS modules, StyleSheet C/C++, Computer Graphics,
            UNITY, Basic Webpack, THREE.js, axios
          </Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>Tools</Text>
          <Text style={styles.qualVal}>
            VSCode, Git, SSH, Bash, Postman, Docker, Figma, Trello
          </Text>
        </View>
        <View style={styles.qualification}>
          <Text style={styles.qualKey}>English</Text>
          <Text style={styles.qualVal}>Advanced</Text>
        </View>
        <Text style={styles.centeredTitle}>Experience</Text>
        <View style={styles.experience}>
          <View style={styles.colHalf}>
            <Text style={styles.jobCompany}>Cartitude Team</Text>
            <Text style={styles.jobDate}>November 2019 - Current</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.job}>
              <Text style={styles.jobRole}>React / React Native Developer</Text>
            </View>
            <View style={styles.jobOverview}>
              <Text style={styles.overviewLine}>
                - Building and deploying 3 applications from scratch
              </Text>
              <Text style={styles.overviewLine}>
                - Managing a team of 2 frontend + 1 backend developers
              </Text>
              <Text style={styles.overviewLine}>
                - Managing tools and architecture
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.experience}>
          <View style={styles.colHalf}>
            <Text style={styles.jobCompany}>Unit Factory (42)</Text>
            <Text style={styles.jobDate}>August 2017 - Current</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.job}>
              <Text style={styles.jobRole}>Computer Science Student</Text>
            </View>
            <View style={styles.jobOverview}>
              <Text style={styles.overviewLine}>- Algorithms, C/C++</Text>
              <Text style={styles.overviewLine}>- Computer Graphics</Text>
              <Text style={styles.overviewLine}>- Software Architecture</Text>
            </View>
          </View>
        </View>
        <View style={styles.experience}>
          <View style={styles.colHalf}>
            <Text style={styles.jobCompany}>Join.To.IT</Text>
            <Text style={styles.jobDate}>June 2019 - November 2019</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.job}>
              <Text style={styles.jobRole}>
                Junior React / React Native Developer
              </Text>
            </View>
            <View style={styles.jobOverview}>
              <Text style={styles.overviewLine}>
                - Building and deploying web and mobile applications
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.experience}>
          <View style={styles.colHalf}>
            <Text style={styles.jobCompany}>Appitr Technology Inc.</Text>
            <Text style={styles.jobDate}>June 2019 - November 2019</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.job}>
              <Text style={styles.jobRole}>React Native Intern</Text>
            </View>
            <View style={styles.jobOverview}>
              <Text style={styles.overviewLine}>
                - Integrating RN components into our web IDE
              </Text>
              <Text style={styles.overviewLine}>
                - Building demo applications
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      /> */}
    </Page>
  </Document>
);

// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
// });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    width: 400,
    height: 1000,
  },
  experience: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qualKey: {
    textAlign: 'left',
    flex: 0.2,
    color: '#ccc',
  },
  qualVal: {
    // textAlign: 'left',
    flex: 1,
  },
  main: {},
  title: {
    // color: 'grey',
    fontSize: 12,
    marginBottom: 5,
  },
  qualification: {
    fontSize: 11,
    marginBottom: 5,
    flexDirection: 'row',
  },
  centeredTitle: {
    fontSize: 14,
    marginTop: 25,
    marginBottom: 15,
    color: '#ccc',
    textAlign: 'center',
  },
  headerTitle: {
    flexDirection: 'column',
    textAlign: 'left',
  },
  headerInfo: {
    flexDirection: 'column',
    // textAlign: 'right',
  },
  col: {
    flex: 1,
  },
  colHalf: {
    flex: 0.7,
  },
  header: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
    // textAlign: 'center',
  },
  data: {
    fontSize: 10.5,
    color: '#333',
    marginBottom: 5,
    // color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  jobRole: {
    fontSize: 12,
    marginBottom: 3,
  },
  jobCompany: {
    fontSize: 11,
    color: '#ccc',
    marginBottom: 3,
  },
  jobDate: {
    fontSize: 10,
  },
  job: {
    marginBottom: 5,
  },
  overviewLine: {
    fontSize: 11,
    marginBottom: 3,
  },
});

export default PDFComponent;
