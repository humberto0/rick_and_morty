export interface PaginationProps {
  registersPerPage?: number;
}
export interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}
