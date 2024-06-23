import { useController } from 'react-hook-form';
import { TextEditor } from 'yeahub-ui-kit';

import { EditorProps } from '../model/types';

export const ControlledTextEditor = ({ name, control, ...props }: EditorProps) => {
	const { field } = useController({
		name,
		control,
		rules: { required: true },
	});

	return <TextEditor {...props} {...field} data={field.value} />;
};
