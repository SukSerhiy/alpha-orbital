import { useRouter } from 'next/router'
import styles from '../styles/categories.module.scss'

const Categories = ({ categories = {} }) => {
  const router = useRouter();
  const { filter } = router.query;

  const setFilter = (key) => {
    router.query.filter = key;
    router.push(router, undefined, { shallow: true });
  }
  const removeFilter = () => {
    delete router.query;
    router.push(router, undefined, { shallow: true });
  }

  return (
    <ul className={styles.categories}>
      {Object.keys(categories).map(key => (
        <li key={key} className={key === filter ? styles.active : ''}>
          <a onClick={() => setFilter(key)}>{categories[key]}</a>
        </li>
      ))}
      <li className={!filter ? styles.active : ''}>
        <a onClick={removeFilter}>Show all</a>
      </li>
    </ul>
  )
}

export default Categories
