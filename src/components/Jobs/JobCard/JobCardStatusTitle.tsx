import styled from "styled-components";
import { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Title = styled.div`
  color: var(--color-black);
  font-size: 18px;
  font-weight: 500;
`;

export default function JobCardStatusTitle({ job }: Props) {
  switch (job.jobTitle) {
    case "manager":
      return <Title>Manager</Title>;
    case "fullstack":
      return <Title>Dev Fullstack</Title>;
    case "frontend":
      return <Title>Dev Frontend</Title>;
    case "backend":
      return <Title>Dev Backend</Title>;
  }
}
