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
    const filteredJobs: IJob[] = jobsData.filter((job) => {
      if (filters.isApprenticeship && job.contractType === "alternance") return true;
      if (filters.isInternship && job.contractType === "stage") return true;
      if (filters.isCDD && job.contractType === "cdd") return true;
      if (filters.isCDI && job.contractType === "cdi") return true;
      if (filters.isPO && job.jobTitle === "manager") return job;
      if (filters.isFullstack && job.jobTitle === "fullstack") return true;
      if (filters.isBack && job.jobTitle === "backend") return true;
      if (filters.isFront && job.jobTitle === "frontend") return true;
      if (filters.isRemoteNone && job.remoteWork === "none") return true;
      if (filters.isRemoteUnknown && job.remoteWork === "unknown") return true;
      if (filters.isRemotePartial && job.remoteWork === "regularly") return true;
      if (filters.isRemoteFull && job.remoteWork === "full") return true;
      if (filters.isRemotePonctual && job.remoteWork === "eventually") return true;
    });

    filteredJobs.sort((a, b) => {
      switch (sort) {
        case "date": {
          return Date.parse(a.publishDate) - Date.parse(b.publishDate);
        }
        case "salary": {
          return a.salary - b.salary;
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
