import styled from "styled-components";
import SVG from "react-inlinesvg";

interface Props {
  src: string;
  width: string;
  height: string;
}

export default function TopbarIcon(props: Props) {
  const Icon = styled(SVG)`
    width: ${props.width};
    height: ${props.height};
    & path {
      fill: "#0e0e2c";
    }
  `;

  return (
    <>
      <Icon src={props.src}></Icon>
    </>
  );
}
