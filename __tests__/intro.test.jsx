import Intro from '../components/intro';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Intro', () => {
    it('renders the intro component', () => {
        const { getByText } = render(<Intro />);
        expect(screen.getByTestId('intro')).toBeInTheDocument();
        const headingElement = getByText('Restaurant Meal Kits');
        const paragraphElement = getByText('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quasi similique eos quis pariatur, tempore vitae exercitationem nostrum commodi, veniam fugiat reprehenderit laborum maxime qui eum blanditiis facere aspernatur temporibus.');
        expect(headingElement).toBeInTheDocument();
        expect(paragraphElement).toBeInTheDocument();
    })



})