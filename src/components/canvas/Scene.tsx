/* eslint-disable jsx-a11y/alt-text */
import { Canvas, CanvasTextureProps } from '@react-three/fiber';
import { Preload, Environment, Image, OrbitControls, SpotLight } from '@react-three/drei';
import PostProcessing from './PostProcessing';
import { Bloom } from '@react-three/postprocessing';
import { useWindowSize } from 'react-use';

// @ts-ignore
export default function Scene({ children, className, ...props }: { children: JSX.Element[] } & CanvasTextureProps) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    // @ts-ignore
    <Canvas
      {...props}
      camera={{ position: [0, 0, 2] }}
      gl={{ alpha: true }}
      onCreated={({ camera }) => {
        window['camera'] = camera;
      }}>
      <Environment files={'./studio_small_03_1k.hdr'} />
      {/* <spotLight position={[0, 50, 100]} angle={1} penumbra={1} intensity={0.5} /> */}
      {children}
      <Preload all />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
