import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';

interface TableProps<T> {
	/**
	 * Array of elements displayed in the table
	 */
	items: T[];
	/**
	 * Render function for displaying the table header
	 */
	renderTableHeader: () => ReactNode;
	/**
	 * Render function for displaying the table body
	 */
	renderTableBody: (item: T) => ReactNode;
	/**
	 * Render function for displaying the table actions in the last column
	 */
	renderActions?: (item: T) => ReactNode;
}

/**
 * Component that is used to display data in a tabular structure
 * @param items
 * @param renderTableHeader
 * @param renderTableBody
 * @param renderActions
 * @constructor
 */
export const Table = <T extends { id: number }>({
	items,
	renderTableHeader,
	renderTableBody,
	renderActions,
}: TableProps<T>) => {
	const { t } = useTranslation();

	const hasActions = !!renderActions;

	return (
		<table style={{ width: '100%' }}>
			<thead>
				<tr>
					{renderTableHeader()}
					{hasActions && <td>{t(Translations.ACTIONS)}</td>}
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.id}>
						{renderTableBody(item)}
						{hasActions && <td>{renderActions?.(item)}</td>}
					</tr>
				))}
			</tbody>
		</table>
	);
};
