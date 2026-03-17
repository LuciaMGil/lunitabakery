import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NavBar = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Lunita Bakery
                    </Typography>
                    <Button color="inherit"> <Link to='/'>Home</Link></Button>
                    <Button color="inherit"> <Link to='/order-now'>Order Now</Link></Button>
                    <Button color="inherit"> <Link to='/catering'>Catering</Link></Button>
                    <Button color="inherit"> <Link to='/about'>About</Link></Button>
                    <Button color="inherit">  <Link to='/contact'>Contact</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar