import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Icon, Button, Popover, IconButton } from 'yeahub-ui-kit';

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
	const [openPopovers, setOpenPopovers] = useState<string | null>(null);

	const { t } = useTranslation('question');

	const renderTableHeader = () => {
		const columns = {
			author: t(Translations.QUESTION_AUTHOR),
			title: t(Translations.QUESTION_TITLE),
			description: t(Translations.QUESTION_DESCRIPTION),
			complexity: t(Translations.QUESTION_COMPLEXITY),
			rate: t(Translations.QUESTION_RATE),
			skills: t(Translations.QUESTION_SKILLS),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	// console.log('question.createdBy: ', questions);

	const renderTableBody = (question: Question) => {
		const fullName = `${JSON.parse(question?.createdBy).firstName} ${JSON.parse(question?.createdBy).lastName}`;

		const columns = {
			author: fullName,
			title: question.title,
			description: question.description,
			complexity: question.complexity,
			rate: question.rate,
			skills: question.questionSkills?.map((skill) => skill.title).join(', '),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderActions = (question: Question) => {
		const openActions = () => {
			setOpenPopovers(question.id);
		};

		const closeActions = () => {
			setOpenPopovers(null);
		};

		return (
			<Flex gap="4">
				<Popover
					placement="bottom-start"
					body={
						<div>
							<NavLink to={`/questions/${question.id}`}>
								<Flex align="center" gap="4">
									<Button
										aria-label="Large"
										preffix={<Icon icon="eye" size={20} color={'--palette-ui-purple-700'} />}
										theme="tertiary"
									>
										{t(Translations.QUESTION_SHOW)}
									</Button>
								</Flex>
							</NavLink>
							<NavLink to={`/questions/${question.id}/edit`}>
								<Flex align="center" gap="4">
									<Button
										aria-label="Large"
										preffix={<Icon icon="pencil" size={20} color={'--palette-ui-purple-700'} />}
										theme="tertiary"
									>
										{t(Translations.QUESTION_EDIT)}
									</Button>
								</Flex>
							</NavLink>
							<DeleteQuestionButton questionId={question.id} />
						</div>
					}
					isOpen={openPopovers === question.id}
					onClickOutside={closeActions}
				>
					<div>
						<IconButton
							theme="tertiary"
							onClick={openActions}
							aria-label="Large"
							icon={<Icon icon="dotsThreeVertical" size={20} />}
						/>
					</div>
				</Popover>
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
