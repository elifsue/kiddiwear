/* ─── Product images for Hi-Fi mode (4:5 aspect ratio, children's clothing catalog) ─── */
/* 20 product photos showcasing various children's clothing items */
export const productImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-01-tshirt-PhzFpLMhPri3pjxMyHi33P.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-02-dress-S6pJPG3xSPSpk5GFF6RLo2.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-03-jacket-mGd5C8jxfsYqp9xMeRfqWs.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-04-raincoat-6xR5ZsyZTgH6vTG4u9F4KB.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-05-shoes-4hR64fenXoitBWXqox3oyX.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-06-hoodie-4j2jyL7YaCv8RZxPmRcFnt.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-07-sweatshirt-doqY5xGUsCfzp9yNrRDpSe.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-08-shorts-V6hEoSjQpnbpKRWjUwYDKe.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-09-bag-Tya4AhZQYFGNH6f9gRR8KG.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-10-watch-MSPJ3Jz37n32J6DPrphWnc.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-11-pants-2323rtPJVXmr2Rnj656arU.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-12-skirt-4RGitJeMeYXNdP5Bzx3Tmc.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-13-hat-JmJVJ37PpaDnsmznNLdhSU.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-14-hoodie2-UZfWLhnZhFBgjgVq8FruoQ.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-15-tshirt2-Ww2MCo82gp9UdVEkkekMHd.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-16-dress2-AXD3t7XK5iUU4wUSHZMy7x.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-17-boots-eyKErh5LJQNrjCX97gNcgn.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-18-polo-HvkY8LpgSJ4Y8LgShAhDHY.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-19-wintercoat-WVLeHTbLcSxDUUsE9tcYzY.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-20-messenger-AFvTn7CGtTTE9LDRX7YkYT.webp",
];

let imgCounter = 0;
export function getProductImg() {
  return productImages[imgCounter++ % productImages.length];
}
