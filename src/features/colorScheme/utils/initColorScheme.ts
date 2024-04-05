import { applyScheme, getSavedScheme, getSystemScheme } from './colorSchemeUtils';

applyScheme(getSavedScheme() || getSystemScheme());
