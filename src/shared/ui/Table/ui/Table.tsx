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
	selectedItems?: string[];
	onSelectItems?: (ids: string[]) => void;
}

/**
 * Component that is used to display data in a tabular structure
 * @param items
 * @param renderTableHeader
 * @param renderTableBody
 * @param renderActions
 * @constructor
 */
export const Table = <T extends { id: string }>({
	items,
	renderTableHeader,
	renderTableBody,
	renderActions,
	selectedItems,
	onSelectItems,
}: TableProps<T>) => {
	const { t } = useTranslation();

	const hasActions = !!renderActions;

	const isAllSelected = selectedItems?.length === items.length;

	const onSelectAllItems = () => {
		const itemsIds = items.map(({ id }) => id);
		onSelectItems?.(isAllSelected ? [] : itemsIds);
	};

	const onSelectItem = (id: string) => () => {
		if (selectedItems) {
			const isSelected = selectedItems?.includes(id);
			const itemsIds: string[] = isSelected
				? selectedItems?.filter((selectedItem) => selectedItem !== id)
				: [...selectedItems, id];
			onSelectItems?.(itemsIds);
		}
	};

	return (
		<table style={{ width: '100%' }}>
			<thead>
				<tr>
					<td>
						<input type="checkbox" checked={isAllSelected} onChange={onSelectAllItems} />
					</td>
					{renderTableHeader()}
					{hasActions && <td>{t(Translations.ACTIONS)}</td>}
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.id}>
						<td>
							<input
								type="checkbox"
								checked={selectedItems?.includes(item.id)}
								onChange={onSelectItem(item.id)}
							/>
						</td>
						{renderTableBody(item)}
						{hasActions && <td>{renderActions?.(item)}</td>}
					</tr>
				))}
			</tbody>
		</table>
	);
};
