import styled from "styled-components";
import { IJob } from "../../../types";
import { DateTime } from "luxon";

interface Props {
  job: IJob;
}

const Container = styled.div`
  color: #505053;
  font-size: 18px;
`;

export default function JobCardDateSummary({ job }: Props) {
  const formatedDate = DateTime.fromISO(job.publishDate).setLocale("fr-FR").toRelative();

  return <Container>{formatedDate}</Container>;
}
