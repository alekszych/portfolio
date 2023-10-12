import React, {FC, useEffect, useRef} from "react"
import {Group} from "three"
import {MeshSurfaceSampler} from "three/examples/jsm/math/MeshSurfaceSampler"

import {generateIsland} from "./island/generateIsland"
import {generateScene} from "./scene/generateScene"
import {displayRocks} from "./rock/displayRocks"
import {displayTrees} from "./tree/displayTrees"
import {NtreeTypes} from "./ntree.types"



const NTree: FC<NtreeTypes> = ({dnaArray = [], rockAmount = 3, islandSize = 5, width = 300, height = 300, className = ""}) => {
	const container = useRef(null)

	useEffect(() => {
		const group = new Group()

		const islandMesh = generateIsland(islandSize)
		group.add(islandMesh)

		const sampler = new MeshSurfaceSampler(islandMesh).build()
		const meshPositions: object = []

		displayTrees(sampler, meshPositions, group, islandSize, dnaArray)
		displayRocks(sampler, meshPositions, group, islandSize, rockAmount)

		generateScene(container, group, width, height)
	}, [])

	return (
		<div ref={container} className={className}/>
	)
}

export {NTree}
