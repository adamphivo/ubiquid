import { useState, useEffect } from "react";
import styled from "styled-components";
import downArrowIcon from "../../../assets/imgs/icons/arrow.svg";
import SVG from "react-inlinesvg";
import type { IFilters } from "../../../types";

interface Props {
  filters: IFilters;
  setFilters: (value: IFilters) => void;
}

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const DropDownButton = styled.div`
  color: var(--color-black);
  transition-duration: 0.3s;
  box-shadow: 0px 4px 13px rgba(67, 67, 67, 0.2);
  background-color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 30px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active,
  &.active {
    box-shadow: none;
    border: 1px solid var(--color-primary);
  }
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  box-shadow: 0px 4px 13px rgba(67, 67, 67, 0.2);
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
  opacity: 0;
  transition-duration: 0.3s;
  display: none;

  &.active {
    opacity: 1;
    display: block;
  }
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  &:hover {
    background-color: var(--color-primary-lighter);
    cursor: pointer;
  }
`;

const Icon = styled(SVG)`
  width: 12px;
  height: 12px;
  & path {
    fill: var(--color-primary);
  }
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary-lighter);
`;

interface FilterSelectorStatus {
  isTypeOpen: boolean;
  isContractOpen: boolean;
  isRemoteOpen: boolean;
}

export default function JobsFilterSortBarFilters({ filters, setFilters }: Props) {
  const [filterStatus, setFilterStatus] = useState<FilterSelectorStatus>({ isTypeOpen: false, isContractOpen: false, isRemoteOpen: false });

  useEffect(() => {
    // Close all dropdowns on click
    window.addEventListener("click", () => {
      setFilterStatus({ isTypeOpen: false, isContractOpen: false, isRemoteOpen: false });
    });
  }, []);

  return (
    <Container>
      {/* Job type */}
      <DropDownContainer>
        {/* Button */}
        <DropDownButton
          className={filterStatus.isTypeOpen ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setFilterStatus({ isTypeOpen: !filterStatus.isTypeOpen, isContractOpen: false, isRemoteOpen: false });
          }}
        >
          <span>Poste</span>
          <IconContainer>
            <Icon src={downArrowIcon}></Icon>
          </IconContainer>
        </DropDownButton>
        {/* Options */}
        <OptionsContainer className={filterStatus.isTypeOpen ? "active" : ""}>
          <Option>
            <input type="checkbox" checked={filters.isFront ? true : false} onChange={() => setFilters({ ...filters, isFront: !filters.isFront })} />
            <span>Frontend</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isBack ? true : false} onChange={() => setFilters({ ...filters, isBack: !filters.isBack })} />
            <span>Backend</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isFullstack ? true : false} onChange={() => setFilters({ ...filters, isFullstack: !filters.isFullstack })} />
            <span>Fullstack</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isPO ? true : false} onChange={() => setFilters({ ...filters, isPO: !filters.isPO })} />
            <span>Manager</span>
          </Option>
        </OptionsContainer>
      </DropDownContainer>

      {/* Contract type */}
      <DropDownContainer>
        {/* Button */}
        <DropDownButton
          className={filterStatus.isContractOpen ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setFilterStatus({ isTypeOpen: false, isContractOpen: !filterStatus.isContractOpen, isRemoteOpen: false });
          }}
        >
          <span>Contrat</span>
          <IconContainer>
            <Icon src={downArrowIcon}></Icon>
          </IconContainer>
        </DropDownButton>
        {/* Options */}
        <OptionsContainer className={filterStatus.isContractOpen ? "active" : ""}>
          <Option>
            <input type="checkbox" checked={filters.isCDI ? true : false} onChange={() => setFilters({ ...filters, isCDI: !filters.isCDI })} />
            <span>CDI</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isCDD ? true : false} onChange={() => setFilters({ ...filters, isCDD: !filters.isCDD })} />
            <span>CDD</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isInternship ? true : false} onChange={() => setFilters({ ...filters, isInternship: !filters.isInternship })} />
            <span>Stage</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isApprenticeship ? true : false} onChange={() => setFilters({ ...filters, isApprenticeship: !filters.isApprenticeship })} />
            <span>Alternance</span>
          </Option>
        </OptionsContainer>
      </DropDownContainer>

      {/* Remote type */}
      <DropDownContainer>
        {/* Button */}
        <DropDownButton
          className={filterStatus.isRemoteOpen ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setFilterStatus({ isTypeOpen: false, isContractOpen: false, isRemoteOpen: !filterStatus.isRemoteOpen });
          }}
        >
          <span>Télétravail</span>
          <IconContainer>
            <Icon src={downArrowIcon}></Icon>
          </IconContainer>
        </DropDownButton>
        {/* Options */}
        <OptionsContainer className={filterStatus.isRemoteOpen ? "active" : ""}>
          <Option>
            <input type="checkbox" checked={filters.isRemoteFull ? true : false} onChange={() => setFilters({ ...filters, isRemoteFull: !filters.isRemoteFull })} />
            <span>Télétravail total</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isRemotePartial ? true : false} onChange={() => setFilters({ ...filters, isRemotePartial: !filters.isRemotePartial })} />
            <span>Télétravail partiel</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isRemotePonctual ? true : false} onChange={() => setFilters({ ...filters, isRemotePonctual: !filters.isRemotePonctual })} />
            <span>Télétravail ponctuel</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isRemoteNone ? true : false} onChange={() => setFilters({ ...filters, isRemoteNone: !filters.isRemoteNone })} />
            <span>Pas de Télétravail</span>
          </Option>
          <Option>
            <input type="checkbox" checked={filters.isRemoteUnknown ? true : false} onChange={() => setFilters({ ...filters, isRemoteUnknown: !filters.isRemoteUnknown })} />
            <span>Non spécifié</span>
          </Option>
        </OptionsContainer>
      </DropDownContainer>
    </Container>
  );
}
