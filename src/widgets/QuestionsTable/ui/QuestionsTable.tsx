import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Table } from '@/shared/ui/Table';

import { Question } from '@/entities/question';

interface QuestionsTableProps {
	questions?: Question[];
}

export const QuestionsTable = ({ questions }: QuestionsTableProps) => {
	const { t } = useTranslation('question');

	const renderTableHeader = () => {
		const columns = {
			title: t(Translations.QUESTION_TITLE),
			tags: t(Translations.QUESTION_TAGS),
			author: t(Translations.QUESTION_AUTHOR),
			type: t(Translations.QUESTION_TYPE),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderTableBody = (question: Question) => {
		const columns = {
			title: question.title,
			tags: question.tags,
			author: question.author,
			type: question.type,
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderActions = (question: Question) => {
		return (
			<NavLink to={`/questions/${question.id}`}>
				<EyeIcon />
			</NavLink>
		);
	};

	if (!questions) {
		return null;
	}

	return (
		<Table
			renderTableHeader={renderTableHeader}
			renderTableBody={renderTableBody}
			renderActions={renderActions}
			items={questions}
		/>
	);
};
