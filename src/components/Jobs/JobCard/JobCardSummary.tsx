import styled from "styled-components";
import JobCardBrandIcon from "./JobCardBrandIcon";
import JobCardStatus from "./JobCardStatus";
import JobCardSalary from "./JobCardSalary";
import JobCardDetailsSummary from "./JobCardDetailsSummary";
import JobCardDateSummary from "./JobCardDateSummary";
import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 24px;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function JobCardSummary({ job }: Props) {
  return (
    <>
      <Container>
        <JobCardBrandIcon company={job.company} />
        <SubContainer>
          <Row>
            <JobCardStatus job={job}></JobCardStatus>
            <JobCardSalary job={job}></JobCardSalary>
          </Row>
          <Row>
            <JobCardDetailsSummary job={job}></JobCardDetailsSummary>
            <JobCardDateSummary job={job}></JobCardDateSummary>
          </Row>
        </SubContainer>
      </Container>
    </>
  );
}
