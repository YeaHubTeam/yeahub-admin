import { useMemo } from 'react';
import { Select } from 'yeahub-ui-kit';

import { useGetSkillsListQuery } from '../../api/skillApi';

type SkillSelectProps = Omit<React.ComponentProps<typeof Select>, 'options'>;

export const SkillSelect = (props: SkillSelectProps) => {
	const { data: skills } = useGetSkillsListQuery({});

	const options = useMemo(() => {
		return (skills?.data || []).map((skill) => ({
			label: skill.title,
			value: skill.id.toString(),
		}));
	}, [skills?.data]);

	return <Select {...props} options={options} />;
};
