import styled from "styled-components";
import JobCard from "./JobCard/JobCard";
import type { IJob } from "../../types";

interface Props {
  jobs: IJob[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export default function JobsCards({ jobs }: Props) {
  const JobsComponents = jobs.map((job) => <JobCard job={job} key={job.uuid}></JobCard>);

  return (
    <>
      <Container>{JobsComponents}</Container>
    </>
  );
}
