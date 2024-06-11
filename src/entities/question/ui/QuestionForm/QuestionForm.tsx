import { ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input, TextEditor, Range } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { FormControl } from '@/shared/ui/FormControl';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SkillSelect } from '@/entities/skill';

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
			<FormControl name="title" control={control} label={t(Translations.QUESTION_TITLE)}>
				{(field, hasError) => <Input {...field} hasError={hasError} />}
			</FormControl>
			<FormControl
				name="description"
				control={control}
				label={t(Translations.QUESTION_DESCRIPTION)}
			>
				{(field) => (
					<TextEditor
						id="description"
						isInline
						className={styles.input}
						data={field.value}
						{...field}
					/>
				)}
			</FormControl>
			<FormControl
				name="shortAnswer"
				control={control}
				label={t(Translations.QUESTION_SHORT_ANSWER)}
			>
				{(field) => (
					<TextEditor
						id="shortAnswer"
						isInline
						className={styles.input}
						data={field.value}
						{...field}
					/>
				)}
			</FormControl>
			<FormControl name="longAnswer" control={control} label={t(Translations.QUESTION_LONG_ANSWER)}>
				{(field) => (
					<TextEditor
						id="longAnswer"
						isInline
						className={styles.input}
						data={field.value}
						{...field}
					/>
				)}
			</FormControl>
			<FormControl name="rate" control={control} label={t(Translations.QUESTION_RATE)}>
				{(field) => <Range min={0} max={10} step={1} hasScale {...field} />}
			</FormControl>
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
			<FormControl name="skills" control={control} label={t(Translations.QUESTION_SKILLS)}>
				{({ onChange, value }) => (
					<SkillSelect
						type="default"
						onChange={onChange}
						value={value}
						placeholder={'Select skills'}
					/>
				)}
			</FormControl>
		</Flex>
	);
};
