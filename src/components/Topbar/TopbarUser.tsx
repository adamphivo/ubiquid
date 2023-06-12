import styled from "styled-components";
import TopbarIcon from "./TopbarIcon";
import downArrowIcon from "../../assets/imgs/icons/arrow.svg";

export default function TopbarUser() {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;

  const Username = styled.p`
    font-size: 18px;
    color: var(--color-black);
  `;

  return (
    <>
      <Container>
        <Username>Eva Barnett</Username>
        <TopbarIcon src={downArrowIcon} width="14px" height="24px"></TopbarIcon>
      </Container>
    </>
  );
}
