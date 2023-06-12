import styled from "styled-components";
import SidebarButton from "./SidebarButton";
import homeIcon from "../../assets/imgs/icons/home.svg";
import jobIcon from "../../assets/imgs/icons/job.svg";
import messageIcon from "../../assets/imgs/icons/message.svg";

const Navigation = styled.nav`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function SidebarNavigation() {
  return (
    <>
      <Navigation>
        <SidebarButton src={homeIcon} label={"Acceuil"} isActive={false}></SidebarButton>
        <SidebarButton src={jobIcon} label={"Les jobs"} isActive={true}></SidebarButton>
        <SidebarButton src={messageIcon} label={"Messages"} isActive={false}></SidebarButton>
      </Navigation>
    </>
  );
}
