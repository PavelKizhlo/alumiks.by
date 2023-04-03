export interface ProductGroup {
  id: number;
  slug: string;
  title: string;
  headingImg: string;
  description: string;
  items: ProductItem[];
}

export interface ProductItem {
  id: number;
  slug: string;
  img: string;
  title: string;
  colors?: Color[];
  // не доделано
}

export interface Color {
  id: number;
  title: string;
  colorCode: string;
}
