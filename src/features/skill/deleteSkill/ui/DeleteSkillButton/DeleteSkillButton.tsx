import DeleteIcon from '@/shared/assets/icons/Trash.svg';

import { Skill } from '@/entities/skill';

import { useDeleteSkillMutation } from '../../api/deleteSkillApi';

interface DeleteSkillButtonProps {
	skillId: Skill['id'];
}

export const DeleteSkillButton = ({ skillId }: DeleteSkillButtonProps) => {
	const [deleteSkillMutation] = useDeleteSkillMutation();

	const onDeleteSkill = async () => {
		await deleteSkillMutation(skillId);
	};

	return (
		<button onClick={onDeleteSkill}>
			<DeleteIcon />
		</button>
	);
};
