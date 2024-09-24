import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input, Range, Select, Text, TextArea, TextEditor } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { FormControl } from '@/shared/ui/FormControl';

// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { KeywordInput } from '@/entities/Keyword';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SkillSelect } from '@/entities/skill';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { SpecializationSelect } from '@/entities/specialization';

import { STATUSES } from '../../model/constants';

import styles from './QuestionForm.module.css';

export const QuestionForm = () => {
	const { t } = useTranslation('question');
	const { control } = useFormContext();

	return (
		<Flex direction="column" gap="40">
			<Flex direction="column">
				<Text title={t(Translations.QUESTION_TITLE)} />
				<FormControl name="title" control={control} label={t(Translations.QUESTION_ADD_QUESTION)}>
					{(field, hasError) => <Input {...field} hasError={hasError} />}
				</FormControl>
			</Flex>
			<Flex direction="column">
				<Text title={t(Translations.QUESTION_DESCRIPTION)} />
				<FormControl
					name="description"
					control={control}
					label={t(Translations.QUESTION_ADD_DESCRIPTION)}
				>
					{(field, hasError) => (
						<TextArea
							id="description"
							className={styles.description}
							state={hasError ? 'error' : 'default'}
							{...field}
						/>
					)}
				</FormControl>
			</Flex>
			<Flex gap={'32'}>
				<Flex direction="column" justify="center" className={styles.titles}>
					<Text title={t(Translations.QUESTION_RATE)} />
					<Text text={t(Translations.QUESTION_SELECT_RATE)} className={styles.label} />
				</Flex>
				<FormControl name="rate" control={control} className={styles.rate}>
					{(field) => <Range min={1} max={5} step={1} hasScale {...field} />}
				</FormControl>
			</Flex>
			<Flex gap={'32'}>
				<Flex direction="column" justify="center" className={styles.titles}>
					<Text title={t(Translations.QUESTION_COMPLEXITY)} />
					<Text text={t(Translations.QUESTION_COMPLEXITY)} className={styles.label} />
				</Flex>
				<FormControl name="complexity" control={control} className={styles.rate}>
					{(field) => <Range min={1} max={10} step={1} hasScale {...field} />}
				</FormControl>
			</Flex>
			<Flex gap={'32'}>
				<Flex direction="column" justify="center" className={styles.titles}>
					<Text title={t(Translations.QUESTION_STATUS)} />
					<Text text={t(Translations.QUESTION_SELECT_STATUS)} className={styles.label} />
				</Flex>
				<FormControl name="status" control={control}>
					{({ onChange, value }) => (
						<div className={styles.select}>
							<Select
								type="default"
								onChange={onChange}
								value={value}
								placeholder={'Select status'}
								options={STATUSES}
							/>
						</div>
					)}
				</FormControl>
			</Flex>
			<Flex gap={'32'}>
				<Flex direction="column" justify="center" className={styles.titles}>
					<Text title={t(Translations.QUESTION_SPECIALIZATION)} />
					<Text text={t(Translations.QUESTION_SELECT_SPECIALIZATION)} className={styles.label} />
				</Flex>
				<FormControl name="specializations" control={control}>
					{({ onChange, value }) => (
						<div className={styles.select}>
							<SpecializationSelect onChange={onChange} value={value} />
						</div>
					)}
				</FormControl>
			</Flex>
			<Flex gap={'32'}>
				<Flex direction="column" className={styles.titles}>
					<Text title={t(Translations.QUESTION_SKILLS)} />
					<Text text={t(Translations.QUESTION_SELECT_SKILLS)} className={styles.label} />
				</Flex>
				<FormControl name="skills" control={control}>
					{({ onChange, value }) => {
						return (
							<div className={styles.select}>
								<SkillSelect onChange={onChange} value={value} />
							</div>
						);
					}}
				</FormControl>
			</Flex>
			<Flex gap={'32'}>
				<Flex direction="column" className={styles.titles}>
					<Text title={t(Translations.QUESTION_KEYWORDS)} />
					<Text text={t(Translations.QUESTION_KEYWORDS)} className={styles.label} />
				</Flex>
				<FormControl name="keywords" control={control}>
					{({ onChange, value }) => {
						return (
							<div className={styles.select}>
								<KeywordInput value={value} onChange={onChange} />
							</div>
						);
					}}
				</FormControl>
			</Flex>
			<Flex direction="column">
				<Text title={t(Translations.QUESTION_SHORT_ANSWER)} />
				<FormControl
					name="shortAnswer"
					control={control}
					label={t(Translations.QUESTION_ADD_SHORT_ANSWER)}
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
			</Flex>
			<Flex direction="column">
				<Text title={t(Translations.QUESTION_LONG_ANSWER)} />
				<FormControl
					name="longAnswer"
					control={control}
					label={t(Translations.QUESTION_ADD_LONG_ANSWER)}
				>
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
			</Flex>
			{/* <Flex align="center" gap="8">
        <label htmlFor="imageSrc">{t(Translations.QUESTION_IMAGE_SRC)}</label>
        <input className={styles.input} {...register('imageSrc')} />
      </Flex>
      {errors.imageSrc ? <div>{errors.imageSrc.message?.toString()}</div> : null} */}
		</Flex>
	);
};
