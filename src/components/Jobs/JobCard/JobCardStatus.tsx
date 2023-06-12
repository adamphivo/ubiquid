import styled from "styled-components";

import JobCardStatusTitle from "./JobCardStatusTitle";
import JobCardStatusRemote from "./JobCardStatusRemote";
import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default function JobCardStatus({ job }: Props) {
  return (
    <Container>
      <JobCardStatusTitle job={job}></JobCardStatusTitle>
      <JobCardStatusRemote job={job}></JobCardStatusRemote>
    </Container>
  );
}
