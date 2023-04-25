import { Input } from "../input";
import { Select } from "../select";
import * as S from "./styles";
import { store } from "../../redux/store";
import { addFilterName, addFilterStatus } from "../../redux/slices";
import { debounceFunction } from "../../utils/debounce";
import { useCallback, useState } from "react";

const options = [
  { value: "", label: "All" },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

export const Search = () => {
  const [nameFilter, setNameFilter] = useState("");

  const handleNameFilterChange = useCallback(async (value: string) => {
    setNameFilter(value);
    store.dispatch(addFilterName(await debounceFunction(value, 500)));
  }, []);

  const handleChange = useCallback((value: string) => {
    store.dispatch(addFilterStatus(value));
  }, []);

  return (
    <S.Container>
      <Input
        name={"Character Name"}
        placeholder={"Character Name"}
        value={nameFilter}
        onChange={(event) => handleNameFilterChange(event.target.value)}
        clear={() => handleNameFilterChange("")}
      />
      <Select
        name="status"
        placeholder="Status"
        options={options}
        onChange={({ target }) => handleChange(target.value)}
      />
    </S.Container>
  );
};
