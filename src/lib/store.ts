import { Texture } from 'three';
import { create } from 'zustand';

interface TextureSetType {
  map: Texture;
  normalMap: Texture;
  metalnessMap: Texture;
  roughnessMap: Texture;
}

interface Store {
  isEditing: boolean;
  jerseyColor: string;
  lastPosition: number;
  patches: string[];
  patchData: Object;
  textures: TextureSetType[];
}

export default create<Store>((set) => ({
  isEditing: false,
  jerseyColor: 'Black',
  lastPosition: 0, // 1 ~ 6
  patches: ['Patch_Sleeve_RT', 'Patch_Chest_RT', 'Patch_Chest3', 'Patch_Chest2', 'Patch_Chest_LF', 'Patch_Sleeve_LF'],
  patchData: {
    Patch_Sleeve_RT: 0, // 0: Not placed
    Patch_Chest_RT: 0, // 1 ~ 6: Positions
    Patch_Chest3: 0,
    Patch_Chest2: 0,
    Patch_Chest_LF: 0,
    Patch_Sleeve_LF: 0,
  },
  textures: [],
}));

export const cameraPos = {
  Patch_Chest2: [-0.2, 0.73, 1.85],
  Patch_Chest3: [-0.2, 0.73, 1.85],
  Patch_Chest_RT: [-0.2, 0.73, 1.85],
  Patch_Chest_LF: [-0.2, 0.73, 1.85],
  Patch_Sleeve_RT: [-1.81, 0.763, -0.31],
  Patch_Sleeve_LF: [1.92, 0.51, -0.15],
};
