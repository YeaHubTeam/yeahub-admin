import classNames from 'classnames';

import { Flex } from '@/shared/ui/Flex';

import styles from './Pagination.module.css';

interface PaginationProps {
	/**
	 * Function for changing the page to the previous one
	 */
	onPrevPageClick: () => void;
	/**
	 * Function for changing the page to the next one
	 */
	onNextPageClick: () => void;
	/**
	 * Function for changing the page
	 */
	onChangePage: (page: number) => void;
	/**
	 * Active page
	 */
	page: number;
	/**
	 * Total number of pages
	 */
	totalPages: number;
}

/**
 * Component that provides navigation through pages in a data table
 * @param onPrevPageClick
 * @param onNextPageClick
 * @param onChangePage
 * @param page
 * @param totalPages
 * @constructor
 */
export const Pagination = ({
	onPrevPageClick,
	onNextPageClick,
	onChangePage,
	page,
	totalPages,
}: PaginationProps) => {
	const handleChangePage = (newPage: number) => () => {
		onChangePage(newPage);
	};

	return (
		<Flex align="center" gap="12">
			<button disabled={page === 1} onClick={onPrevPageClick}>
				{'<'}
			</button>
			{Array.from({ length: totalPages }).map((_, index) => (
				<button
					onClick={handleChangePage(index + 1)}
					className={classNames(styles.pageButton, { [styles.active]: index + 1 === page })}
					key={index + 1}
				>
					{index + 1}
				</button>
			))}
			<button disabled={page === totalPages} onClick={onNextPageClick}>
				{'>'}
			</button>
		</Flex>
	);
};
