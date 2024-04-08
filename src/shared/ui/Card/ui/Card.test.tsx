import { screen } from '@testing-library/react';

import { renderComponent } from '../../../libs/jest';

import { Card } from './Card';

describe('Card', () => {
	test('render', () => {
		renderComponent(<Card>block</Card>);
		const component = screen.getByTestId('Card');
		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('card');
	});
});
