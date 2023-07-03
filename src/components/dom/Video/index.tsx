import { FC, useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import s from './Video.module.scss'

interface Props {
  src: Array<string>
  className?: string
  playing: boolean
  bg?: boolean
  onEnded?: () => void
  onPlay?: () => void
  onTimeUpdate?: (e: any) => void
  poster?: string
  fadeClass?: string
}

const Video: FC<Props> = ({ src, className, playing, bg, onEnded, onPlay, onTimeUpdate, poster, fadeClass }) => {
  const ref = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (playing) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }, [playing])

  return (
    <div ref={containerRef} className={`${s.videoContainer} ${className || ''} ${bg ? s.bg : ''}`}>
      <video
        ref={ref}
        onEnded={onEnded}
        onPlay={onPlay}
        onTimeUpdate={onTimeUpdate}
        playsInline
        muted
        className={fadeClass}
        autoPlay={playing}>
        {src.map((file) => (
          <source key={file} src={file} type={`video/${file.includes('webm') ? 'webm' : 'mp4'}`} />
        ))}
      </video>
      {poster && !playing && (
        <div className={s.poster}>
          {/* @ts-ignore */}
          <Image src={poster} alt={''} fill />
        </div>
      )}
    </div>
  )
}

export default Video
