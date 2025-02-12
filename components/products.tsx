import { Product } from "../interfaces";
import Item from './item'

type Props = {
    products: Product[];
};


export default function Products({ products }: Props) {

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item: Product, index: number) => (
                <Item product={item} key={index}></Item>
            ))}
        </div>
    )

}