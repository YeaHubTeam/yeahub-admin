import DeleteIcon from '@/shared/assets/icons/Trash.svg';

import { Specialization } from '@/entities/specialization';

import { useDeleteSpecializationMutation } from '../../api/deleteSpecializationApi';

interface DeleteSpecializationButtonProps {
	specializationId: Specialization['id'];
}

export const DeleteSpecializationButton = ({
	specializationId,
}: DeleteSpecializationButtonProps) => {
	const [deleteSpecializationMutation] = useDeleteSpecializationMutation();

	const onDeleteSpecialization = async () => {
		await deleteSpecializationMutation(specializationId);
	};

	return (
		<button onClick={onDeleteSpecialization}>
			<DeleteIcon />
		</button>
	);
};
