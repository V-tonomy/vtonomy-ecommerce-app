export class Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;

  constructor(
    id: string,
    name: string,
    price: number,
    rating: number,
    reviews: number,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.reviews = reviews;
    this.image = image;
  }
}
