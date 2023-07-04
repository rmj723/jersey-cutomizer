import { gsap } from 'gsap';
import { useGLTF } from '@react-three/drei';
import { GroupProps, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import useStore, { cameraPos } from '@/lib/store';

const Jersey: React.FC<GroupProps> = ({ ...props }) => {
  const { nodes, materials } = useGLTF('./models/jersey/jersey-transformed.glb') as any;

  const { patches, textures, jerseyColor, filledPatches } = useStore();
  const { camera } = useThree();

  // Get all textures
  useEffect(() => {
    for (let key in nodes) {
      if (patches.includes(key)) {
        const { map, normalMap, metalnessMap, roughnessMap } = nodes[key].material;
        textures[key] = {
          map,
          normalMap,
          metalnessMap,
          roughnessMap,
        };
        nodes[key].material.visible = false;
      }
    }
  }, [nodes, patches, textures]);

  // Initialization
  useEffect(() => {
    if (filledPatches.length !== 0) return;
    for (let key in nodes) {
      if (patches.includes(key)) {
        nodes[key].material.visible = false;
      }
    }

    gsap.to(camera.position, {
      x: cameraPos.Patch_Chest2[0],
      y: cameraPos.Patch_Chest2[1],
      z: cameraPos.Patch_Chest2[2],
      duration: 0.8,
    });
  }, [camera, filledPatches, nodes, patches]);

  // Update patch textures
  useEffect(() => {
    if (filledPatches.length > 6) return;

    let fixedCount = 0;
    for (let i = 0; i < filledPatches.length; ++i) {
      let mat = nodes[patches[i - fixedCount]].material;
      let targetPos = cameraPos[patches[i - fixedCount]];

      const isFixed = ['Patch_Chest1', 'Patch_Back1', 'Patch_Back2'].includes(filledPatches[i]);

      if (isFixed) {
        ++fixedCount;
        mat = nodes[filledPatches[i]].material;
        targetPos = cameraPos[filledPatches[i]];
      }

      const { map, normalMap, metalnessMap, roughnessMap } = textures[filledPatches[i]];
      mat.map = map;
      mat.normalMap = normalMap;
      mat.visible = true;
      mat.metalnessMap = metalnessMap;
      mat.roughnessMap = roughnessMap;

      gsap.to(camera.position, {
        x: targetPos[0],
        y: targetPos[1],
        z: targetPos[2],
        duration: 0.8,
      });
    }
  }, [nodes, patches, textures, filledPatches, camera.position]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.M_JerseyMLS_White}
        position={[-1.04, 1.37, -0.41]}
        scale={0.07}
        visible={false}
      />
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Patch_Back1.geometry}
        material={materials.M_SweetPop}
        skeleton={nodes.Patch_Back1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Back2.geometry}
        material={materials.M_Sweet}
        skeleton={nodes.Patch_Back2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Chest1.geometry}
        material={materials.M_Flex}
        skeleton={nodes.Patch_Chest1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Chest2.geometry}
        material={materials.M_LAFCshield}
        skeleton={nodes.Patch_Chest2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Chest3.geometry}
        material={materials.M_Adidas}
        skeleton={nodes.Patch_Chest3.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Chest_LF.geometry}
        material={materials.M_Wing}
        skeleton={nodes.Patch_Chest_LF.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Chest_RT.geometry}
        material={materials.M_MLSshield}
        skeleton={nodes.Patch_Chest_RT.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Sleeve_LF.geometry}
        material={materials.M_LAFCpatch}
        skeleton={nodes.Patch_Sleeve_LF.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Patch_Sleeve_RT.geometry}
        material={materials.M_City}
        skeleton={nodes.Patch_Sleeve_RT.skeleton}
      />
      {/* <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={nodes.Wolf3D_Body.material}
        skeleton={nodes.Wolf3D_Body.skeleton}
      /> */}
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={jerseyColor === 'Black' ? materials.M_JerseyMLS_Black : materials.M_JerseyMLS_White}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      {/* <skinnedMesh
        name='Wolf3D_Head'
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      /> */}
    </group>
  );
};

export default Jersey;

useGLTF.preload('./models/jersey/jersey-transformed.glb');
