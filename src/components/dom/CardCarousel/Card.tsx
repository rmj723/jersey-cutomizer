import Image from 'next/image'
import s from './CardCarousel.module.scss'
import useStore from '@/lib/store'

interface Props {
  label: string
  src: string
}

export const Card: React.FC<Props> = ({ label, src }) => {
  const { addPatch } = useStore()

  const handler = () => {
    addPatch(label)
  }
  return (
    <div className={s.card} onClick={handler}>
      <Image src={src} alt={label} width={100} height={100} />
    </div>
  )
}
