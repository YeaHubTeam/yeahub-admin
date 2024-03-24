import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import jestI18n from './jestI18n';

interface RenderComponentOptions {
  route?: string;
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={jestI18n}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
};
