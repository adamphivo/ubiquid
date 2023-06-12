import styled from "styled-components";
import JobsFilterSortBarFilters from "./JobsFilterSortBarFilters";
import JobsFilterSortBarSort from "./JobsFilterSortBarSort";
import type { IFilters, Sort } from "../../../types";

interface Props {
  filters: IFilters;
  sort: Sort;
  handleFilters: (value: IFilters) => void;
  handleSort: (value: Sort) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function JobsFilterSortBar({ filters, sort, handleFilters, handleSort }: Props) {
  return (
    <>
      <Container>
        <JobsFilterSortBarFilters filters={filters} setFilters={handleFilters}></JobsFilterSortBarFilters>
        <JobsFilterSortBarSort sort={sort} setSort={handleSort}></JobsFilterSortBarSort>
      </Container>
    </>
  );
}
