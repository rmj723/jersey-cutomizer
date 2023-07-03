/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -T jersey.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/jersey-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Patch_Back1.geometry} material={materials.M_SweetPop} skeleton={nodes.Patch_Back1.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Back2.geometry} material={materials.M_Sweet} skeleton={nodes.Patch_Back2.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Chest1.geometry} material={materials.M_Flex} skeleton={nodes.Patch_Chest1.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Chest2.geometry} material={materials.M_LAFCshield} skeleton={nodes.Patch_Chest2.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Chest3.geometry} material={materials.M_Adidas} skeleton={nodes.Patch_Chest3.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Chest_LF.geometry} material={materials.M_Wing} skeleton={nodes.Patch_Chest_LF.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Chest_RT.geometry} material={materials.M_MLSshield} skeleton={nodes.Patch_Chest_RT.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Sleeve_LF.geometry} material={materials.M_LAFCpatch} skeleton={nodes.Patch_Sleeve_LF.skeleton} />
      <skinnedMesh geometry={nodes.Patch_Sleeve_RT.geometry} material={materials.M_City} skeleton={nodes.Patch_Sleeve_RT.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={nodes.Wolf3D_Body.material} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.M_JerseyMLS} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/jersey-transformed.glb')
