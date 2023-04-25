import { Input } from "../input";
import { Select } from "../select";
import * as S from "./styles";

const options = [
  { value: "", label: "All" },
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

export const Search = () => {
  return (
    <S.Container>
      <Input name={"Character Name"} placeholder={"Character Name"} />
      <Select name="status" placeholder="Status" options={options} />
    </S.Container>
  );
};
