import { LS_COLOR_SCHEME_KEY } from '../model/consts/colorSchemeConsts';
import { ColorScheme } from '../model/types/colorSchemeTypes';

/**
 * Applies the specified color scheme to the root element of the document.
 * If persist is set to true, saves the selected scheme in localStorage.
 * @param {('dark'|'light')} scheme - The color scheme to apply.
 * @param {boolean} persist - A flag indicating whether to save the scheme in localStorage.
 * @returns {void}
 */
export function applyScheme(scheme: ColorScheme, persist = false): void {
	document.documentElement.setAttribute('scheme', scheme);
	persist && localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

/**
 * Determines the user's system preferred color scheme.
 * @returns {'dark'|'light'} - The system preferred color scheme.
 * We ask window if the user has dark mode enabled, if true, matches will be true.
 */
export function getSystemScheme(): ColorScheme {
	return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
}

/**
 * Retrieves the stored color scheme from localStorage.
 * @returns {'dark'|'light'|null} - The stored color scheme or null if it is not stored.
 */
export function getSavedScheme(): ColorScheme | null {
	return localStorage.getItem(LS_COLOR_SCHEME_KEY) as ColorScheme | null;
}

/**
 * Removes the stored color scheme from localStorage.
 * @returns {void}
 */
export function removeSavedScheme(): void {
	localStorage.removeItem(LS_COLOR_SCHEME_KEY);
}
