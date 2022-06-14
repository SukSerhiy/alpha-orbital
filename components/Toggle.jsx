import { useState } from 'react'
import styles from '../styles/toggle.module.scss'

const Toggle = ({ categories = {}, onClear }) => {
  const [showList, setShowList] = useState(false);

  const handleToggle = () => {
    setShowList(prev => !prev);
  }

  return (
    <div className={styles.container}>
      <a onClick={handleToggle}>Toggle categories</a>
      {showList && (
        <ul>
          {Object.keys(categories).map((key) => {
            const category = categories[key];
            return (
              <li key={`${key}:${category}`}>
                <span>{category}</span>
                <button onClick={() => onClear(key)}>Clear</button>
              </li>
            )})}
        </ul>
      )}
    </div>
  )
}

export default Toggle;
