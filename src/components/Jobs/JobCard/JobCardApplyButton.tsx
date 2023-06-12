import styled from "styled-components";
import { IJob } from "../../../types";
import type { MouseEvent } from "react";

interface Props {
  job: IJob;
}

const ApplyButton = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
  margin-bottom: 10px;
`;

export default function JobCardApplyButton({ job }: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.stopPropagation();
  }

  return (
    <>
      <ApplyButton onClick={handleClick} href={`mailto:${job.applyMail}`}>
        Postuler
      </ApplyButton>
    </>
  );
}
