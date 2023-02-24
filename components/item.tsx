import { Product } from "../interfaces";

type Props = {
  product: Product;
};




export default function Item({ product }: Props) {


  console.log("product", product)


  return (
    <>
      <div className="flex flex-col">
        <a href={product.url}><img src={product.images[0]} alt={`${product.title} from ${product.supplierName}`}></img></a>
        <p>Serves {product.serves} | {product.dishes} Dishes</p>
        <div className="mb-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-medium">{product.title}</h2>
            <p className="text-lg font-medium">£{product.price}</p>
          </div>

          <p className="text-sm text-gray-500">{product.supplierName}</p>

        </div>

      </div>

      {/* <p>{product.dishes}</p>
      <p>{product.price}</p>
      <p>{product.serves}</p>
      <p>{product.soldOut}</p>
      <p>{product.supplierName}</p>
      <p>{product.title}</p>
      <p>{product.url}</p> */}

    </>

  )
}