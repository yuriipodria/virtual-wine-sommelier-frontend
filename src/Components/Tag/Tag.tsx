import { Box } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import styles from './Tag.module.scss';

export const Tag: React.FC<{ text: string; keyName: string }> = ({
  text,
  keyName,
}) => {
  return (
    <Box
      className={styles.box}
      p={2}
      mb="0"
      renderAs={Link}
      to={`/catalog?${keyName}=${text}`}
    >
      {text}
    </Box>
  );
};
