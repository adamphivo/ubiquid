import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: var(--color-black);
`;

const CloseIcon = styled.span`
  border-radius: 50%;
  font-weight: 500;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export default function JobCardFocusClose() {
  return (
    <Container>
      <Label>Réduire</Label>
      <CloseIcon>-</CloseIcon>
    </Container>
  );
}
