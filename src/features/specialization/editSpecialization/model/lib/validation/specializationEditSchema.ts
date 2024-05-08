import * as yup from 'yup';

export const specializationEditSchema = yup.object().shape({
	id: yup.string().required(),
	title: yup.string().required(),
	description: yup.string().required(),
	imageSrc: yup.string().required(),
	createdAt: yup.string().required(),
	updatedAt: yup.string().required(),
});
