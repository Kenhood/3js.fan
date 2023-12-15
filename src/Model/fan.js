import * as THREE from "three";

export default class fan {
  geometry = new THREE.CircleGeometry(1, 32, 0, Math.PI / 2); // 创建一个扇形几何体
  material = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0x00ff00,
  });

  mesh = null;

  constructor(geometry, material) {
    this.init(geometry, material);
  }

  init = (geometry, material) => {
    if (geometry) this.geometry = geometry;
    if (material) this.material = material;
    this.mesh = new THREE.Mesh(this.geometry, this.material); // 创建扇形的Mesh对象
  };

  animate = () => {
    this.mesh.rotation.z += 0.01; // 旋转扇形模型
  };
}
