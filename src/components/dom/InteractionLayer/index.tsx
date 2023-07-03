import { SaveButton } from '@/components/icons/Buttons/SaveButton'
import s from './InteractionLayer.module.scss'
import { CancelButton } from '@/components/icons/Buttons/CancelButton'
import useStore from '@/lib/store'
import { EditButton } from '@/components/icons/Buttons/EditButton'
import CardCarousel from '../CardCarousel'

const InteractionLayer = () => {
  const { isEditing } = useStore()

  const editBtnHandler = () => {
    useStore.setState({ isEditing: true })
  }

  const cancelBtnHandler = () => {
    useStore.setState({ isEditing: false })
  }

  return (
    <div className={s.container}>
      <div className={s.description}>
        <h1>Place Patches</h1>

        <div>Choose an open patch spot and add patches from your collection to customize your jersey.</div>

        <div className={s.buttonGroup}>
          {isEditing ? (
            <>
              <div>
                <SaveButton />
              </div>

              <div onClick={cancelBtnHandler}>
                <CancelButton />
              </div>
            </>
          ) : (
            <div onClick={editBtnHandler}>
              <EditButton />
            </div>
          )}
        </div>
      </div>

      <div className={s.patch_status}>
        <div>Current Jersey</div>
        <div>LOS ANGELES FOOTBALL CLUB</div>
        <div>
          <span>0</span> patches
        </div>
      </div>

      <div className={s.carousel}>
        <CardCarousel />
      </div>
    </div>
  )
}

export default InteractionLayer
