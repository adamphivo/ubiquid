import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  height: 100%;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
`;

export default function Sidebar() {
  return (
    <>
      <Container></Container>
    </>
  );
}
