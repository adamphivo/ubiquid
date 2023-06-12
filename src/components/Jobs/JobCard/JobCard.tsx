import { useState } from "react";
import JobCardSummary from "./JobCardSummary";
import JobCardFocus from "./JobCardFocus";
import type { IJob } from "../../../types";
import { Slide } from "react-awesome-reveal";

interface Props {
  job: IJob;
}
export default function JobCard({ job }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return isFocused ? (
    <Slide direction="up" triggerOnce>
      <div onClick={() => setIsFocused(!isFocused)}>
        <JobCardFocus job={job}></JobCardFocus>
      </div>
    </Slide>
  ) : (
    <Slide direction="up" triggerOnce>
      <div onClick={() => setIsFocused(!isFocused)}>
        <JobCardSummary job={job}></JobCardSummary>
      </div>
    </Slide>
  );
}
