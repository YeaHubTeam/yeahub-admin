import { Icon } from 'yeahub-ui-kit';

import { Question } from '@/entities/question';

import { useDeleteQuestionMutation } from '../../api/deleteQuestionApi';

interface DeleteQuestionButtonProps {
	questionId: Question['id'];
}

export const DeleteQuestionButton = ({ questionId }: DeleteQuestionButtonProps) => {
	const [deleteQuestionMutation] = useDeleteQuestionMutation();

	const onDeleteQuestion = async () => {
		await deleteQuestionMutation(questionId);
	};

	return <Icon onClick={onDeleteQuestion} icon="trash" size={20} color="--palette-ui-red-600" />;
};
