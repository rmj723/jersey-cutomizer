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
  filledPatches: string[];
  patches: string[];
  textures: TextureSetType[];
  addPatch: (patch: string) => void;
}

export default create<Store>((set) => ({
  isEditing: false,
  filledPatches: [],
  patches: [
    'Patch_Chest2',
    'Patch_Chest3',
    'Patch_Chest_RT',
    'Patch_Chest_LF',
    'Patch_Sleeve_RT',
    'Patch_Sleeve_LF',
    'Patch_Chest1',
    'Patch_Back1',
    'Patch_Back2',
  ],
  textures: [],
  addPatch: (patch: string) => {
    set((state) => ({
      filledPatches: [...state.filledPatches, patch],
    }));
  },
}));

export const cameraPos = {
  Patch_Chest2: [-0.2, 0.73, 1.85],
  Patch_Chest3: [-0.2, 0.73, 1.85],
  Patch_Chest_RT: [-0.2, 0.73, 1.85],
  Patch_Chest_LF: [-0.2, 0.73, 1.85],
  Patch_Sleeve_RT: [-1.81, 0.763, -0.31],
  Patch_Sleeve_LF: [1.92, 0.51, -0.15],
  Patch_Chest1: [-0.2, 0.73, 1.85],
  Patch_Back1: [-0.012, 0.67, -1.88],
  Patch_Back2: [-0.012, 0.67, -1.88],
};
