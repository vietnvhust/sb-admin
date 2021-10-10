export interface IPagination<T> {
  total: number;
  page: number;
  items: T[];
}

export interface IPraramsPagination {
  to: number,
  show: number,
  pageMax: number
}

export const calculatePagination = (page: number, total: number): IPraramsPagination => {
  let to: number = 10;
  let show: number = 1;
  let pageMax: number = 1;
  pageMax = Math.floor(total / 10) + 1;
  if (page === 1) {
    show = 1;
    to = 10;
  } else if (page < pageMax) {
    show = (page - 1) * 10 + 1;
    to = page * 10;
  } else {
    show = (page - 1) * 10 + 1;
    to = total;
  }
  return {
    to,
    show,
    pageMax
  }
}