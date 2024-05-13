import { fireEvent, render } from '@testing-library/react';
import { fn } from 'jest-mock';
import { I18nextProvider } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import i18n from '@/shared/config/jest/jestI18n';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
	const onSearchMock = fn();

	afterEach(() => {
		onSearchMock.mockClear();
	});

	test('should render search input without crashing', () => {
		render(
			<I18nextProvider i18n={i18n}>
				<SearchInput onSearch={onSearchMock} />
			</I18nextProvider>
		);
	});

	test('should render input with placeholder', () => {
		const { getByPlaceholderText } = render(<SearchInput onSearch={onSearchMock} />);
		const inputElement = getByPlaceholderText(Translations.SEARCHINPUT_PLACEHOLDER);
		expect(inputElement).toBeInTheDocument();
	});

	test('should update query state when input value changes', () => {
		const { getByTestId } = render(<SearchInput onSearch={onSearchMock} />);
		const inputElement = getByTestId('search-input') as HTMLInputElement;
		fireEvent.change(inputElement, { target: { value: 'test query' } });
		expect(inputElement.value).toBe('test query');
	});

	test('should call onSearch when Enter key is pressed', () => {
		const { getByTestId } = render(<SearchInput onSearch={onSearchMock} />);
		const inputElement = getByTestId('search-input') as HTMLInputElement;

		fireEvent.change(inputElement, { target: { value: 'Guse' } });

		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

		expect(onSearchMock).toHaveBeenCalledWith('Guse');
	});

	test('should not trigger on Search when pressing the Enter key with an empty query', () => {
		const { getByTestId } = render(<SearchInput onSearch={onSearchMock} />);
		const inputElement = getByTestId('search-input') as HTMLInputElement;

		fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

		expect(onSearchMock).not.toHaveBeenCalled();
	});
});
