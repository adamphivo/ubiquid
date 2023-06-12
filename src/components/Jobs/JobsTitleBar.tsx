import styled from "styled-components";

const PAGE_TITLE = "Les jobs";

export default function JobsTitleBar() {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  `;
  const Title = styled.h1`
    font-size: 24px;
    color: var(--color-black);
  `;
  const PrintButton = styled.button`
    box-shadow: 0px 4px 13px rgba(67, 67, 67, 0.2);
    border-radius: 10px;
    background-color: var(--color-primary);
    border: none;
    color: white;
    padding: 8px 16px;
    font-size: 18px;
    transition-duration: 0.3s;
    &:hover {
      cursor: pointer;
      background-color: var(--color-primary-light);
    }
  `;

  return (
    <>
      <Container>
        <Title>{PAGE_TITLE}</Title>
        <PrintButton>Imprimer la page</PrintButton>
      </Container>
    </>
  );
}
