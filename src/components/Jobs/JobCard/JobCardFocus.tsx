import styled from "styled-components";
import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}

export default function JobCardFocus({ job }: Props) {
  return (
    <>
      <div>{job.uuid}</div>
      <div>{job.about}</div>
    </>
  );
}
