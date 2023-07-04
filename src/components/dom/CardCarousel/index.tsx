import { Card } from './Card';
import s from './CardCarousel.module.scss';
import useStore from '@/lib/store';

const CardCarousel = () => {
  const { patches } = useStore();

  return (
    <div className={s.container}>
      <div className={s.card_group}>
        {patches.map((patch, idx) => (
          <Card key={idx} label={patch} src={`/img/patches/${patch}.png`} />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
