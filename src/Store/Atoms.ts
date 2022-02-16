import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isSigninAtom = atom({
  key: 'isSignin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
