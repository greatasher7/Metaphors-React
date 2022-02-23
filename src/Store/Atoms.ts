import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { INftUser, ISignup, IUser, IUserAssetInfo } from './Type/Interfaces';

const { persistAtom } = recoilPersist();

export const signupAtom = atom<ISignup>({
  key: 'signup',
  default: {
    email: '',
    password: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const userInfoAtom = atom<IUser>({
  key: 'userInfo',
  default: {
    id: '',
    email: '',
    nickname: '',
    roles: '',
    accessToken: '',
    refreshToken: '',
    accessExpiredTime: '',
    refreshExpiredTime: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const isSigninAtom = atom({
  key: 'isSignin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const changeAssetToggleAtom = atom<boolean>({
  key: 'userAssetInfo',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const useCookieAtom = atom<string>({
  key: 'useCookie',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const nextEpisodeAtom = atom<boolean>({
  key: 'nextEpisode',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const nftAtom = atom<INftUser>({
  key: 'nextEpisode',
  default: {
    accessToken: '',
    name: '',
    personality1: '',
    personality2: '',
    personality3: '',
    genre1: '',
    genre2: '',
    genre3: '',
  },
  effects_UNSTABLE: [persistAtom],
});
