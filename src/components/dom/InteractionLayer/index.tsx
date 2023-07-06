import { FormGroup, FormControlLabel, Switch, FormControl, FormLabel, Button } from '@mui/material';
import s from './InteractionLayer.module.scss';
import useStore from '@/lib/store';
import CardCarousel from '../CardCarousel';
import { useEffect, useMemo, useState } from 'react';
// import { SaveButton } from '@/components/icons/Buttons/SaveButton';
// import { CancelButton } from '@/components/icons/Buttons/CancelButton';
// import { EditButton } from '@/components/icons/Buttons/EditButton';

const InteractionLayer = () => {
  const { isEditing, jerseyColor, patchData } = useStore();

  const editBtnHandler = () => {
    useStore.setState({ isEditing: true });
  };

  const cancelBtnHandler = () => {
    useStore.setState({ isEditing: false });
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    const positions = Object.values(patchData).filter((_) => _ !== 0);
    setCount(positions.length);
  }, [patchData]);

  return (
    <div className={s.container}>
      <div className={s.description}>
        <h1>Place Patches</h1>

        <div>Choose an open patch spot and add patches from your collection to customize your jersey.</div>

        {/* <div className={s.buttonGroup}>
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
        </div> */}

        <FormControl component='fieldset' variant='standard' sx={{ marginTop: '50px' }}>
          <FormLabel component='legend' sx={{ color: '#1976d2' }}>
            JERSEY COLOR
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={jerseyColor === 'Black'}
                  onChange={() => {
                    useStore.setState({ jerseyColor: jerseyColor === 'Black' ? 'White' : 'Black' });
                  }}
                />
              }
              label={jerseyColor}
            />
          </FormGroup>
        </FormControl>

        <Button
          variant='outlined'
          color='secondary'
          onClick={() => {
            useStore.setState({
              jerseyColor: 'Black',
              lastPosition: -1,
              patchData: {
                Patch_Sleeve_RT: 0,
                Patch_Chest_RT: 0,
                Patch_Chest3: 0,
                Patch_Chest2: 0,
                Patch_Chest_LF: 0,
                Patch_Sleeve_LF: 0,
              },
            });
          }}>
          Reset
        </Button>
      </div>

      <div className={s.patch_status}>
        <div>Current Jersey</div>
        <div>LOS ANGELES FOOTBALL CLUB</div>
        <div>
          <span>{count}</span> patches
        </div>
      </div>

      <div className={s.carousel}>
        <CardCarousel />
      </div>
    </div>
  );
};

export default InteractionLayer;
