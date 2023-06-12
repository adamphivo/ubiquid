import styled from "styled-components";
import { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const About = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #505053;
  line-height: 21.11px;
`;

export default function JobCardAbout({ job }: Props) {
  return (
    <>
      <About>{job.about}</About>
    </>
  );
}
