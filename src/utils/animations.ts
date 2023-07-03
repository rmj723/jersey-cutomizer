import { isMobile } from 'react-device-detect'
import { scroll } from './scroll'
import gsap from 'gsap'
import useStore from '@/lib/store'

export const next = (direction, isAnimating, pucks) => {
  isAnimating.current = true
  const amount = isMobile ? 4 : (1 / pucks.length) * Math.PI * 2
  useStore.setState({ isDraging: false })
  gsap.to(scroll, {
    sl: direction ? `+=${amount}` : `-=${amount}`,
    rotation: direction ? `+=${Math.PI * 2}` : `-=${Math.PI * 2}`,
    duration: 1.25,
    ease: 'expo.out',
    onStart: () => {
      useStore.setState({ nextLeave: true })
    },
    onComplete: () => {
      isAnimating.current = false
      useStore.setState({ nextLeave: false })
    },
  })
}
