import dynamic from 'next/dynamic'
import useStore from '@/lib/store'
import { isMobile } from 'react-device-detect'
import Background from '@/components/dom/Background/Background'
import InteractionLayer from '@/components/dom/InteractionLayer'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const MainPage = dynamic(() => import('@/components/canvas/MainScene'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return (
    <>
      <main>
        <Background />
        <InteractionLayer />
      </main>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// @ts-ignore
Page.canvas = (props) => (!isMobile ? <MainPage /> : null)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
