import styled from "styled-components";
import SidebarLogo from "./SidebarLogo";
import SidebarNavigation from "./SidebarNavigation";
import SidebarLogoutButton from "./SidebarLogoutButton";

const Container = styled.div`
  width: 240px;
  height: 100%;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 23px;
  padding-bottom: 46px;
`;

export default function Sidebar() {
  return (
    <>
      <Container>
        <SidebarLogo></SidebarLogo>
        <SidebarNavigation></SidebarNavigation>
        <SidebarLogoutButton></SidebarLogoutButton>
      </Container>
    </>
  );
}
