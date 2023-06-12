import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import JobCard from "./JobCard/JobCard";
import type { IJob } from "../../types";

interface Props {
  jobs: IJob[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function JobsCards({ jobs }: Props) {
  const JobsComponents = jobs.map((job) => <JobCard job={job} key={job.uuid}></JobCard>);

  return (
    <>
      <Container>
        <Slide direction="up" damping={0} cascade triggerOnce>
          {JobsComponents}
        </Slide>
      </Container>
    </>
  );
}
