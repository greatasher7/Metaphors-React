// interface
export interface INovel {
  title: string;
  author: string;
  genre: string;
  items: string[];
  image: string;
}

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
}
