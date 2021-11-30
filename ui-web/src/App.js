import "./App.css";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/General/Header";
import Indicators from "./dashboard/domain/Indicators";
import Dashboard from "./Pages/Dashboard";
import Comunity from "./Pages/Comunity";

function App() {
  return (
    <div className="App">
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={0.5} sm={0.5} lg={0.5}></Grid>
        <Grid item xs={11.5} sm={11.5}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="indicators" element={<Indicators />} />
            <Route path="join" element={<Comunity />} />
          </Routes>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
