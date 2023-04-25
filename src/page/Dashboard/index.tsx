import { useQuery } from "@apollo/client";
import { ListCard } from "../../components/listCard";
import { GET_DATA } from "../../services/querys";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Loading from "../../assets/images/portal-rick-and-morty.gif";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";

export const Dashboard = () => {
  const [page, setPage] = useState(1);

  const nameFilter = useSelector(() => store.getState().filterReducer);

  useEffect(() => {
    setPage(1);
  }, [nameFilter]);

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: {
      page: page,
      nameFilter: nameFilter.nameFilter,
      statusFilter: nameFilter.statusFilter,
    },
    fetchPolicy: "cache-first",
  });

  if (loading)
    return (
      <S.ContentLoading>
        <S.Loading src={Loading} alt="loading" />
      </S.ContentLoading>
    );
  if (error) return <p>Ocorreu um erro ao buscar os dados.</p>;

  const { characters } = data;

  return (
    <>
      <ListCard
        cards={characters.results}
        totalCountOfRegisters={characters.info.count}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
};
