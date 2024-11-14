import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductsList } from '../ProductsList';
import styles from './Catalog.module.scss';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { Sidebar } from '../Sidebar';
import { Block, Button, Pagination } from 'react-bulma-components';
import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../types/SearchParams';
import { getSearchWith } from '../../utils/getSearchWith';

export const Catalog = () => {
  const BULMA_MOBILE_TABLET_BREAKPOINT = 768;
  const BULMA_TABLET_DESKTOP_BREAKPOINT = 1023;
  const BULMA_DESKTOP_WIDESCREEN_BREAKPOINT = 1215;

  const getPerPage = useCallback((width: number) => {
    if (width > BULMA_DESKTOP_WIDESCREEN_BREAKPOINT) {
      return 25;
    } else if (width > BULMA_TABLET_DESKTOP_BREAKPOINT) {
      return 20;
    } else {
      return 15;
    }
  }, []);

  const [perPage, setPerPage] = useState(getPerPage(window.innerWidth));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [areFiltersShown, setAreFiltersShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || 1);

  const setSearchWith = useCallback(
    (params: SearchParams) => {
      const search = getSearchWith(params, searchParams);

      setSearchParams(search);
    },
    [searchParams, setSearchParams],
  );

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

  const onPageChange = useCallback(
    (page: number) => {
      setSearchWith({ page });

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [setSearchWith],
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setPerPage(getPerPage(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [getPerPage]);

  return (
    <Block className={styles.catalog}>
      {windowWidth > BULMA_MOBILE_TABLET_BREAKPOINT || (
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

      {(windowWidth > BULMA_MOBILE_TABLET_BREAKPOINT || areFiltersShown) && (
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
          color="primary"
        />
      </Block>
    </Block>
  );
};
