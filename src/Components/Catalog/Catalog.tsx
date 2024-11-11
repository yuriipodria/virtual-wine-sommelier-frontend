import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductsList } from '../ProductsList';
import styles from './Catalog.module.scss';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { Sidebar } from '../Sidebar';
import { Block, Button, Pagination } from 'react-bulma-components';

export const Catalog = () => {
  const BULMA_MOBILE_TABLET_BREAKPOINT = 769;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [areFiltersShown, setAreFiltersShown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 30;

  const productsFromServer = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  ];

  const preparedProducts = [...productsFromServer];

  const productsToDisplay = productsFromServer.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const totalPages = Math.ceil(preparedProducts.length / perPage);

  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.catalog}>
      {windowWidth < BULMA_MOBILE_TABLET_BREAKPOINT && (
        <Button
          className={styles.button}
          mb="0"
          mt={4}
          ml={4}
          onClick={() => setAreFiltersShown(current => !current)}
        >
          <FontAwesomeIcon icon={faFilter} />
          <p>Filters</p>
        </Button>
      )}

      {(windowWidth >= BULMA_MOBILE_TABLET_BREAKPOINT || areFiltersShown) && (
        <Sidebar />
      )}

      <Block className={styles.block}>
        <ProductsList toDisplay={productsToDisplay} />

        <Pagination
          total={totalPages}
          current={currentPage}
          onChange={onPageChange}
          showFirstLast
          align="center"
          pb={5}
        />
      </Block>
    </div>
  );
};
