import DeleteIcon from '@/shared/assets/icons/Trash.svg';

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

	return (
		<button onClick={onDeleteQuestion}>
			<DeleteIcon />
		</button>
	);
};
