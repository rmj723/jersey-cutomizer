import { Canvas, CanvasTextureProps } from '@react-three/fiber';
import { Preload, Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

// @ts-ignore
export default function Scene({ children, className, ...props }: { children: JSX.Element[] } & CanvasTextureProps) {
  return (
    // @ts-ignore
    <Canvas
      {...props}
      camera={{ position: [0, 0, 2] }}
      style={{ zIndex: 0 }}
      gl={{ alpha: true }}
      onCreated={({ camera }) => {
        window['camera'] = camera;
      }}>
      <Environment files={'./studio_small_03_1k.hdr'} />
      {children}
      <Preload all />
      <OrbitControls enablePan={false} enableZoom={true} />
    </Canvas>
  );
}
