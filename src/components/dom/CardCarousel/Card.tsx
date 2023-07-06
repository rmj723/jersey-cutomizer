import Image from 'next/image';
import s from './CardCarousel.module.scss';
import useStore from '@/lib/store';
import { Plus } from '@/components/icons/Plus';
import { Minus } from '@/components/icons/Minus';
import { getRandomPositionToPlace } from '@/lib/utils';

interface Props {
  label: string;
  src: string;
}

export const Card: React.FC<Props> = ({ label, src }) => {
  const { patchData } = useStore();

  const handler = () => {
    const newPatchData = { ...patchData };
    const isPatchAdded = patchData[label] !== 0;

    const newPosition = getRandomPositionToPlace(patchData);

    newPatchData[label] = isPatchAdded ? 0 : newPosition;
    const lastPosition = isPatchAdded ? 0 : newPosition;

    useStore.setState({ patchData: newPatchData, lastPosition });
  };

  const isPatchAdded = patchData[label] !== 0;

  return (
    <div className={s.card} onClick={handler}>
      {isPatchAdded ? <Minus /> : <Plus />}
      <Image src={src} alt={label} width={150} height={150} />
    </div>
  );
};
