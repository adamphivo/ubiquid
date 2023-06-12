import styled from "styled-components";
import { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const RemoteTag = styled.div`
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  &.full {
    background-color: #e5f3fe;
    color: #0074ff;
  }
  &.regularly {
    background-color: var(--color-primary-lighter);
    color: var(--color-primary);
  }
  &.eventually {
    background-color: #fff8e5;
    color: #f0ba1c;
  }
  &.none {
    background-color: #d4f5d4;
    color: #4ad34a;
  }
  &.unknown {
    background-color: #ebebeb;
    color: gray;
  }
`;

export default function JobCardStatusRemote({ job }: Props) {
  switch (job.remoteWork) {
    case "full":
      return <RemoteTag className="full">Télétravail total</RemoteTag>;
    case "regularly":
      return <RemoteTag className="regularly">Télétravail partiel</RemoteTag>;
    case "eventually":
      return <RemoteTag className="eventually">Télétravail ponctuel</RemoteTag>;
    case "none":
      return <RemoteTag className="none">Pas de télétravail</RemoteTag>;
    case "unknown":
      return <RemoteTag className="unknown">Non spécifié</RemoteTag>;
  }
}
