export interface ProductGroup {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  headingImg: string;
  description: string;
  items: ProductItem[];
}

export interface ProductItem {
  id: number;
  slug: string;
  images: ItemImage[];
  title: string;
  configurations?: ItemConfig[];
  colors?: Color[];
  price: string;
}

export interface ItemImage {
  id: number;
  src: string;
}

export interface ItemConfig {
  id: number;
  title: string;
  img: string;
  description: string;
}

export interface Color {
  id: number;
  title: string;
  colorCode: string;
}
