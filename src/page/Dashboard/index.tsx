import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ListCard } from '../../components/listCard';
import { GET_DATA } from '../../services/querys';
import * as S from './styles';

import Loading from '../../assets/images/portal-rick-and-morty.gif';
import Error from '../../assets/images/morty.gif';
import { store } from '../../redux/store';
import { setTotalPages } from '../../redux/slices';

export const Dashboard = () => {
  const filter = useSelector(() => store.getState().filterReducer);

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: {
      page: filter.page,
      nameFilter: filter.nameFilter,
      statusFilter: filter.statusFilter,
    },
    fetchPolicy: 'cache-first',
  });

  useEffect(() => {
    if (data) store.dispatch(setTotalPages(data?.characters?.info?.count ?? 1));
  }, [data]);

  if (loading)
    return (
      <S.ContentLoading>
        <S.Image src={Loading} alt="loading" />
      </S.ContentLoading>
    );
  if (error)
    return (
      <S.ContentError>
        <S.Image src={Error} alt="Error" />
        <S.TextError>Sorry, there was an error fetching the data</S.TextError>
      </S.ContentError>
    );

  const { characters } = data;

  return (
    <>
      {characters.results.length === 0 ? (
        <S.ContentError>
          <S.ImageError src={Error} alt="Error" />
          <S.TextError>
            Sorry, we couldn´t find what you´re looking for.
          </S.TextError>
        </S.ContentError>
      ) : (
        <ListCard cards={characters.results} />
      )}
    </>
  );
};
