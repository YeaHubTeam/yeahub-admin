import { KeyboardEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { SimpleChip } from '@/shared/ui/SimpleChip';

type KeywordProps = {
	value: string[];
	onChange: (value: string[]) => void;
};

export const KeywordInput = ({ value = [], onChange }: KeywordProps) => {
	const [keywords, setKeywords] = useState('');
	const [keywordsArray, setKeywordsArray] = useState<string[]>(value);
	const { t } = useTranslation('question');

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && keywords.trim()) {
			if (!keywordsArray.includes(keywords)) {
				setKeywordsArray((prev) => [...prev, keywords]);
				onChange([...keywordsArray, keywords]);
				setKeywords('');
			}
		}
	};

	const handleDeleteKeywords = useCallback(
		(selectedKeyword: string) => () => {
			setKeywordsArray((prevValue) => prevValue.filter((keyword) => keyword !== selectedKeyword));
			onChange(keywordsArray);
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
				style={{ color: '#000' }}
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
