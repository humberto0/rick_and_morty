import { useQuery } from "@apollo/client";
import { ListCard } from "../../components/listCard";
import { GET_DATA } from "../../services/querys";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import * as S from "./styles";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { useState } from "react";
import { debounceFunction } from "../../utils/debounce";
import Loading from "../../assets/images/portal-rick-and-morty.gif";

const options = [
  { value: "", label: "Status" },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

export const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState<string | null>("");

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { page: page, nameFilter: nameFilter },
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

  const handleNameFilterChange = async (value: string) => {
    setNameFilter(await debounceFunction(value, 2000));
    setPage(1);
  };

  return (
    <ListCard
      cards={characters.results}
      totalCountOfRegisters={characters.info.count}
      currentPage={page}
      onPageChange={setPage}
    />
  );
};
