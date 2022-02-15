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
}
