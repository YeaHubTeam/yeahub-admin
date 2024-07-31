import DOMPurify from 'dompurify';

type Chidren = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
};

export const TextHtml = ({ children }: Chidren) => {
	const sanitizedHtmlContent = DOMPurify.sanitize(children);
	return <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />;
};
