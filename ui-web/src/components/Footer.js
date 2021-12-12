import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import '../styles/Home/footer.css';

const gridStyle = {
    alignSelf: 'center'
}

const Footer = () => {
    return (
        <footer>
            <Box bgcolor={'text.primary'} color={'white'} sx={{marginTop: '30px', padding: '70px 0px'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3} sx={gridStyle}>
                        <Typography 
                            variant={'h5'} 
                            pl = {{xs: '0px', sm: '20px'}}
                            sx = {{textAlign: {xs: 'center', sm: 'left'}}}
                        >
                            LOGO 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} sx={gridStyle}>
                        <Typography variant={'h6'}>Desarrolladores: </Typography>
                        <Typography variant={'body2'}>Brayan Ramos</Typography>
                        <Typography variant={'body2'}>Omar Bautista</Typography>
                        <Typography variant={'body2'}>Santiago Betancur</Typography>
                        <Typography variant={'body2'}>Santiago Taborda</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} sx={gridStyle}>
                        <Typography variant={'h6'}>Apoyo de: </Typography>
                        <Typography variant={'body2'}>MisionTIC 2022</Typography>
                        <Typography variant={'body2'}>MinTIC</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} sx={{alignSelf: 'center', pr: '10px'}}>
                        <Button variant="contained">Registrarse</Button>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    )
}

export default Footer;