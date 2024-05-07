import { StoryFn } from '@storybook/react';

import { State } from '@/shared/config/store/State';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StoreProvider } from '@/app/providers/store';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<State>) => (Story: StoryFn) => (
	<StoreProvider initialState={state}>
		<Story />
	</StoreProvider>
);
