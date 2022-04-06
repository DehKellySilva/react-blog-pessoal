import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/action';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Navbar() {

    const dispatch = useDispatch()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let history = useHistory();


    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', 
        {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navBarComponent

    if (token !== "") {
        navBarComponent =
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
    }

    return (
        <>
            {navBarComponent}
        </>
    )
}

export default Navbar;