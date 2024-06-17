import { useCallback, useMemo, useState } from 'react';
import { Select, Chip, Text } from 'yeahub-ui-kit';

import { Flex } from '@/shared/ui/Flex';

import { useGetSkillsListQuery } from '../../api/skillApi';
import { Skill } from '../../model/types/skill';

import styles from './SkillSelect.module.css';

type SkillSelectProps = Omit<React.ComponentProps<typeof Select>, 'options' | 'type' | 'value'> & {
	value: number[];
	onChange: (value: number[]) => void;
};

export const SkillSelect = ({ onChange, value }: SkillSelectProps) => {
	const { data: skills } = useGetSkillsListQuery({});

	const [selectedSkills, setSelectedSkills] = useState<number[]>(value);

	const handleChange = (newValue: string | undefined) => {
		if (!newValue) return;
		const updates = [...(selectedSkills || []), +newValue];
		setSelectedSkills(updates);
		onChange(updates);
	};

	const handleDeleteSkill = useCallback(
		(id: number) => () => {
			setSelectedSkills((prevValue) => prevValue.filter((skillId) => skillId !== id));
		},
		[],
	);

	const options = useMemo(() => {
		return (skills?.data || [])
			.map((skill) => ({
				label: skill.title,
				value: skill.id.toString(),
			}))
			.filter((skill) => !selectedSkills?.includes(+skill.value));
	}, [skills?.data, selectedSkills]);

	const skillsDictionary = useMemo(() => {
		return skills?.data?.reduce(
			(acc, skill) => {
				acc[skill.id] = skill;
				return acc;
			},
			{} as Record<string, Skill>,
		);
	}, [skills]);

	return (
		<Flex direction="column">
			<Select
				onChange={handleChange}
				options={options}
				type="default"
				placeholder={options.length ? 'Select skills' : 'No available options'}
			/>
			{selectedSkills?.length && (
				<>
					<Text text="Selected skills" className={styles.title} />
					<Flex gap="12" className={styles.selection}>
						{selectedSkills?.map((skillId) => {
							return (
								<Chip
									theme="primary"
									onDelete={handleDeleteSkill(skillId)}
									key={skillId}
									label={skillsDictionary?.[skillId].title}
								/>
							);
						})}
					</Flex>
				</>
			)}
		</Flex>
	);
};
