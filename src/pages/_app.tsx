import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/config';
import Layout from '@/components/dom/Layout';
import { TransitionProvider, TransitionLayout } from '@/utils/transition';
import '@/styles/index.scss';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true });

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef();

  return (
    <>
      <TransitionProvider>
        <TransitionLayout>
          <Header title={pageProps.title} />
          <Layout ref={ref}>
            {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
             * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
             * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
            {Component?.canvas && (
              <Scene
                // @ts-ignore
                className='pointer-events-none'
                eventSource={ref}
                eventPrefix='client'
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
        </TransitionLayout>
      </TransitionProvider>
    </>
  );
}
