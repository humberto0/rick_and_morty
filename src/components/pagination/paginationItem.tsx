import * as S from "./styles";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <S.Button disabled className="page">
        {number}
      </S.Button>
    );
  }

  return (
    <S.Button onClick={() => onPageChange(number)} className="page">
      {number}
    </S.Button>
  );
}
