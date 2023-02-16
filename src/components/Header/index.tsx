import styles from './styles.module.scss';

import ilustra01 from '../../assets/ilustra-01.svg';
import ilustra02 from '../../assets/ilustra-02.svg';

import { SearchForm } from './SearchForm';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ilustra01} alt='Illustration 01' className={styles.ilustra01} />

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <strong>Find your block</strong>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023
          </h1>
        </div>

        <SearchForm />
      </div>

      <img src={ilustra02} alt='Illustration 02' className={styles.ilustra02} />
    </header>
  );
}
