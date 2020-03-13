import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, { Component, useEffect, useCallback, useRef } from 'react';
import classes from './classes.module.css';

class Playground extends Component {
  componentDidMount() {
    this.mouse = new THREE.Vector2();
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    // this.listenMouseEvents();
    window.addEventListener('resize', this.handleWindowResize);
    // window.addEventListener('mousemove', this.onMouseMove, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    // window.removeEventListener('mousemove', this.onMouseMove);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  onMouseMove = event => {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.listenMouseEvents();
  };

  listenMouseEvents = () => {
    const raycaster = new THREE.Raycaster();

    raycaster.setFromCamera(this.mouse, this.camera);
    var intersects = raycaster.intersectObjects(this.scene.children);

    for (var i = 0; i < intersects.length; i++) {
      intersects[i].object.material.color.set(0xffff00);
      console.log(' intersects[i].object = ', intersects[i].object);
    }
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

//   clickEvent = () => {
//     var mouseX = e.clientX - getElementPosition(renderer.domElement).left;
//     var mouseY = e.clientY - getElementPosition(renderer.domElement).top;
//     var x = (mouseX / renderer.domElement.width) * 2 - 1;
//     var y = -(mouseY / renderer.domElement.height) * 2 + 1;
//     var vector = new THREE.Vector3(x, y, 1);
//     projector.unprojectVector(vector, camera);

//     var ray = new THREE.Ray(
//       camera.position,
//       vector.subSelf(camera.position).normalize()
//     );
//     var intersects = ray.intersectObjects(meshArray);

//     if (intersects.length > 0) {
//       console.log(intersects[0].object);
//       var color = Math.random() * 0xffffff;
//       intersects[0].object.material.color.setHex(color);
//     }
//   };

  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    this.controls = new OrbitControls(this.camera, this.el);
    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 25;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  addCustomSceneObjects = () => {
    // const boxGeometry = new THREE.BoxGeometry(8, 2, 10);
    var sphereGeometry = new THREE.SphereGeometry(8, 8, 8);
    // const material = new THREE.MeshPhongMaterial({
    //   color: 0x156289,
    //   emissive: 0x072534,
    //   side: THREE.DoubleSide,
    //   flatShading: true,
    // });
    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframeLinecap: true,
      //   wireframe: true,
    });
    this.cube = new THREE.Mesh(sphereGeometry, material);
    this.scene.add(this.cube);

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  startAnimationLoop = () => {
    // this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  render() {
    return (
      <div className={classes.targetContainer} ref={ref => (this.el = ref)} />
    );
  }
}

export default Playground;
