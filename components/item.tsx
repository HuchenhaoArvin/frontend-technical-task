import { Product } from "../interfaces";

type Props = {
  product: Product;
};

export default function Item({ product }: Props) {

  const updatedProduct = {
    ...product,
    title: product.title.replace(/&amp;/g, '&'),
    serves: parseInt(product.serves, 10),
    dishes: parseInt(product.dishes, 10),


  };

  return (
    <>
      <div className="flex flex-col group" data-testid="product-item">
        <a href={updatedProduct.url}>

          <div className="relative">
            <img
              decoding="async"
              src={updatedProduct.images[0]}
              alt={`${updatedProduct.title} from ${updatedProduct.supplierName}`}
              className="object-fill rounded-lg inset-0 h-fit transition-opacity duration-500 ease-out opacity-100 md:group-hover:opacity-0"

            />
            <img
              decoding="async"
              src={updatedProduct.images[1]}
              alt={`${updatedProduct.title} from ${updatedProduct.supplierName} hover on image`}

              className="absolute inset-0 object-fill rounded-lg h-fit transition-opacity duration-500 opacity-0 md:group-hover:opacity-100"

            />
            {updatedProduct.soldOut && <div className="absolute inset-0 bg-oat bg-opacity-50 rounded-lg " data-testid="soldout-cover"></div>}
          </div>

          <p className="font-sans font-normal text-sm leading-4 mt-4 text-charcoal opacity-50 ">
            Serves {updatedProduct.serves} | {updatedProduct.dishes} Dishes
          </p>

          <div className="mt-2 mb-4">

            <div className="flex flex-row justify-between mb-3 font-sans font-normal  sm:text-lg md:text-xl lg:text-2xl lg:leading-7  text-charcoal">
              <h2>
                {updatedProduct.title}
              </h2>
              <p className="pl-3">£{updatedProduct.price}</p>
            </div>

            {updatedProduct.supplierName.includes("by")
              ? <p className="font-sans font-normal text-base leading-5 text-charcoal ml-px ">from {updatedProduct.supplierName}</p>
              : <p className="font-sans font-normal text-base leading-5 text-charcoal ml-px ">by {updatedProduct.supplierName}</p>
            }

          </div>
        </a>
      </div>

    </>

  )
}