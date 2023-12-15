import * as THREE from "three";

export default class Three_App {
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
  });

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75, // FOV: 视角
    window.innerWidth / window.innerHeight, // aspect: 长宽比
    0.1, // near: 最近的渲染距离
    1000 // far: 最远的渲染距离
  );

  model = null;

  constructor() {
    this.init();
    this.animate();
  }

  init = () => {
    this.rendererSetting();
    this.cameraSetting();
  };

  rendererSetting = () => {
    // 设置渲染器的大小
    this.renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    // 设置domElement的id
    this.renderer.domElement.id = "threejs_scene";

    // 将渲染器的domElement添加到页面中
    document
      .querySelector("#app")
      .appendChild(this.renderer.domElement);
  };

  cameraSetting = () => {
    this.camera.position.z = 5; // 设定相机的位置
  };

  render = () => {
    this.renderer.render(this.scene, this.camera);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    if (this.model?.animate) this.model.animate();
    this.render();
  };

  addMesh = (mesh) => {
    this.scene.add(mesh);
  };

  addModel = (model) => {
    this.model = model;
    if (model?.mesh) this.scene.add(model.mesh);
  };
}
