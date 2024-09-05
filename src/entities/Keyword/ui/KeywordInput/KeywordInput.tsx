import { KeyboardEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { SimpleChip } from '@/shared/ui/SimpleChip';

type KeywordInputProps = {
	value: string[];
	onChange: (value: string[]) => void;
};

export const KeywordInput = ({ value = [], onChange }: KeywordInputProps) => {
	const [keywords, setKeywords] = useState('');
	const [keywordsArray, setKeywordsArray] = useState<string[]>(value);
	const { t } = useTranslation('question');
	console.log('t: ', t);

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && keywords.trim()) {
			if (!keywordsArray.includes(keywords)) {
				const newKeywordsArray = [...keywordsArray, keywords];
				setKeywordsArray(newKeywordsArray);
				onChange(newKeywordsArray);
				setKeywords('');
			}
		}
	};

	const handleDeleteKeywords = useCallback(
		(selectedKeyword: string) => () => {
			const newKeywordsArray = keywordsArray.filter((keyword) => keyword !== selectedKeyword);
			onChange(newKeywordsArray);
		},
		[keywordsArray, onChange],
	);

	return (
		<Flex gap="24" direction="column">
			<Input
				type="text"
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Flex gap="16" direction="column">
				<h4>{t(Translations.QUESTION_KEYWORDS)}</h4>
				<Flex direction="row" gap="32">
					{keywordsArray?.length > 0 &&
						keywordsArray.map((keyword) => {
							return (
								<SimpleChip key={keyword} onDelete={handleDeleteKeywords(keyword)}>
									{keyword}
								</SimpleChip>
							);
						})}
				</Flex>
			</Flex>
		</Flex>
	);
};
