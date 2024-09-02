import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { Chip } from 'yeahub-ui-kit';

import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import { Flex } from '@/shared/ui/Flex';

type KeywordProps = {
	value: string[];
	onChange: (value: string[]) => void;
};

export const Keyword = ({ value = [], onChange }: KeywordProps) => {
	const [keywords, setKeywords] = useState('');
	const [keywordsArray, setKeywordsArray] = useState<string[]>(value);

	const debouncedValue = useDebounce(keywords, 1500);

	useEffect(() => {
		if (debouncedValue && !keywordsArray.includes(debouncedValue)) {
			const newKeywordsArray = [...keywordsArray, debouncedValue];
			setKeywordsArray(newKeywordsArray);
			onChange(newKeywordsArray);
			setKeywords('');
		}
	}, [debouncedValue]);

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
		},
		[],
	);

	return (
		<>
			<input
				type="text"
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
				onKeyDown={handleKeyDown}
				style={{ marginBottom: 10 }}
			/>
			<Flex gap="12">
				{keywordsArray?.length > 0 &&
					keywordsArray.map((keyword) => {
						return (
							<Chip
								theme="primary"
								onDelete={handleDeleteKeywords(keyword)}
								key={keyword}
								label={keyword}
							/>
						);
					})}
			</Flex>
		</>
	);
};
