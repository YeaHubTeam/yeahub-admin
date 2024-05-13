import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

// import { fn } from 'jest-mock';
import i18n from '@/shared/config/jest/jestI18n';

import { NavigationItem, NavigationSidebarItem } from './NavigationSidebarItem';

// import { Translations } from '@/shared/config/i18n/i18nTranslations';

describe('NavigationSidebarItem', () => {
	jest.mock('react-i18next', () => ({
		useTranslation: () => ({
			t: (key: string) => {
				switch (key) {
					case 'questions':
						return 'Questions';
					case 'verification':
						return 'Verification';
					default:
						return 'Default Title';
				}
			},
		}),
	}));

	test('rendering nav elements', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<MemoryRouter>
					<NavigationSidebarItem />
				</MemoryRouter>
			</I18nextProvider>
		);
		expect(screen.getByText(/Questions/i)).toBeInTheDocument();
		expect(screen.getByText(/Verification/i)).toBeInTheDocument();
	});

	test('each navigation item has correct link', () => {
		const { getByText } = render(
			<MemoryRouter>
				<NavigationItem name="questions" />
			</MemoryRouter>
		);
		const questionsTitle = getByText(/questions/i);
		expect(questionsTitle).toBeInTheDocument();
	});
});
