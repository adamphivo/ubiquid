import styled from "styled-components";
interface Props {
  company: string;
}

const IconContainer = styled.div`
  background-color: var(--color-primary-lighter);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
`;

const IconLetter = styled.span`
  color: var(--color-primary);
  font-size: 38px;
  font-weight: 600;
  text-transform: uppercase;
`;

export default function JobCardBrandIcon({ company }: Props) {
  return (
    <IconContainer>
      <IconLetter>{company[0]}</IconLetter>
    </IconContainer>
  );
}
