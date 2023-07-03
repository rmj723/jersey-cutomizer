import gsap from 'gsap'
import useStore from '@/lib/store'
import { useCallback } from 'react'
import { isMobile } from 'react-device-detect'

const useInteractions = (ref, slug, state, title, isHome) => {
  const router = useStore((s) => s.router)
  const shouldReveal = useStore((s) => s.shouldReveal)
  const proxy = { value: 0, value2: 0 }
  router.prefetch(`/pack/${slug}`)

  const animate = useCallback(() => {
    ref.current.isAnimating = true
    useStore.setState({ activeProject: title, fromScrollStage: shouldReveal })

    gsap.to(state.camera.position, {
      delay: 0.25,
      duration: 0.75,
      x: ref.current.position.x,
      y: state.camera.aspect <= 1 ? -1 / 3 : 0,
      z: (state.camera.aspect <= 1 ? 8 : 6.5) + ref.current.position.z,
      ease: 'expo.inOut',
    })

    if (shouldReveal) {
      gsap.to(ref.current.rotation, {
        y: ref.current.rotation.y + Math.PI * 54,
        ease: 'expo.in',
        duration: 3,
      })
      gsap.to(proxy, {
        duration: 2,
        value: 1,
        ease: 'expo.inOut',
        onComplete: () => useStore.setState({ shouldBlur: true }),
      })
      gsap.to(ref.current.position, {
        duration: 2.5,
        z: '-=2',
        ease: 'expo.inOut',
        delay: 1,
      })
      gsap.to(proxy, {
        duration: 1,
        value2: 1,
        ease: 'expo.inOut',
        delay: 1,
        onComplete: () => router.push(`/pack/${slug}`),
      })
    } else {
      gsap.to(ref.current.rotation, {
        y: ref.current.rotation.y + Math.PI * 6,
        ease: 'expo.inOut',
        duration: 2,
        onComplete: () => router.push(`/pack/${slug}`),
      })
    }
  }, [shouldReveal])

  const enter = useCallback(() => {
    document.body.style.cursor = 'pointer'
    useStore.setState({ hoverProject: title })
  }, [])

  const leave = useCallback(() => {
    document.body.style.cursor = 'default'
    useStore.setState({ hoverProject: false })
  }, [])

  return { animate, enter, leave }
}

export default useInteractions
