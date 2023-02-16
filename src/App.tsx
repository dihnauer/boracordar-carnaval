import styles from './App.module.scss';

import { Header } from './components/Header';
import { Article } from './components/Article';

import { articles } from './mocks/articles';

export function App() {
  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.recommendation}>
          <h2>Blocos recomendados</h2>

          <div>
            <button type='button' className={styles.primary}>
              Lista
            </button>
            <button type='button' className={styles.secondary}>
              Mapa
            </button>
          </div>
        </div>

        <section className={styles.articlesList}>
          {articles.map((article) => {
            return (
              <Article
                key={article.id}
                image={article.image}
                title={article.title}
                content={article.content}
                location={article.location}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
