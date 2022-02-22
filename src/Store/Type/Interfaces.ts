// temp
// export interface INovel {
//   title: string;
//   author: string;
//   genre: string;
//   items: string[];
//   image: string;
// }

export interface IPage {
  page: number;
  title?: string;
  author?: string;
  contents: string[];
  isVisibleOption: boolean;
  isLastPage: boolean;
}

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

export interface ISelectOption {
  item?: string;
  act: string;
}

export interface IFooterProps {
  moveNext: () => void;
  movePrev: () => void;
  isLastPage: boolean;
}

export interface ISideNavProps {
  toggleNav: () => void;
  clickLogout: () => void;
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

export interface IAccountBtn {
  label: string;
  onClick: () => void;
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
