import {AmbientLight, DirectionalLight, MOUSE, PerspectiveCamera, Scene, WebGL1Renderer} from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export const generateScene = (container, group, width, height) => {
	const scene = new Scene()

	//group
	scene.add(group)

	//camera
	const camera = new PerspectiveCamera( 75, 1920 / 1080, 0.1, 1000)
	camera.position.set( 6, -1, 10 )

	//light
	const light = new AmbientLight( 0x404040 )
	scene.add(light)
	const lights = [
		{intensity: 2, x: 10000, y: 10000, z: 10000},
		{intensity: 1, x: 0, y: 10, z: 10},
		{intensity: 1, x: 10, y: 10, z: -10},
		{intensity: 1, x: -10, y: 10, z: -10},
		{intensity: 1, x: 0, y: -20, z: 0},
	]
	lights.forEach(({intensity, x, y, z}) => {
		const directionalLight = new DirectionalLight( "#ffffff", intensity )
		directionalLight.position.set(x, y, z)
		scene.add( directionalLight )
	})
	//renderer
	const renderer = new WebGL1Renderer({alpha: true, antialias: true})
	renderer.setPixelRatio( window.devicePixelRatio )
	renderer.setSize( width, height )
	container.current.innerHTML = ""
	container.current.appendChild( renderer.domElement )

	//controls
	let stop = false
	const controls = new OrbitControls( camera, renderer.domElement)
	controls.mouseButtons = {
		LEFT: MOUSE.ROTATE
	}
	controls.enablePan = false
	controls.enableZoom = false
	controls.update()
	controls.addEventListener( "change", () => {
		stop = true
		renderer.render(scene, camera)
	})

	const animate = () => {
		if (!stop){
			requestAnimationFrame(animate)
			group.rotateY(0.004)
			renderer.render( scene, camera )
		}
	}
	animate()
	// let image = renderer.domElement.toDataURL()
	// console.log(image)
	// return {image: image}
}
