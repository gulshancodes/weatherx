import { Box, CssBaseline } from "@mui/material";
import WeatherBox from "./components/WeatherBox";


const style = {
  // backgroundImage: "linear-gradient(to top, #dfe9f3 0%, rgba(31, 38, 135, 0.1) 100%)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
};

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={style}>
        <WeatherBox />
      </Box>
    </>
  );
};

export default App;
