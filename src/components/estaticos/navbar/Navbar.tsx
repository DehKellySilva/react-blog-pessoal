import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }

    return (
        <>
            <AppBar className='menu' position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <img className='logo' src="https://i.imgur.com/OEIYXt4.png" alt="" />
                    </Box>


                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className='text-decorator-none'>
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className='text-decorator-none'>
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={6} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                            <Box mx={6} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;