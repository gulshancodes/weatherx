import { Container, CssBaseline } from "@mui/material";
import WeatherBox from "./components/WeatherBox";
import { containerStyle } from "./theme/customStyles";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={containerStyle}>
        <WeatherBox />
      </Container>
    </>
  );
};

export default App;
