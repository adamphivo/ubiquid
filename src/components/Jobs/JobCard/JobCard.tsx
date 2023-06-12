import { useState } from "react";
import JobCardSummary from "./JobCardSummary";
import JobCardFocus from "./JobCardFocus";
import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}
export default function JobCard({ job }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return isFocused ? (
    <div onClick={() => setIsFocused(!isFocused)}>
      <JobCardFocus job={job}></JobCardFocus>
    </div>
  ) : (
    <div onClick={() => setIsFocused(!isFocused)}>
      <JobCardSummary job={job}></JobCardSummary>
    </div>
  );
}
