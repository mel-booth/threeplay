const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 500)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xadd8e6)
document.body.appendChild(renderer.domElement)

var geometry = new THREE.ConeGeometry(1,2)
var material = new THREE.MeshLambertMaterial({color: 0xffffff})
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

var light = new THREE.PointLight(0xffffff, 1.2)
light.position.set(0, 0, 6)
scene.add(light)

camera.position.z = 10

function render(){
  requestAnimationFrame(render)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.023
  renderer.render(scene, camera)
}
render()
