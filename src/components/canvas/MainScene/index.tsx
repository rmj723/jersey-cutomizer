import React from 'react';
import Jersey from '@/components/canvas/Jersey';
import useStore from '@/lib/store';

export default function MainScene() {
  return (
    <>
      {/* <pointLight color={'#BF8FFD'} intensity={0.7} position={[0, 0, 0]} />
      <pointLight color={'#0688AF'} intensity={0.6} position={[0, 0, -50]} />
      <pointLight color={'#fff'} intensity={0.5} position={[0, 0, 10]} /> */}
      <ambientLight intensity={1} />
      <Jersey position-y={-2.5} scale={2.1} />
    </>
  );
}
