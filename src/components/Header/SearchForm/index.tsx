import styles from './styles.module.scss';
import { MagnifyingGlass, MapPin } from 'phosphor-react';

import { articles } from '../../../mocks/articles';

export function SearchForm() {
  const locations = [...new Set(articles.map((article) => article.location))];

  return (
    <form className={styles.searchForm}>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>
          <MagnifyingGlass size={24} />
        </label>
        <input type='text' id='name' placeholder='Pesquise por nome' />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor='city'>
          <MapPin size={24} />
        </label>
        <select id='city'>
          <option value='' defaultValue={'Selecione uma cidade'}>
            Selecione uma cidade
          </option>
          {locations.map((location) => {
            return (
              <option key={location} value={location}>
                {location}
              </option>
            );
          })}
        </select>
      </div>

      <button type='submit'>Buscar agora</button>
    </form>
  );
}
