import './App.css';
import { Grid } from '@mui/material';
import Footer from './components/Footer';
import Dashboard from './dashboard/domain/Dashboard';

function App() {
  return (
    <div className="App">
      <Grid container sx={{height: '100vh'}}>
        <Grid item xs={0.5} sm={0.5} lg={0.5}>
        </Grid>
        <Grid item xs={11.5} sm={11.5}>
          <Dashboard/>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
