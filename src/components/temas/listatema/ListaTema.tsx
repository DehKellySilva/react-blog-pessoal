import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {

  let history = useHistory()

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const [temas, setTemas] = useState<Tema[]>([])

  async function pegaTemas() {
    await busca(`/temas`, setTemas, {
      headers: { 'Authorization': token }
    })
  }

  useEffect(() => {
    pegaTemas()
  }, [temas.length])

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      history.push("/login")
    }
  }, [token])

  return (
    <>
      {
        temas.map(tema => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>

              <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>

                <Typography variant="h5" component="h2">
                  {tema.descricao}
                </Typography>

                <Typography variant="h5" component="h2">
                  Minha descrição
                </Typography>

              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className='botaoAtualizarTema' size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  
                  <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button className='botaoDeletarTema' variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}


export default ListaTema;