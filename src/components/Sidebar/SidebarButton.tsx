import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  label: string;
  src: string;
  isActive: boolean;
}

export default function SidebarButton(props: Props) {
  const Button = styled.button`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background: ${props.isActive ? "white" : "inherit"};
    color: ${props.isActive ? "#0e0e2c" : "white"};
    border: none;
  `;

  const Label = styled.p`
    font-size: 18px;
  `;

  const Icon = styled(SVG)`
    width: 24px;
    height: 24px;
    & path {
      fill: ${props.isActive ? "#7650E0" : "white"};
    }
  `;

  return (
    <>
      <Button>
        <Icon src={props.src}></Icon>
        <Label>{props.label}</Label>
      </Button>
    </>
  );
}
