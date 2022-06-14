import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utilsStyles from '../../styles/utils.module.scss'

const IconButton = ({ icon, color = "white", onClick, className = '', ...rest }) => {
  return (
    <a className={[utilsStyles.iconButton, className].join(' ')} onClick={onClick} {...rest}>
      <FontAwesomeIcon icon={icon} color={color} />
    </a>
  );
}

export default IconButton;
