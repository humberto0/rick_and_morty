import { FC } from 'react';
import * as S from './styles';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  name,
  placeholder,
  clear,
  ...rest
}) => {
  return (
    <S.Container>
      <S.Input type="text" placeholder={placeholder} name={name} {...rest} />
      <S.Button onClick={clear}>x</S.Button>
    </S.Container>
  );
};
