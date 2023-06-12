import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  label: string;
  src: string;
  isActive: boolean;
}

const Button = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background: inherit;
  color: white;

  &.active {
    background: white;
    color: var(--color-black);
  }
  border: none;
`;

const Label = styled.p`
  font-size: 18px;
`;

const Icon = styled(SVG)`
  width: 24px;
  height: 24px;
  & path {
    fill: white;
  }
  &.active {
    & path {
      fill: #7650e0;
    }
  }
`;

export default function SidebarButton(props: Props) {
  return (
    <>
      <Button className={props.isActive ? "active" : ""}>
        <Icon src={props.src} className={props.isActive ? "active" : ""}></Icon>
        <Label>{props.label}</Label>
      </Button>
    </>
  );
}
