import styled from "styled-components";
import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Container = styled.div`
  display: flex;
  color: #505053;
  gap: 16px;
  font-size: 18px;
  font-weight: 400;
`;

const ContractType = styled.span`
  text-transform: uppercase;
`;

const Separator = styled.span`
  display: flex;
  height: auto;
  width: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 1px;
    background-color: #505053;
    width: 100%;
  }
`;

export default function JobCardDetailsSummary({ job }: Props) {
  return (
    <Container>
      <span>
        {job.company} - {job.city}
      </span>
      <Separator></Separator>
      <ContractType>{job.contractType}</ContractType>
    </Container>
  );
}
