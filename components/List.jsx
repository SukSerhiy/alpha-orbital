import ListItem from './ListItem'
import styles from '../styles/list.module.scss'

const List = ({ items = [], keyName = 'slug', onRemove }) => {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <ListItem
          key={item[keyName]}
          item={item}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default List;
