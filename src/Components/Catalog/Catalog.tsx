import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductsList } from '../ProductsList';
import styles from './Catalog.module.scss';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { Filters } from '../Filters';
import {
  Block,
  Button,
  Heading,
  Loader,
  Pagination,
} from 'react-bulma-components';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../types/SearchParams';
import { getSearchWith } from '../../utils/getSearchWith';
import { getAllProducts, getProductsById } from '../../api/products';
import {
  Color,
  Country,
  Grape,
  Product,
  Strength,
  Type,
} from '../../types/Product';
import { getCart } from '../../api/cart';
import { FiltersInterface } from '../../types/FiltersInterface';
import { filterProducts } from '../../utils/filterProducts';

export const Catalog = () => {
  const BULMA_MOBILE_TABLET_BREAKPOINT = 768;
  const BULMA_TABLET_DESKTOP_BREAKPOINT = 1023;
  const BULMA_DESKTOP_WIDESCREEN_BREAKPOINT = 1215;

  const MIN_PRICE = 0;
  const MAX_PRICE = 2000;

  const getPerPage = useCallback((width: number) => {
    if (width > BULMA_DESKTOP_WIDESCREEN_BREAKPOINT) {
      return 25;
    } else if (width > BULMA_TABLET_DESKTOP_BREAKPOINT) {
      return 20;
    } else {
      return 15;
    }
  }, []);

  const { pathname } = useLocation();
  const isCartRoute = pathname === '/cart';

  const [perPage, setPerPage] = useState(getPerPage(window.innerWidth));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [areFiltersShown, setAreFiltersShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || 1);
  const [productsFromServer, setProducts] = useState<Product[]>([]);
  const [areProductsLoading, setAreProductsLoading] = useState(true);

  const [selectedFilters, setSelectedFilters] = useState<FiltersInterface>({
    country: (searchParams.getAll('country') as Country[]) || [],
    color: (searchParams.getAll('color') as Color[]) || [],
    type: (searchParams.getAll('type') as Type[]) || [],
    strength: (searchParams.getAll('strength') as Strength[]) || [],
    grape: (searchParams.getAll('grape') as Grape[]) || [],
    priceFrom: +(searchParams.get('priceFrom') || MIN_PRICE),
    priceTo: +(searchParams.get('priceTo') || MAX_PRICE),
    query: searchParams.get('query') || null,
  });

  const appliedFilters: FiltersInterface = {
    country: (searchParams.getAll('country') as Country[]) || [],
    color: (searchParams.getAll('color') as Color[]) || [],
    type: (searchParams.getAll('type') as Type[]) || [],
    strength: (searchParams.getAll('strength') as Strength[]) || [],
    grape: (searchParams.getAll('grape') as Grape[]) || [],
    priceFrom: +(searchParams.get('priceFrom') || MIN_PRICE),
    priceTo: +(searchParams.get('priceTo') || MAX_PRICE),
    query: searchParams.get('query') || null,
  };

  const preparedProducts = filterProducts(productsFromServer, appliedFilters);

  const totalPages = Math.ceil(preparedProducts.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedProducts = preparedProducts.slice(startIndex, endIndex);

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
    setSelectedFilters({
      country: (searchParams.getAll('country') as Country[]) || [],
      color: (searchParams.getAll('color') as Color[]) || [],
      type: (searchParams.getAll('type') as Type[]) || [],
      strength: (searchParams.getAll('strength') as Strength[]) || [],
      grape: (searchParams.getAll('grape') as Grape[]) || [],
      priceFrom: Number(searchParams.get('priceFrom')) || null,
      priceTo: Number(searchParams.get('priceTo')) || null,
      query: searchParams.get('query') || null,
    });
  }, [searchParams]);

  useEffect(() => {
    setAreProductsLoading(true);

    if (isCartRoute) {
      getCart()
        .then(data => {
          const ids = data.cartItems.map(item => item.id);

          return getProductsById(ids);
        })
        .then(setProducts)
        .catch(error => {
          throw error;
        })
        .finally(() => {
          setAreProductsLoading(false);
        });

      return;
    }

    getAllProducts()
      .then(data => {
        setProducts(data.wineDtos);
      })
      .catch(error => {
        throw error;
      })
      .finally(() => {
        setAreProductsLoading(false);
      });
  }, [isCartRoute]);

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
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          setSearchWith={setSearchWith}
        />
      )}

      <Block className={styles.block}>
        {areProductsLoading ? (
          <Loader p={4} m={6} />
        ) : (
          <>
            {isCartRoute && (
              <Heading mb="0" ml={6} mt={5} className={styles.cart_heading}>
                Твій кошик
              </Heading>
            )}

            <ProductsList toDisplay={displayedProducts} />
          </>
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
