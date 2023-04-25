import { FC } from "react";
import { ListCardProps } from "../../types/cardTypes";
import * as S from "./styles";
import { Card } from "../card";

export const ListCard: FC<ListCardProps> = ({ cards }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
