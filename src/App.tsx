import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Jobs from "./components/Jobs/Jobs";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <Jobs></Jobs>
      </Container>
    </>
  );
}

export default App;
