import { render, screen } from '@testing-library/react';
import Products from '../components/products';
import '@testing-library/jest-dom'

// Mock data
const mockProducts = [
    {
        title: 'Product 1',
        price: '10.99',
        supplierName: 'Supplier 1',
        images: ['image1.jpg', 'image2.jpg'],
        serves: "4 people",
        dishes: "2 DISHES",
        url: 'https://example.com/products/1',
        soldOut: false,
    },
    {
        title: 'Product 2',
        price: '15.99',
        supplierName: 'Supplier 2',
        images: ['image3.jpg', 'image4.jpg'],
        serves: "2 people",
        dishes: "1 Dishes",
        url: 'https://example.com/products/2',
        soldOut: true,
    },
];

describe('Products component', () => {
    it('should render a list of products', () => {
        render(<Products products={mockProducts} />);

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();

        const items = screen.getAllByTestId('product-item');
        expect(items.length).toBe(mockProducts.length);
    });

});
