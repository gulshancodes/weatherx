import { Container, CssBaseline } from '@mui/material';
import { containerStyle } from './theme/customStyles';
import WeatherBox from './pages/WeatherBox';

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
