import styled from "styled-components";
import TopbarIcon from "./TopbarIcon";
import TopbarUser from "./TopbarUser";
import notificationIcon from "../../assets/imgs/icons/notif.svg";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 24px;
`;

export default function Topbar() {
  return (
    <>
      <Container>
        <TopbarIcon src={notificationIcon} width="24px" height="24px"></TopbarIcon>
        <TopbarUser></TopbarUser>
      </Container>
    </>
  );
}
