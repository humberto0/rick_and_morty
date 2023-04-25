import { FC } from "react";
import { ListCardProps } from "../../types/cardTypes";
import * as S from "./styles";
import { Card } from "../card";
import { Pagination } from "../pagination";

export const ListCard: FC<ListCardProps> = ({
  cards,
  onPageChange,
  totalCountOfRegisters,
  currentPage,
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </S.Content>
      </S.Container>
      <Pagination
        totalCountOfRegisters={totalCountOfRegisters}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </S.Wrapper>
  );
};
