import { useFormContext } from 'react-hook-form';

export const QuestionForm = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	// TODO Подумать насчет другого решения с подтягиванием типов значений формы вместо .toString()

	return (
		<div>
			<div>
				<label htmlFor="title">title</label>
				<input {...register('title')} />
				{errors.title ? <div>{errors.title.message?.toString()}</div> : null}
			</div>
			<div>
				<label htmlFor="description">description</label>
				<input {...register('description')} />
				{errors.description ? <div>{errors.description.message?.toString()}</div> : null}
			</div>
			<div>
				<label htmlFor="shortAnswer">shortAnswer</label>
				<input {...register('shortAnswer')} />
				{errors.shortAnswer ? <div>{errors.shortAnswer.message?.toString()}</div> : null}
			</div>
			<div>
				<label htmlFor="longAnswer">longAnswer</label>
				<input {...register('longAnswer')} />
				{errors.longAnswer ? <div>{errors.longAnswer.message?.toString()}</div> : null}
			</div>
			<div>
				<label htmlFor="rate">rate</label>
				<input type="number" {...register('rate')} />
				{errors.rate ? <div>{errors.rate.message?.toString()}</div> : null}
			</div>
		</div>
	);
};
