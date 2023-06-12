import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Jobs from "./components/Jobs/Jobs";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  width: calc(100% - 240px);
  margin-left: 240px;
`;

function App() {
  return (
    <>
      <Container>
        <Sidebar></Sidebar>
        <AppContainer>
          <Topbar></Topbar>
          <Jobs></Jobs>
        </AppContainer>
      </Container>
    </>
  );
}

export default App;
