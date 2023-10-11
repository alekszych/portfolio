import {generateRock} from "./generateRock"
import {Vector3} from "three"

export const displayRocks = (sampler, meshPositions, group, islandSize, rockAmount) => {
	const tempPosition = new Vector3()
	let rockCounter = 0
	while (rockCounter <= rockAmount){
		sampler.sample(tempPosition)
		let mesh = generateRock(tempPosition)
		if (tempPosition.y > -3 && new Vector3(0,0,0).distanceTo(tempPosition) < (islandSize - 1)){
			mesh.position.set(tempPosition.x, tempPosition.y - 3, tempPosition.z)
			let check = true
			meshPositions.forEach(item => {
				if (item.position.distanceTo(mesh.position) < 1)
					check = false
			})
			if (check){
				group.add(mesh)
				meshPositions.push({position: mesh.position, width: 1})
				rockCounter++
			}
		}
	}
}