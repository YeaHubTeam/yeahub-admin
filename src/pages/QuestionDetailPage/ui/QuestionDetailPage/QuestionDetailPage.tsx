import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { Chip } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { TextHtml } from '@/shared/TextHtml/TextHtm';
import { BackButton } from '@/shared/ui/BackButton';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetQuestionByIdQuery } from '@/entities/question';

import styles from './QuestionDetailPage.module.css';

/**
 * Page showing detail info about a single question
 * @constructor
 */
const QuestionDetailPage = () => {
	const { t } = useTranslation();
	const { questionId } = useParams<{ questionId: string }>();
	const { data: question } = useGetQuestionByIdQuery(questionId as string);

	if (!question) {
		return null;
	}

	const author = JSON.parse(question.createdBy as string);

	return (
		<main>
			<Flex align="center" gap="8" style={{ marginBottom: 34 }}>
				<BackButton />
				<NavLink style={{ marginLeft: 'auto' }} to="edit">
					{t(Translations.EDIT)}
				</NavLink>
			</Flex>
			{/* <QuestionCard question={question} /> */}
			<Flex gap="24">
				<Flex direction="column" gap="8" style={{ flex: '1 1 740px' }}>
					<Card className={classNames(styles['title-block'])}>
						{/* Тут  margin-bottom:50*/}
						<Flex gap="8">
							<div className={classNames(styles['title-img-block'])}>
								<img
									className={classNames(styles['title-img-block-image'])}
									src={question.imgSrc}
									alt="img"
								/>
							</div>
							<Flex maxWidth direction="column">
								<h1 className={classNames(styles['title-block-title'])}>{question.title}</h1>
								<p className={classNames(styles['title-block-description'])}>
									{question.description}
								</p>
							</Flex>
							<div className={classNames(styles['title-block-tag'])}>{question.status}</div>
						</Flex>
					</Card>
					{/* ShortAnswer  */}
					<Card className={classNames(styles['short-answer-block'])}>
						<h2>Краткий ответ</h2>
						{/* <div dangerouslySetInnerHTML={{ __html: `${question.shortAnswer}` }} /> */}
						<TextHtml>{question.shortAnswer}</TextHtml>
						<p></p>
					</Card>
					{/* FulltAnswer  */}
					<Card>
						<h2>Развёрнутый ответ</h2>
						<TextHtml>{question.longAnswer}</TextHtml>
					</Card>
				</Flex>
				{/* SidBar */}
				<Flex direction="column" align="center" className={classNames(styles['sidebar-wrap'])}>
					<Card className={classNames(styles['sidebar-card'])}>
						<div>
							<h4 className={classNames(styles['sidebar-card-level-title'])}>Уровень:</h4>
							<Flex gap="16">
								<Flex
									align="center"
									gap="12"
									className={classNames(styles['sidebar-card-level-description'])}
								>
									<span className={classNames(styles['sidebar-card-level-description-property'])}>
										Сложность:
									</span>
									<span className={classNames(styles['sidebar-card-level-description-value'])}>
										{question.complexity}
									</span>
								</Flex>
								<Flex
									align="center"
									gap="12"
									className={classNames(styles['sidebar-card-level-description'])}
								>
									<span className={classNames(styles['sidebar-card-level-description-property'])}>
										Рейтинг:
									</span>
									<span className={classNames(styles['sidebar-card-level-description-value'])}>
										{question.rate}
									</span>
								</Flex>
							</Flex>
						</div>
						<h4 className={classNames(styles['sidebar-card-skills-title'])}>Навыки:</h4>
						<Flex gap="8">
							{question.keywords?.map((keyword) => (
								<Chip key={keyword} theme={'primary'} label={keyword} active />
							))}
						</Flex>
					</Card>
					<p className={classNames(styles['author'])}>
						Автор :{' '}
						<span className={classNames(styles['author-name'])}>
							{author.lastName} {author.firstName}
						</span>
					</p>
				</Flex>
			</Flex>
		</main>
	);
};

export default QuestionDetailPage;
