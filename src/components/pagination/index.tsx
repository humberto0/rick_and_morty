import * as S from "./styles";
import { PaginationItem } from "./paginationItem";
import { PaginationProps } from "./types";
import { store } from "../../redux/store";
import { pageChange } from "../../redux/slices";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { generatePagesArray, siblingsCount } from "./utils";

export function Pagination({ registersPerPage = 20 }: PaginationProps) {
  const totalCountOfRegisters = useSelector(
    () => store.getState().filterReducer.totalPages,
  );

  const currentPage = useSelector(() => store.getState().filterReducer.page);

  const onPageChange = useCallback((page: number) => {
    store.dispatch(pageChange(page));
  }, []);

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <S.Container>
      <S.Stack>
        <S.Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </S.Button>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && <S.Text>...</S.Text>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              number={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <S.Text>...</S.Text>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
        <S.Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          Next
        </S.Button>
      </S.Stack>
    </S.Container>
  );
}
