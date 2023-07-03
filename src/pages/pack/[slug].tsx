import dynamic from 'next/dynamic'
import React, { useRef, useLayoutEffect, useState } from 'react'
import pucks from '@/content/pucks'
import PuckTitle from '@/components/dom/PuckTitle'
import type { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import BackToPack from '@/components/dom/BackToPack'
import Button from '@/components/dom/Button'
import useStore from '@/lib/store'
import Video from '@/components/dom/Video'
import gsap from 'gsap'
import PuckInfo from '@/components/dom/PuckInfo'
import { useMediaQuery } from '@studio-freight/hamo'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Stage = dynamic(() => import('@/components/canvas/PuckStage'), { ssr: false })

// Dom components go here
export default function Slug({ puck }) {
  const playPuckOpening = useStore((state) => state.playPuckIntro)
  const [playing, setPlaying] = useState(false)
  const isLoaded = useStore((state) => state.isLoaded)
  const btnRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const blurRef = useRef()
  const isNarrowViewport = useMediaQuery('(max-width: 375px)')

  const [
    reveledPucks,
    addReveledPucks,
    playedPucks,
    addPlayedPucks,
    shouldReveal,
    fromScrollStage,
    shouldBlur,
    replayHightlight,
  ] = useStore((state) => [
    state.reveledPucks,
    state.addReveledPucks,
    state.playedPucks,
    state.addPlayedPucks,
    state.shouldReveal,
    state.fromScrollStage,
    state.shouldBlur,
    state.replayHightlight,
  ])
  useLayoutEffect(() => {
    if (!isLoaded) {
      return
    }

    // gsap.to(btnRef.current, {
    //   delay: 0.25,
    //   duration: 0.67,
    //   y: '0%',
    //   ease: 'expo.out',
    // })
  }, [isLoaded])

  useLayoutEffect(() => {
    if (shouldBlur && !fromScrollStage) {
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

  useLayoutEffect(() => {
    if (!playedPucks.includes(puck.title)) {
      return
    }
    if (!fromScrollStage) {
      gsap.to(btnRef.current, {
        delay: 0.25,
        duration: 0.67,
        y: '100%',
        ease: 'expo.out',
      })
    }
  }, [playedPucks, fromScrollStage])

  useLayoutEffect(() => {
    if (!shouldReveal) return
    if (!fromScrollStage) {
      gsap.to(btnRef.current, {
        delay: 1,
        duration: 0.67,
        y: '100%',
        ease: 'expo.out',
        // onComplete: () => {
        //   addPlayedPucks(puck.title)
        // },
      })
    }
  }, [shouldReveal, fromScrollStage])

  useLayoutEffect(() => {
    if (replayHightlight) {
      gsap.to(document.querySelector('main'), { opacity: 0, duration: 0.25 })
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            gsap.set(document.querySelector('main'), { opacity: 1 })
          },
        },
      )
    }
  }, [replayHightlight])

  useLayoutEffect(() => {
    useStore.setState({ animateIn: false })
  }, [])

  const shouldPlayHighlight = () =>
    (!reveledPucks.includes(puck.title) && playedPucks.includes(puck.title)) || replayHightlight

  return (
    <>
      <main>
        <div className={`${playing ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000	`}>
          {/* @ts-ignore */}
          <PuckTitle puck={puck} />
        </div>
        <div className={`${playing ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000	`}>
          <BackToPack />
        </div>
        {reveledPucks.includes(puck.title) && <PuckInfo puck={puck} />}
      </main>
      <div
        ref={btnRef}
        className={`absolute bottom-0 z-10 left-[50%] translate-x-[-50%] ${
          fromScrollStage ? 'opacity-0' : 'opacity-100'
        }`}>
        <Button
          className='px-10'
          onClick={() => {
            useStore.setState({ shouldReveal: true })
          }}
          text={'Reveal'}
        />
      </div>
      {reveledPucks.includes(puck.title) && (
        <div className={`absolute bottom-0 z-10 left-[50%] translate-x-[-50%]`}>
          <Button
            className='px-10'
            onClick={() => {
              // setPlaying(true)
              useStore.setState({ replayHightlight: true })
            }}
            text={isNarrowViewport ? 'Replay' : 'Replay Highlight'}
          />
        </div>
      )}
      {shouldReveal && fromScrollStage && <div className='absolute top-0 left-0 z-10 w-full h-full bg-black'></div>}
      {!fromScrollStage && !reveledPucks.includes(puck.title) && (
        <div
          ref={blurRef}
          className='absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none backdrop-blur-md'></div>
      )}
      {shouldPlayHighlight() && (
        <div ref={videoRef}>
          <Video
            bg
            playing={playedPucks.includes(puck.title) || playing}
            className={`pointer-events-none z-10`}
            fadeClass={`${playing ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            onEnded={() => {
              addReveledPucks(puck.title)
              setPlaying(false)
              useStore.setState({ fromScrollStage: false, replayHightlight: false })
            }}
            onPlay={() => {
              setTimeout(() => {
                useStore.setState({ shouldReveal: false })
                setPlaying(true)
              }, 1000)
            }}
            src={[puck.video]}
          />
        </div>
      )}
      <button
        onClick={() => {
          addReveledPucks(puck.title)
          setPlaying(false)
          useStore.setState({ shouldReveal: false, replayHightlight: false })
        }}
        className={`${
          playing ? 'opacity-100' : 'opacity-0'
        } absolute top-6 text-16 right-8 border-spacing-0 z-20 border-black-1 px-4 py-1 transition-opacity  border duration-1000`}>
        SKIP ANIMATION
      </button>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// @ts-ignore
Slug.canvas = ({ puck, index, length }) => <Stage puck={puck} length={length} index={index} />

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params!.slug

  if (!slug) {
    throw new Error(`Character slug not found`)
  }

  const puck = pucks.find((puck) => {
    return puck.slug === `${slug}`
  })

  if (!puck) {
    throw new Error(`puck not found`)
  }

  return {
    props: {
      puck: puck,
      length: pucks.length,
      index: pucks.indexOf(puck),
    },
  }
}

export async function getStaticPaths({}: GetStaticPathsContext) {
  return {
    paths: pucks.map((puck: any) => `/pack${puck.path}`),
    fallback: 'blocking',
  }
}
