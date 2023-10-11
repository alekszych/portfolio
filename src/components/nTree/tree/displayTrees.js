import {Vector3} from "three"
import {generateTree} from "./generateTree"

export const displayTrees = (sampler, meshPositions, group, islandSize, dnaArray) => {
	const tempPosition = new Vector3()
	let treeCounter = 0
	while (treeCounter <= dnaArray.length - 1){
		sampler.sample(tempPosition)
		if(new Vector3(0,0,0).distanceTo(tempPosition) < (islandSize - 3)){
			const {mesh, width} = generateTree(
				tempPosition,
				dnaArray[treeCounter],
				15
			)
			mesh.translateY(-3)
			let check = false
			check = meshPositions.find(item => item.position.distanceTo(mesh.position) < item.width + 1.5)
			if (!check){
				group.add(mesh)
				meshPositions.push({position: mesh.position, width: width})
				treeCounter++
			}
		}
	}
}