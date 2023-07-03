import dynamic from 'next/dynamic'
import React, { useLayoutEffect, useRef } from 'react'
import useStore from '@/lib/store'
import pucks from '@/content/pucks'
import PackInfo from '@/components/dom/PackInfo'
import { PuckPagination } from '@/components/dom/PuckPagination'
import Button from '@/components/dom/Button'
import { gsap } from 'gsap'
import { next } from '@/utils/animations'
import { isMobile } from 'react-device-detect'
import { ArrowTriple } from '@/components/icons/ArrowTriple'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Stage = dynamic(() => import('@/components/canvas/PackStageScroll'), { ssr: false })

// Dom components go here
export default function Page(props) {
  const introDone = useStore((s) => s.introDone)
  const shouldBlur = useStore((s) => s.shouldBlur)
  const overlayRef = useRef()
  const blurRef = useRef()
  const activeIndex = useStore((s) => s.activeIndex)
  const activePuck = pucks[activeIndex]
  const reveledPucks = useStore((s) => s.reveledPucks)
  const isRevealed = reveledPucks.includes(activePuck.title)
  const isAnimating = useRef(false)

  useLayoutEffect(() => {
    useStore.setState({
      shouldReveal: false,
      shouldBlur: false,
    })
    document.querySelector('canvas').style.zIndex = '0'
    if (!overlayRef.current && !introDone) return
    const tween = gsap.to(overlayRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: 'Power4.Out',
      onComplete: () => useStore.setState({ startIntro: true }),
    })
    return () => {
      tween.kill()
    }
  }, [])

  const clickHandler = () => {
    useStore.setState({ shouldReveal: true, animateIn: true, fromScrollStage: true, replayHightlight: isRevealed })
  }

  useLayoutEffect(() => {
    if (shouldBlur) {
      gsap.fromTo(
        blurRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          background: 'rgba(0,0,0,1)',
          onComplete: () => {
            useStore.setState({ shouldBlur: false })
          },
        },
      )
    }
  }, [shouldBlur])

  return (
    <>
      <main className=''>
        {!introDone && <div ref={overlayRef} className='fixed top-0 left-0 w-full h-screen bg-black'></div>}
        <PackInfo pucks={pucks} />
        {introDone && (
          <>
            <div className='absolute bottom-0 justify-center w-full '>
              <div className='flex flex-col items-center gap-y-5'>
                <PuckPagination rarity='legendary' />
                <Button onClick={clickHandler} text={!isRevealed ? 'Reveal Highlight' : 'Replay Highlight'}></Button>
              </div>
            </div>
            <ArrowTriple
              className={`absolute md:w-auto md:h-auto md:bottom-14 w-[10%] h-[10%] right-2 bottom-5 transform -translate-y-1/2 lg:right-6 lg:bottom-1/2 md:right-1/4`}
              onClick={() => {
                if (isAnimating.current) return
                next(false, isAnimating, pucks)
              }}
              direction='right'
            />
            <ArrowTriple
              className={`absolute left-2 bottom-5 md:bottom-14 md:w-auto md:h-auto w-[10%] h-[10%] transform -translate-y-1/2 lg:left-6 lg:bottom-1/2 md:left-1/4`}
              onClick={() => {
                if (isAnimating.current) return
                next(true, isAnimating, pucks)
              }}
              direction='left'
            />
          </>
        )}
      </main>
      <div
        ref={blurRef}
        className='absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none backdrop-blur-md'></div>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// @ts-ignore
Page.canvas = (props) => {
  return <Stage pucks={pucks} />
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
