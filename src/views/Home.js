import { AppBar, Box, Container, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import homeJumbo from '../static/homeJumbo.jpg'

const Home = () => {
    const [auth, setAuth] = useState(true)
    const onClick = () => setAuth(!auth)
    return (
    <Grid className='homeGrid'
    root
    container
    direction='column'
    >
    <AppBar position='static'>
    <Grid className='innerHomeGrid' container direction='row' justify='space-between' alignItems='center'>
        <Typography variant='h2' >Anywhere Fitness</Typography>
        { auth ? 
        (<IconButton fontSize='2rem' onClick={onClick} ><AccountCircle/></IconButton>): 
        (<Typography onClick={onClick} variant='h4'>Log In|Sign Up</Typography>)
        }
    </Grid>
    </AppBar>
    <div className='homeJumboContainer'>
            {/* // style={{ backgroundImage: `url(${homeJumbo})`}} 
            // style={{ backgroundImage: `url(/homeJumbo.jpg')`}}  */}
            {/* className="homeJumbo"> */}
            {/* %PUBLIC_URL%/homeJumbo.jpg */}
            {/*  */}
            <img className='homeJumbo' src={homeJumbo} alt='Fitness Class'/>
            
    </div>
    <Container>
        
        <Typography variant='h1' fontWeight='medium'>Home2</Typography>
        <Typography variant='h1'>Home3</Typography>
    </Container>
    </Grid>
    )
}
export default Home;