import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import IconButton from './shared/IconButton'
import styles from '../styles/searchBox.module.scss'

const SearchBox = ({ count, onRefetch }) => {
  const router = useRouter();
  const { query } = router.query;
  const [search, setSearch] = useState(query)
  const [initFromUtl, setInitFormUtl] = useState(true)

  useEffect(() => {
    if (!search && query && initFromUtl) {
      setSearch(query);
      setInitFormUtl(false);
    }
  }, [query, search, initFromUtl])

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const setQuery = () => {
    if (search) {
      router.query.query = search;
    } else {
      delete router.query.query
    }
    router.push(router, undefined, { shallow: true })
  }

  return (
    <div className={styles.searchBox}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={search}
          onInput={handleInput}
        />
        <button
          disabled={search && search?.length <= 3}
          onClick={setQuery}
        >
          Search
        </button>
      </div>
      <div className={styles.subBar}>
        <span>{count} items</span>
        <IconButton icon={faArrowsRotate} onClick={onRefetch} />
      </div>
    </div>
  )
}

export default SearchBox;
