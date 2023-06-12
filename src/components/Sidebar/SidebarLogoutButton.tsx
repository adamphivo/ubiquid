import styled from "styled-components";
import SidebarButton from "./SidebarButton";
import logoutIcon from "../../assets/imgs/icons/logout.svg";

export default function SidebarLogoutButton() {
  const Container = styled.div`
    justify-self: flex-end;
    margin-top: auto;
  `;

  return (
    <>
      <Container>
        <SidebarButton src={logoutIcon} label="Déconnexion" isActive={false}></SidebarButton>
      </Container>
    </>
  );
}
