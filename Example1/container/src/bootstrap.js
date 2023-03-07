import { mountProducts } from "products/ProductsIndex";
import { mountCart } from "cart/CartsIndex";

const products = document.querySelector("#my-products");
mountProducts(products);

const cart = document.querySelector("#my-cart");
mountCart(cart);
