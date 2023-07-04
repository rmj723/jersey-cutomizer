import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import Background from '@/components/dom/Background/Background';
import InteractionLayer from '@/components/dom/InteractionLayer';

const MainPage = dynamic(() => import('@/components/canvas/MainScene'), { ssr: false });

export default function Page(props) {
  return (
    <>
      <main>
        <Background />
        <InteractionLayer />
      </main>
    </>
  );
}

Page.canvas = (props) => (!isMobile ? <MainPage /> : null);

export async function getStaticProps() {
  return { props: { title: 'Index' } };
}
