import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";

const Logo = styled.img`
  width: 160px;
  &:hover {
    cursor: pointer;
  }
`;

export default function SidebarLogo() {
  return (
    <>
      <Logo src={logo}></Logo>
    </>
  );
}
