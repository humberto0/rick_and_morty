import * as S from './styles';
import { PaginationItemProps } from './types';

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
