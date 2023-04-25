import * as S from './styles';
import RickAndMorty from '../../assets/images/rickAndMorty.gif';

export const Header = () => {
  return (
    <S.Container>
      <S.HeaderImage src={RickAndMorty} alt="Rick and Morty" />
    </S.Container>
  );
};
