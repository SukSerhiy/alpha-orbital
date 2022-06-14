import Image from 'next/image'
import moment from 'moment'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import IconButton from './shared/IconButton'
import { getImage, getArticleUrl } from '../lib/utils'
import styles from '../styles/listItem.module.scss'

const ListItem = ({ item, onRemove }) => {
  const {
    slug,
    title,
    date,
    excerpt,
    post_thumbnail
  } = item;

  const handleRemove = () => {
    onRemove(item)
  }

  return (
    <div className={styles.listItem}>
      <div className={styles.image}>
        <Image
          src={getImage(post_thumbnail)}
          alt={slug}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.content}>
        <div>
          <h4>{title}</h4>
          <time time={date}>{moment(date).format('DD.MM.yyyy')}</time>
          <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </div>
        <a className={styles.fullArticle} href={getArticleUrl(slug)}>Full article</a>
        <IconButton className={styles.remove} icon={faRemove} onClick={handleRemove} />
      </div>
    </div>
  )
}

export default ListItem;
