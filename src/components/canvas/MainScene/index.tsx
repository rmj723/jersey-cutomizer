import React from 'react';
import Jersey from '@/components/canvas/Jersey';
import useStore from '@/lib/store';

export default function MainScene() {
  const { jerseyColor } = useStore();
  return (
    <>
      {/* <pointLight color={'#BF8FFD'} intensity={0.7} position={[0, 0, 0]} />
      <pointLight color={'#0688AF'} intensity={0.6} position={[0, 0, -50]} />
      <pointLight color={'#fff'} intensity={0.5} position={[0, 0, 10]} /> */}
      <ambientLight intensity={jerseyColor === 'Black' ? 1 : 0} />
      <Jersey position-y={-2.48} scale={2.05} />
    </>
  );
}
