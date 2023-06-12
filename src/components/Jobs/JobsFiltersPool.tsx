import styled, { keyframes } from "styled-components";
import crossIcon from "../../assets/imgs/icons/clear-tag.svg";
import SVG from "react-inlinesvg";
import { IFilters } from "../../types";

interface Props {
  filters: IFilters;
  setFilters: (value: IFilters) => void;
}

const appear = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`;

const ButtonLabels = {
  isRemoteFull: "Télétravail total",
  isRemotePartial: "Télétravail partiel",
  isRemotePonctual: "Télétravail regulier",
  isRemoteUnknown: "Télétravail non spécifié",
  isRemoteNone: "Pas de télétravail",
  isCDI: "CDI",
  isCDD: "CDD",
  isInternship: "Stage",
  isApprenticeship: "Alternance",
  isFront: "Dev Frontend",
  isBack: "Dev Backend",
  isFullstack: "Dev Fullstack",
  isPO: "Manager",
};

const Icon = styled(SVG)`
  width: 18px;
  height: 18px;
  & path {
    fill: white;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: var(--color-primary);
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: white;
  color: var(--color-black);
  border: 1px solid var(--color-primary);
  border-radius: 38px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  animation: ${appear} 1s;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonLabel = styled.div`
  font-size: 18px;
  color: var(--color-black);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  min-height: 37px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export default function JobsFiltersPool({ filters, setFilters }: Props) {
  const filtersComponents = Object.keys(filters).map((item) => {
    if (filters[item as keyof IFilters]) {
      return (
        <div key={item}>
          <Button onClick={() => setFilters({ ...filters, [item as keyof IFilters]: false })}>
            <ButtonLabel>{ButtonLabels[item as keyof IFilters]}</ButtonLabel>
            <IconContainer>
              <Icon src={crossIcon}></Icon>
            </IconContainer>
          </Button>
        </div>
      );
    }
  });

  return <>{filtersComponents.length && <ButtonsContainer>{filtersComponents}</ButtonsContainer>}</>;
}
