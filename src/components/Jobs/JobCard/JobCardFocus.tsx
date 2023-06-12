import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import JobCardBrandIcon from "./JobCardBrandIcon";
import JobCardStatus from "./JobCardStatus";
import JobCardSalary from "./JobCardSalary";
import JobCardFocusClose from "./JobCardFocusClose";
import JobCardDetailsFocus from "./JobCardDetailsFocus";
import JobCardDateSummary from "./JobCardDateSummary";
import JobCardAbout from "./JobCardAbout";
import JobCardApplyButton from "./JobCardApplyButton";
import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
  gap: 26px;
  border: 1px solid var(--color-primary);
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
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

export default function JobCardFocus({ job }: Props) {
  return (
    <Container>
      <TopContainer>
        <JobCardBrandIcon company={job.company}></JobCardBrandIcon>
        <SubContainer>
          <Row>
            <JobCardStatus job={job}></JobCardStatus>
            <JobCardFocusClose></JobCardFocusClose>
          </Row>
          <Row>
            <JobCardSalary job={job}></JobCardSalary>
          </Row>
        </SubContainer>
      </TopContainer>
      <Fade direction="down" cascade triggerOnce>
        <Row>
          <JobCardDetailsFocus job={job}></JobCardDetailsFocus>
          <JobCardDateSummary job={job} isLong={true}></JobCardDateSummary>
        </Row>
        <Row>
          <JobCardAbout job={job}></JobCardAbout>
        </Row>
        <Row>
          <div></div>
          <JobCardApplyButton job={job}></JobCardApplyButton>
        </Row>
      </Fade>
    </Container>
  );
}
