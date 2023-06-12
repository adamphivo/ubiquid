import { useState, useEffect } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import downArrowIcon from "../../../assets/imgs/icons/arrow.svg";
import type { Sort } from "../../../types";

interface Props {
  sort: Sort;
  setSort: (value: Sort) => void;
}
const DropDownButton = styled.div`
  color: var(--color-black);
  transition-duration: 0.3s;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 50px;
  left: -50px;
  width: 300px;
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
  width: 100%;

  &.active {
    opacity: 1;
    display: flex;
    width: 150px;
  }
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  font-weight: 500;
  &:hover {
    background-color: var(--color-primary-lighter);
    cursor: pointer;
  }

  &.active {
    color: var(--color-primary);
  }
`;

const Icon = styled(SVG)`
  width: 14px;
  height: 14px;
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
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const CTALabel = styled.div`
  font-size: 18px;
  color: var(--color-black);
`;

const Selected = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

export default function JobsFilterSortBarSort({ sort, setSort }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsActive(false);
    });
  }, []);

  return (
    <Container>
      <CTALabel>Trier par :</CTALabel>
      {/* Job type */}
      <DropDownContainer>
        {/* Button */}
        <DropDownButton
          className={isActive ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setIsActive(!isActive);
          }}
        >
          <Selected>{sort === "date" ? "Date" : "Salaire"}</Selected>
          <IconContainer>
            <Icon src={downArrowIcon}></Icon>
          </IconContainer>
        </DropDownButton>
        {/* Options */}
        <OptionsContainer className={isActive ? "active" : ""}>
          <Option className={sort === "date" ? "active" : ""}>
            <span onClick={() => setSort("date")}>Par Date</span>
          </Option>
          <Option className={sort === "salary" ? "active" : ""}>
            <span onClick={() => setSort("salary")}>Par Salaire</span>
          </Option>
        </OptionsContainer>
      </DropDownContainer>
    </Container>
  );
}
