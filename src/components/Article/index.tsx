import { MapPin } from 'phosphor-react';

import styles from './styles.module.scss';

interface ArticleProps {
  image: string;
  title: string;
  content: string;
  location: string;
}

export function Article({ image, title, content, location }: ArticleProps) {
  return (
    <a href='#' className={styles.article}>
      <img src={image} alt='' />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={styles.articleLocation}>
          <MapPin size={24} />
          <span>{location}</span>
        </div>
      </div>
    </a>
  );
}
