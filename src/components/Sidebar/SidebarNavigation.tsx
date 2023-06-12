import styled from "styled-components";
import SidebarButton from "./SidebarButton";
import homeIcon from "../../assets/imgs/icons/home.svg";
import jobIcon from "../../assets/imgs/icons/job.svg";
import messageIcon from "../../assets/imgs/icons/message.svg";

const Navigation = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function SidebarNavigation() {
  return (
    <>
      <nav>
        <Navigation>
          <li>
            <SidebarButton src={homeIcon} label={"Accueil"} isActive={false}></SidebarButton>
          </li>
          <li>
            <SidebarButton src={jobIcon} label={"Les jobs"} isActive={true}></SidebarButton>
          </li>
          <li>
            <SidebarButton src={messageIcon} label={"Messages"} isActive={false}></SidebarButton>
          </li>
        </Navigation>
      </nav>
    </>
  );
}
