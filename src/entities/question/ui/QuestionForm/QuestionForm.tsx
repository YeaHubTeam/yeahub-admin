import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { ControlledTextEditor } from '@/shared/ui/ControlledTextEditor';
import { Flex } from '@/shared/ui/Flex';

import styles from './QuestionForm.module.css';

export const QuestionForm = () => {
	const { t } = useTranslation('question');
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext();
	// TODO Подумать насчет другого решения с подтягиванием типов значений формы вместо .toString()

	const handleChange =
		(onChange: (value: string[]) => void, value: string[]) =>
		(e: ChangeEvent<HTMLInputElement>) => {
			const isChecked = e.target.checked;
			if (isChecked) {
				onChange([...value, e.target.value]);
			} else {
				onChange(value.filter((item: string) => item !== e.target.value));
			}
		};

	return (
		<Flex direction="column" gap="8">
			<Flex align="center" gap="8">
				<label htmlFor="title">{t(Translations.QUESTION_TITLE)}</label>
				<input className={styles.input} {...register('title')} />
			</Flex>
			{errors.title ? <div>{errors.title.message?.toString()}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="description">{t(Translations.QUESTION_DESCRIPTION)}</label>
				<ControlledTextEditor
					id={'description'}
					isInline
					className={styles.input}
					name={'description'}
					control={control}
				/>
			</Flex>
			{errors.description ? <div>{errors.description.message?.toString()}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="shortAnswer">{t(Translations.QUESTION_SHORT_ANSWER)}</label>
				<ControlledTextEditor
					id={'shortAnswer'}
					isInline
					className={styles.input}
					name={'shortAnswer'}
					control={control}
				/>
			</Flex>
			{errors.shortAnswer ? <div>{errors.shortAnswer.message?.toString()}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="longAnswer">{t(Translations.QUESTION_LONG_ANSWER)}</label>
				<ControlledTextEditor
					id={'shortAnswer'}
					isInline
					className={styles.input}
					name={'longAnswer'}
					control={control}
				/>
			</Flex>
			{errors.longAnswer ? <div>{errors.longAnswer.message?.toString()}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="rate">{t(Translations.QUESTION_RATE)}</label>
				<input className={styles.input} type="number" {...register('rate')} />
			</Flex>
			{errors.rate ? <div>{errors.rate.message?.toString()}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="imageSrc">{t(Translations.QUESTION_IMAGE_SRC)}</label>
				<input className={styles.input} {...register('imageSrc')} />
			</Flex>
			{errors.imageSrc ? <div>{errors.imageSrc.message?.toString()}</div> : null}

			<Flex align="center" gap="8">
				<label>{t(Translations.QUESTION_KEYWORDS)}</label>
				<Controller
					name="keywords"
					control={control}
					defaultValue={[]}
					render={({ field: { onChange, value } }) => (
						<div>
							<label>
								<input
									type="checkbox"
									value="keyword1"
									onChange={handleChange(onChange, value)}
									checked={value.includes('keyword1')}
								/>
								keyword1
							</label>
							<label>
								<input
									type="checkbox"
									value="keyword2"
									onChange={handleChange(onChange, value)}
									checked={value.includes('keyword2')}
								/>
								keyword2
							</label>
						</div>
					)}
				/>
			</Flex>
			{errors.keywords ? <div>{errors.keywords.message?.toString()}</div> : null}
		</Flex>
	);
};
