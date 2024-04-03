// Ключ для хранения цветовой схемы в localStorage
const LS_COLOR_SCHEME_KEY = 'yh-admin:scheme';

/**
 * Применяет указанную цветовую схему к корневому элементу документа.
 * Если persist установлен в true, сохраняет выбранную схему в localStorage.
 * @param {('dark'|'light')} scheme - Цветовая схема для применения.
 * @param {boolean} persist - Флаг, указывающий, следует ли сохранять схему в localStorage.
 * @returns {void}
 */
export function applyScheme(scheme: 'dark' | 'light', persist = false): void {
	document.documentElement.setAttribute('scheme', scheme);
	persist && localStorage.setItem(LS_COLOR_SCHEME_KEY, scheme);
}

/**
 * Определяет системную предпочитаемую цветовую схему пользователя.
 * @returns {'dark'|'light'} - Системная предпочитаемая цветовая схема.
 * Спрашиваем у window правда что пользователь ключил темную тему если правда то matches будет true
 */
export function getSystemScheme(): 'dark' | 'light' {
	return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
}

/**
 * Извлекает сохраненную цветовую схему из localStorage.
 * @returns {'dark'|'light'|null} - Сохраненная цветовая схема или null, если она не сохранена.
 */
export function getSavedScheme(): 'dark' | 'light' | null {
	return localStorage.getItem(LS_COLOR_SCHEME_KEY) as 'dark' | 'light' | null;
}

/**
 * Удаляет сохраненную цветовую схему из localStorage.
 * @returns {void}
 */
export function removeSavedScheme(): void {
	localStorage.removeItem(LS_COLOR_SCHEME_KEY);
}
