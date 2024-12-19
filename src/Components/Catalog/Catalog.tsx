import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductsList } from '../ProductsList';
import styles from './Catalog.module.scss';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { Filters } from '../Filters';
import { Block, Button, Loader, Pagination } from 'react-bulma-components';
import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../types/SearchParams';
import { getSearchWith } from '../../utils/getSearchWith';
import { getProductsByPageSize } from '../../api/products';
import { Product } from '../../types/Product';

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
  const [products, setProducts] = useState<Product[]>([]);
  const [areProductsLoading, setAreProductsLoading] = useState(true);
  const totalPages = 100;

  const setSearchWith = useCallback(
    (params: SearchParams) => {
      const search = getSearchWith(params, searchParams);

      setSearchParams(search);
    },
    [searchParams, setSearchParams],
  );

  const onPageChange = useCallback(
    (page: number) => {
      setSearchWith({ page });

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [setSearchWith],
  );

  useEffect(() => {
    setAreProductsLoading(true);
    getProductsByPageSize(currentPage - 1, perPage)
      .then(setProducts)
      .catch(error => {
        throw error;
      })
      .finally(() => {
        setAreProductsLoading(false);
      });
  }, [currentPage, perPage]);

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
        <Filters />
      )}

      <Block className={styles.block}>
        {areProductsLoading ? (
          <Loader p={4} m={6} />
        ) : (
          <ProductsList toDisplay={products} />
        )}

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
