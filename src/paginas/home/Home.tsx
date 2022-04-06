import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {
    
    let history = useHistory();
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      )

    useEffect(() => {
      if (token == "") 
      {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
          history.push("/login")
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                <Grid item xs={12} >
                    <img className='fundoImagem' src="https://i.imgur.com/9LE53Uy.jpg" alt=""/>
                </Grid>
                    <Box className='efeito-vidro' paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde, ao Pets - Melhores amiges </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>aqui trago informações sobre pets, não importa qual seja, entre e traga seu pet junte.</Typography>
                    
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-decorator-none'>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;