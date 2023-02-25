import { Product } from "../interfaces";
import { useState } from "react";

type Props = {
  product: Product;
};








export default function Item({ product }: Props) {

  return (
    <>
      <div className="flex flex-col group">
        <a href={product.url}>
          <div className="relative">
            <img
              decoding="async"
              src={product.images[0]}
              alt={`${product.title} from ${product.supplierName}`}
              className="object-fill rounded-lg inset-0 h-fit transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0"
            />
            <img
              decoding="async"
              src={product.images[1]}
              alt={`${product.title} from ${product.supplierName}`}
              className="absolute inset-0 object-fill rounded-lg h-fit transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
          {product.soldOut ?
            <div>



            </div>


            :
            <div>
            </div>}
          <p className="font-sans font-normal text-sm leading-4 mt-4 text-charcoal opacity-50 text-left align-top">Serves {parseInt(product.serves, 10)} | {parseInt(product.dishes, 10)} Dishes</p>
          <div className="mt-2 mb-4">
            <div className="flex flex-row justify-between mb-3">
              <h2 className="font-sans font-normal  sm:text-lg md:text-xl lg:text-2xl lg:leading-7  text-charcoal text-left align-top">{product.title.replace(/&amp;/g, '&')}</h2>
              <p className="text-lg font-medium pl-3">£{product.price}</p>
            </div>
            {product.supplierName.includes("by") ? <p className="font-sans font-normal text-base leading-5 text-charcoal ml-px text-left align-top">from {product.supplierName}</p> :
              <p className="font-sans font-normal text-base leading-5 text-charcoal ml-px text-left align-top">by {product.supplierName}</p>}

          </div>
        </a>
      </div>

    </>

  )
}