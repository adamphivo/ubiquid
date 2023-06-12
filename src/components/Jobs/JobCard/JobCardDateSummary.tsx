import styled from "styled-components";
import { IJob } from "../../../types";
import { DateTime } from "luxon";

interface Props {
  job: IJob;
  isLong: boolean;
}

const Container = styled.div`
  color: #505053;
  font-size: 18px;
`;

export default function JobCardDateSummary({ job, isLong = false }: Props) {
  const formatedDate = DateTime.fromISO(job.publishDate).setLocale("fr-FR").toRelative();

  return (
    <Container>
      {isLong && "Publié"} {formatedDate}
    </Container>
  );
}
