import type { IJob } from "../../../types";

interface Props {
  job: IJob;
}
export default function JobCard({ job }: Props) {
  return (
    <>
      <div>{job.uuid}</div>
    </>
  );
}
