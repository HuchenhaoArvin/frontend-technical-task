import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Item from '../components/item'

const product = {
    title: 'Product &amp; 1',
    price: '15.99',
    supplierName: 'Supplier 1',
    images: ['image1.jpg', 'image2.jpg'],
    serves: "2 people",
    dishes: "1 DISHES",
    url: 'https://example.com/products/2',
    soldOut: true,
};

describe('Item', () => {
    it('renders the item component', () => {
        const { getByText, getByAltText } = render(<Item product={product} />);
        expect(screen.getByTestId('product-item')).toBeInTheDocument();

        const headingElement = getByText('Product & 1');
        const supplierElement = getByText('by Supplier 1');
        const priceElement = getByText('£15.99');
        const servesElement = getByText('Serves 2 | 1 Dishes');
        const imageElement = getByAltText('Product & 1 from Supplier 1');
        const hoverImageElement = getByAltText('Product & 1 from Supplier 1 hover on image');
        const soldOutElement = screen.getByTestId('soldout-cover');
        expect(headingElement).toBeInTheDocument();
        expect(supplierElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
        expect(servesElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
        expect(hoverImageElement).toBeInTheDocument();
        expect(soldOutElement).toBeInTheDocument();
    })
})



