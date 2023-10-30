export type products = {
  products: product[];
};

export type product = {
  productId: number;
  profilImg: string;
  name: string;
  picture: string;
  title: string;
  likes: number;
  views: number;
  tag: string[];
};
