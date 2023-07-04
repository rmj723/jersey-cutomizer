import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/config';
import Layout from '@/components/dom/Layout';
import '@/styles/index.scss';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true });

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef();

  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        {Component?.canvas && (
          <Scene
            // @ts-ignore
            // eventSource={ref}
            // eventPrefix='client'
            shadows
            camera={{
              fov: 50,
              position: [0, 0, 10],
              rotation: [-0.1, 0, 0],
            }}>
            {Component.canvas(pageProps)}
          </Scene>
        )}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
