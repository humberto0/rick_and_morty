import { FC, useCallback } from 'react';
import * as S from './styles';
import { CardProps } from '../../types/cardTypes';

export const Card: FC<CardProps> = ({
  origin,
  image,
  location,
  species,
  status,
  name,
}) => {
  const handleStatus = useCallback(() => {
    if (status === 'Dead') {
      return 'dead';
    }
    if (status === 'unknown') {
      return 'unknown';
    }
    return '';
  }, [status]);

  return (
    <S.Container>
      <S.ImageContent>
        <S.Image src={image} alt={name} />
      </S.ImageContent>
      <S.Content>
        <S.Section>
          <S.Name>{name}</S.Name>
          <S.Description>
            <S.Pointer className={handleStatus()} />
            {status} - {species}
          </S.Description>
        </S.Section>
        <S.Section>
          <S.Status>Last known location:</S.Status>
          <S.Description>{location.name}</S.Description>
        </S.Section>
        <S.Section>
          <S.Status>First seen in:</S.Status>
          <S.Description>{origin.name}</S.Description>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};
