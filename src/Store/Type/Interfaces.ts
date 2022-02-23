export interface IItem {
  name: string;
  image: string;
  durability: number;
  onSale: boolean;
  price?: number;
}

// interface /////////////////////////////

export interface IBtn {
  onClick?: () => void;
  label: string;
}

export interface IModalSelling {}

export interface IFooterProps {
  moveNext: () => void;
  movePrev: () => void;
  isLastPage: boolean | undefined;
  isFirstPage: boolean | undefined;
  haschoice: boolean | undefined;
}

export interface ISideNavProps {
  toggleNav: () => void;
  clickLogout: () => void;
  nickname: string;
}

export interface ICookieOptionProps {
  isActive: boolean;
  count: number;
  price: number;
  setFocus: (value: number) => void;
}

export interface IKlayOptionProps {
  isActive: boolean;
  count: number;
  setFocus: (value: number) => void;
}

export interface IInput {
  setState: (value: string) => void;
  isExternalWrong?: boolean;
}

// Account

export interface IAccountBtn {
  label: string;
  onClick: () => void;
}

export interface IUserNft {
  isDone: boolean;
  name: string;
  personality: string[];
  genre: string[];
}

export interface IBtnNft {
  onClick: (value: string, isSelected: boolean) => void;
  label: string;
}

export interface IUserAssetInfo {
  email: string;
  nickname: string;
  cookie: number;
  token: number;
}

// Novel
export interface INovel {
  id: number;
  name: string;
  author: string;
  imagePath: string;
  nftItems: string;
  genre: string;
}

export interface INovelDetail {
  novelId: number;
  name: string;
  author: string;
  imagePath: string;
  issueDate: string;
  description: string;
  nftItems: string;
  genre: string;
  current: number;
}

export interface INovelPage {
  number: number;
  content: string;
  hasChoice: boolean;
  context: string;
}

export interface INovelChoice {
  episodeId: string;
  item: string;
  context: string;
}

export interface INovelItem {
  id: string;
  name: string;
  imagePath: string;
  durability: string;
  maxDurability: string;
  isFreeToken: boolean;
  price: string;
}

export interface INovelEpisode {
  novelId: number;
  name: string;
  author: string;
  episodeId: string;
  current: number;
  pages: INovelPage[];
  choice: INovelChoice[];
  items: INovelItem[];
}

export interface IPage {
  title: string | undefined;
  author: string | undefined;
  contents: string | undefined;
  isVisibleOption: boolean | undefined;
  isLastPage: boolean | undefined;
  isFirstPage: boolean | undefined;
}

// Atoms
export interface ISignup {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  nickname: string;
  roles: string;
  accessToken: string;
  refreshToken: string;
  accessExpiredTime: string;
  refreshExpiredTime: string;
}

export interface INftUser {
  accessToken: string;
  name: string;
  personality1: string;
  personality2: string;
  personality3: string;
  genre1: string;
  genre2: string;
  genre3: string;
}

export interface IHeaderNovel {
  isNovel: boolean;
  title: string;
  current: number;
  novelId: number;
}
