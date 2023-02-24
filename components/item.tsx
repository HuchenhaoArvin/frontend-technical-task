import { Product } from "../interfaces";

type Props = {
  product: Product;
};




export default function Item({ product }: Props) {

  return (
    <>
      <div className="flex flex-col">

        <a href={product.url}><img className="h-fit object-fill rounded-lg" src={product.images[0]} alt={`${product.title} from ${product.supplierName}`}></img></a>
        <p className="font-sans font-normal text-sm leading-4 mt-4 text-charcoal opacity-50 text-left align-top">Serves {product.serves.replace("people", "")} | {parseInt(product.dishes, 10)} Dishes</p>
        <div className="mt-2 mb-4">
          <div className="flex flex-row justify-between mb-3">
            <h2 className="font-sans font-normal  sm:text-lg md:text-xl lg:text-2xl lg:leading-7  text-charcoal text-left align-top">{product.title.replace(/&amp;/g, '&')}</h2>
            <p className="text-lg font-medium pl-3">£{product.price}</p>
          </div>
          {product.supplierName.includes("by") ? <p className="font-sans font-normal text-base leading-5 text-charcoal ml-px text-left align-top">from {product.supplierName}</p> :
            <p className="font-sans font-normal text-base leading-5 text-charcoal ml-px text-left align-top">by {product.supplierName}</p>}

        </div>

      </div>

    </>

  )
}