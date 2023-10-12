import {
	DodecahedronGeometry,
	Mesh,
	MeshPhysicalMaterial,
	Float32BufferAttribute,
	Color
} from "three"
import {convertVectorsToVertices, convertVerticesToVectors, getMatchingVertices} from "../helpers/services"
import {makeNoise2D} from "open-simplex-noise"

export const generateIsland = (radius) => {
	const mesh = new Mesh(new DodecahedronGeometry(radius, 2), new MeshPhysicalMaterial({vertexColors: true, flatShading: true}))
	let vertices = convertVerticesToVectors(mesh.geometry.attributes.position.array)
	let flatVertices = []
	vertices.forEach((verticle, i) => {
		if (verticle.y > -1){
			let matchingVertices = getMatchingVertices(vertices, i)
			const y = -1
			const noise2D = makeNoise2D()
			matchingVertices.forEach(v => {
				vertices[v].y = y + (0.2 * noise2D(vertices[v].x * 2, vertices[v].y * 0.4)) * (radius / 3)
			})
			flatVertices = flatVertices.concat(matchingVertices)
		}
	})
	mesh.geometry.setAttribute("position", new Float32BufferAttribute(convertVectorsToVertices(vertices), 3))

	const colors = []
	const color = new Color()
	vertices.forEach(() => {
		color.set("#42526C")
		colors.push( color.r, color.g, color.b )
		colors.push( color.r, color.g, color.b )
		colors.push( color.r, color.g, color.b )
	})
	mesh.geometry.setAttribute( "color", new Float32BufferAttribute( colors, 3 ) )
	mesh.translateY(-3)
	return mesh
}
