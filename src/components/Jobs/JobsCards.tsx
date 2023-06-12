import JobCard from "./JobCard/JobCard";
import type { IJob } from "../../types";
import { Slide } from "react-awesome-reveal";

interface Props {
  jobs: IJob[];
}

export default function JobsCards({ jobs }: Props) {
  const JobsComponents = jobs.map((job) => <JobCard job={job} key={job.uuid}></JobCard>);

  return (
    <>
      <div>
        <Slide direction="up" damping={0} cascade triggerOnce>
          {JobsComponents}
        </Slide>
      </div>
    </>
  );
}
