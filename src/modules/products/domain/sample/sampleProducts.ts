import { Product } from "../entity/Product";

export const sampleProducts = Array.from(
  { length: 100 },
  (_, i) =>
    new Product(
      String(i + 1),
      `Product ${i + 1}`,
      Math.floor(Math.random() * 900) + 100,
      Math.random() * 2 + 3,
      Math.floor(Math.random() * 500) + 50,
      `https://via.placeholder.com/300x300/7B68EE/FFFFFF?text=Product+${i + 1}`,
    ),
);
