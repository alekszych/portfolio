import {decoder} from "../helpers/decoder"
import {generateTrunk} from "../trunk/generateTrunk"
import {Group} from "three"
import {generateTop} from "../treeTop/generateTreeTop"

export const generateTree = (start, dna, age) => {
	const {trunkData, topData, scale} = decoder(dna, age)
	const {trunkMesh, trunkTop} = generateTrunk(trunkData)
	const group = new Group()
	group.add(trunkMesh)
	if(!topData)
		return
	const topMesh = generateTop(trunkTop, topData)
	group.add(topMesh)

	group.position.set(start.x, start.y, start.z)
	group.scale.set(scale, scale, scale)
	return {mesh: group, width: topData.data[0].bottomRadius}
}