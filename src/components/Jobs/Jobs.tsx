import { useState, useEffect } from "react";
import styled from "styled-components";
import JobsTitleBar from "./JobsTitleBar";
import JobsFilterSortBar from "./JobsFilterSortBar/JobsFilterSortBar";
import JobsFiltersPool from "./JobsFiltersPool";
import JobsCards from "./JobsCards";
import jobsData from "../../assets/data/data.json";
import type { Sort, IFilters, IJob } from "../../types";

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BaseFilters: IFilters = {
  isBack: false,
  isFront: false,
  isFullstack: true,
  isPO: false,
  isCDD: false,
  isCDI: false,
  isInternship: false,
  isApprenticeship: false,
  isRemotePartial: false,
  isRemotePonctual: false,
  isRemoteFull: false,
  isRemoteUnknown: false,
  isRemoteNone: false,
};

const EmptyFilters: IFilters = {
  isBack: false,
  isFront: false,
  isFullstack: false,
  isPO: false,
  isCDD: false,
  isCDI: false,
  isInternship: false,
  isApprenticeship: false,
  isRemotePartial: false,
  isRemotePonctual: false,
  isRemoteFull: false,
  isRemoteUnknown: false,
  isRemoteNone: false,
};

export default function Jobs() {
  const [filters, setFilters] = useState<IFilters>(BaseFilters);
  const [sort, setSort] = useState<Sort>("date");
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    const filteredJobs: IJob[] =
      JSON.stringify(filters) === JSON.stringify(EmptyFilters)
        ? []
        : jobsData.filter((job) => {
            if (filters.isApprenticeship && job.contractType !== "alternance") return false;
            if (filters.isInternship && job.contractType !== "stage") return false;
            if (filters.isCDD && job.contractType !== "cdd") return false;
            if (filters.isCDI && job.contractType !== "cdi") return false;
            if (filters.isPO && job.jobTitle !== "manager") return false;
            if (filters.isFullstack && job.jobTitle !== "fullstack") return false;
            if (filters.isBack && job.jobTitle !== "backend") return false;
            if (filters.isFront && job.jobTitle !== "frontend") return false;
            if (filters.isRemoteNone && job.remoteWork !== "none") return false;
            if (filters.isRemoteUnknown && job.remoteWork !== "unknown") return false;
            if (filters.isRemotePartial && job.remoteWork !== "regularly") return false;
            if (filters.isRemoteFull && job.remoteWork !== "full") return false;
            if (filters.isRemotePonctual && job.remoteWork !== "eventually") return false;
            return true;
          });

    filteredJobs.sort((a, b) => {
      switch (sort) {
        case "date": {
          return Date.parse(b.publishDate) - Date.parse(a.publishDate);
        }
        case "salary": {
          return b.salary - a.salary;
        }
      }
    });

    setJobs(filteredJobs);
    // Clean up
    return () => {
      setJobs([]);
    };
  }, [sort, filters]);

  return (
    <>
      <Container>
        <JobsTitleBar></JobsTitleBar>
        <JobsFilterSortBar filters={filters} handleFilters={setFilters} sort={sort} handleSort={setSort}></JobsFilterSortBar>
        <JobsFiltersPool filters={filters} setFilters={setFilters}></JobsFiltersPool>
        <JobsCards jobs={jobs}></JobsCards>
      </Container>
    </>
  );
}
