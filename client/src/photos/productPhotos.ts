/* ─── Product images for Hi-Fi mode (4:5 aspect ratio, children's clothing catalog) ─── */
/* 20 product photos showcasing various children's clothing items */
import product01Tshirt from "@/assets/products/product-01-tshirt.png";
import product02Dress from "@/assets/products/product-02-dress.png";
import product03Jacket from "@/assets/products/product-03-jacket.png";
import product04Raincoat from "@/assets/products/product-04-raincoat.png";
import product05Shoes from "@/assets/products/product-05-shoes.png";
import product06Hoodie from "@/assets/products/product-06-hoodie.png";
import product07Sweatshirt from "@/assets/products/product-07-sweatshirt.png";
import product08Shorts from "@/assets/products/product-08-shorts.png";
import product09Bag from "@/assets/products/product-09-bag.png";
import product10Watch from "@/assets/products/product-10-watch.png";
import product11Pants from "@/assets/products/product-11-pants.png";
import product12Skirt from "@/assets/products/product-12-skirt.png";
import product13Hat from "@/assets/products/product-13-hat.png";
import product14Hoodie2 from "@/assets/products/product-14-hoodie2.png";
import product15Tshirt2 from "@/assets/products/product-15-tshirt2.png";
import product16Dress2 from "@/assets/products/product-16-dress2.png";
import product17Boots from "@/assets/products/product-17-boots.png";
import product18Polo from "@/assets/products/product-18-polo.png";
import product19Wintercoat from "@/assets/products/product-19-wintercoat.png";
import product20Messenger from "@/assets/products/product-20-messenger.png";

export const productImages = [
  product01Tshirt,
  product02Dress,
  product03Jacket,
  product04Raincoat,
  product05Shoes,
  product06Hoodie,
  product07Sweatshirt,
  product08Shorts,
  product09Bag,
  product10Watch,
  product11Pants,
  product12Skirt,
  product13Hat,
  product14Hoodie2,
  product15Tshirt2,
  product16Dress2,
  product17Boots,
  product18Polo,
  product19Wintercoat,
  product20Messenger,
];

let imgCounter = 0;
export function getProductImg() {
  return productImages[imgCounter++ % productImages.length];
}
