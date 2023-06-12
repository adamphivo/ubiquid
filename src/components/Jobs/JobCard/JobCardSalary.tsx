import styled from "styled-components";
import { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 18px;
`;

const Label = styled.span`
  color: var(--color-black);
  font-weight: 400;
`;

const Salary = styled.span`
  color: var(--color-primary);
  font-weight: 500;
`;

export default function JobCardSalary({ job }: Props) {
  return (
    <Container>
      <Label>Salaire</Label>
      <Salary>{job.salary}k</Salary>
    </Container>
  );
}
