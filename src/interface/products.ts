export type Products = {
  products: Product[];
};


export type Product = {
  productId: number;
  title: string;
  artist: string;
  description: string;
  picture: string;
  price: number;
  tags: string[];
  instar: string;
}