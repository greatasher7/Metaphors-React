// interface
export interface INovel {
  title: string;
  author: string;
  genre: string;
  items: string[];
  image: string;
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
  name?: string;
  act: string;
}
