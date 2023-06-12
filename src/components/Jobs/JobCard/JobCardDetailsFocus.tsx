import styled from "styled-components";
import SVG from "react-inlinesvg";
import { DateTime } from "luxon";
import { capitalize } from "../../../utils/capitalize";
import cityIcon from "../../../assets/imgs/icons/city.svg";
import contractIcon from "../../../assets/imgs/icons/contract.svg";
import dateIcon from "../../../assets/imgs/icons/date-start.svg";
import degreeIcon from "../../../assets/imgs/icons/stude.svg";
import { IJob } from "../../../types";

interface Props {
  job: IJob;
}

const Container = styled.div`
  display: flex;
  gap: 40px;
`;

const Icon = styled(SVG)`
  width: 18px;
  height: 18px;
  & path {
    fill: var(--color-primary);
  }
`;

const DataContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DataLabel = styled.div`
  color: #505053;
  font-weight: 400;
  font-size: 18px;
`;

const Company = styled.span`
  text-transform: capitalize;
`;

export default function JobCardDetailsFocus({ job }: Props) {
  const formatedDate = DateTime.fromISO(job.publishDate).setLocale("fr-FR").toLocaleString(DateTime.DATE_FULL);

  return (
    <Container>
      {/* Company - City */}
      <DataContainer>
        <Icon src={cityIcon}></Icon>
        <DataLabel>
          <Company>{capitalize(job.company)}</Company> - {job.city}
        </DataLabel>
      </DataContainer>
      {/* Contract */}
      <DataContainer>
        <Icon src={contractIcon}></Icon>
        <DataLabel>{job.contractType.toUpperCase()}</DataLabel>
      </DataContainer>
      {/* Start date */}
      <DataContainer>
        <Icon src={dateIcon}></Icon>
        <DataLabel>Début : {formatedDate}</DataLabel>
      </DataContainer>
      {/* Degree */}
      <DataContainer>
        <Icon src={degreeIcon}></Icon>
        <DataLabel>BAC +{job.studyLevel}</DataLabel>
      </DataContainer>
    </Container>
  );
}
