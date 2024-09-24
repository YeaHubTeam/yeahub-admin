import { useEffect, useMemo, useState } from 'react';
import { Select } from 'yeahub-ui-kit';

import { useGetSpecializationsListQuery } from '../../api/specializationApi';

interface SpecializationSelectProps {
	value: number[];
	onChange: (value: number[]) => void;
}

export const SpecializationSelect = ({ onChange, value }: SpecializationSelectProps) => {
	const { data: specializationsList } = useGetSpecializationsListQuery({});
	const [specializationsItem, setSpecializationsItem] = useState<number[]>(
		Array.isArray(value) ? value : [],
	);
	const [selectedValue, setSelectedValue] = useState<string>('');

	useEffect(() => {
		if (Array.isArray(value) && value.length > 0) {
			const firstValue = value[0].toString();
			setSelectedValue(firstValue);
		} else {
			setSelectedValue('');
		}
	}, [value]);

	const handleChange = (newValue: string | undefined) => {
		if (!newValue) return;

		const updates: number[] = [...specializationsItem];
		updates.splice(0, 1, +newValue);

		setSpecializationsItem(updates);
		onChange(updates);
		setSelectedValue(newValue);
	};

	const options = useMemo(() => {
		return (specializationsList?.data || []).map((specialization) => ({
			label: specialization.title,
			value: specialization.id.toString(),
		}));
	}, [specializationsList?.data]);

	return (
		<Select
			onChange={handleChange}
			options={options}
			type="default"
			placeholder={options.length ? 'Select Specialization' : 'No available options'}
			value={selectedValue}
		/>
	);
};
