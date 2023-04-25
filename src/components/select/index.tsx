import { FC } from "react";
import { SelectProps } from "./types";
import * as S from "./styles";

export const Select: FC<SelectProps> = ({
  name,
  placeholder,
  options,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.Select name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};
