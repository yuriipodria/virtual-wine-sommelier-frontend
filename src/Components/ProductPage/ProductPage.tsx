/* eslint-disable @typescript-eslint/no-unused-vars */
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Block,
  Button,
  Columns,
  Container,
  Heading,
  Image,
} from 'react-bulma-components';
import { Tag } from '../Tag';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  return (
    <Block className={styles.outer_block}>
      <Heading size={2}>Lorem, ipsum.</Heading>

      <Block className={styles.image_block} mb={6}>
        <Image className={styles.image} src="https://placehold.co/600x400" />

        <Block className={styles.price_tags_block}>
          <Block textSize={3} textWeight="bold">
            Price: $49.99
          </Block>

          <Block className={styles.tags_block}>
            <Tag text="aaaaaaaaa" />
            <Tag text="aaaaaaaaa" />
            <Tag text="asaf" />
            <Tag text="asaf" />
            <Tag text="asaf" />
            <Tag text="aaaaaaaaa" />
            <Tag text="aaaaaaaaa" />
            <Tag text="aaaaaaaaa" />
            <Tag text="aaaaaaaaa" />
          </Block>
        </Block>
      </Block>

      <Block>
        <Heading textSize={4} textWeight="bold" subtitle mb={2}>
          Description:
        </Heading>

        <Block textSize={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          laborum veritatis incidunt doloribus dicta vel labore. Sapiente
          tempore suscipit non, doloribus veniam delectus error nostrum officiis
          natus qui aut unde vitae minima illo, commodi voluptas blanditiis
          facilis itaque esse. Illum distinctio, nihil ratione excepturi sint
          cumque accusamus nulla tenetur eum, modi animi deleniti rem quae dolor
          ab minus ducimus earum? Incidunt ab consequatur quaerat quidem debitis
          cum eos accusantium veritatis?
        </Block>
      </Block>

      <Button className={styles.button} textWeight="semibold" textSize={5}>
        Add to cart
        <FontAwesomeIcon className={styles.icon} icon={faCartPlus} />
      </Button>
    </Block>
  );
};
