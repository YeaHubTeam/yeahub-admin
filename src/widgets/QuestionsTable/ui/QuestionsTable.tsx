import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Icon } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { Table } from '@/shared/ui/Table';

import { Question } from '@/entities/question';

import { DeleteQuestionButton } from '@/features/question/deleteQuestion';

interface QuestionsTableProps {
	questions?: Question[];
	selectedQuestions?: string[];
	onSelectQuestions?: (ids: string[]) => void;
}

export const QuestionsTable = ({
	questions,
	selectedQuestions,
	onSelectQuestions,
}: QuestionsTableProps) => {
	const { t } = useTranslation('question');

	const renderTableHeader = () => {
		const columns = {
			title: t(Translations.QUESTION_TITLE),
			description: t(Translations.QUESTION_DESCRIPTION),
			rate: t(Translations.QUESTION_RATE),
			skills: t(Translations.QUESTION_SKILLS),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderTableBody = (question: Question) => {
		const columns = {
			title: question.title,
			description: question.description,
			rate: question.rate,
			skills: question.questionSkills?.map((skill) => skill.title).join(', '),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderActions = (question: Question) => {
		return (
			<Flex gap="4">
				<NavLink to={`/questions/${question.id}`}>
					<Icon icon="eye" size={20} color={'--palette-ui-purple-700'} />
				</NavLink>
				<NavLink to={`/questions/${question.id}/edit`}>
					<Icon icon="pencil" size={20} color={'--palette-ui-purple-700'} />
				</NavLink>
				<DeleteQuestionButton questionId={question.id} />
			</Flex>
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
			selectedItems={selectedQuestions}
			onSelectItems={onSelectQuestions}
		/>
	);
};
