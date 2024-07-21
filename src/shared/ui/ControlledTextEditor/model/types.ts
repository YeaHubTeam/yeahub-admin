import { Control } from 'react-hook-form';

type Editor = unknown; //TODO replace when uikit will return Editor type;
type EditorConfig = {
	removePlugins?: string[];
	toolbar: {
		removeItems: string[];
	};
};

export interface EditorProps {
	isInline?: boolean;
	id: string | number;
	data?: string;
	disabled?: boolean;
	autofocus?: boolean;
	onChange?: (data: string) => void;
	config?: EditorConfig;
	entryId?: number;
	onReady?: (editor: Editor) => void;
	onBlur?: (data: string) => void;
	onFocus?: (data: string) => void;
	className?: string;
	name: string;
	control: Control;
}
