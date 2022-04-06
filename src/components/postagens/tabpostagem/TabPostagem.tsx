import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className='caixa2' centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className='corLetras' label="Todas as postagens" value="1" />
            <Tab className='corLetras' label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>

        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>

        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>

          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
            <p>
              Olá mundo, sou a Denise. Tenho 22 anos.
              Nasci e moro na cidade de São Paulo. Toda a minha família é do Pernambuco, as minhas fontes de inspiração são eles, por ser um povo guerreiro, com foco e determinação. Cresci vendo exemplos de mulheres fortes, que me inspiram a buscar e persistir fortemente pelos o meus sonhos e pelo o que acredito.
            </p>
            <p>Quando criança, consertava os meus próprios carrinhos que se quebravam, sim, adoro hot wheels. Além de carros, no meu tempo livre gosto muito de ler um bom livro.
            </p>
            <p>
              Com o gosto por carros, realizei um curso de mecânica automotiva, quando estava no último ano do ensino médio. Na minha sala só havia eu de mulher, mas isso não me abalou, me dediquei muito, e fui a melhor aluna da escola com 3.000 alunos.
            </p>
            <p>
              Realizei estágio em uma oficina, aprimorei o técnico, foi o meu primeiro contato com ambiente de trabalho mesmo sendo informal, mas o machismo foi tomando proporções maiores e vi que não era um ambiente saudável e  fui buscar novos ares.
            </p>
            <p>
              Comecei no meu primeiro emprego CLT, no setor de atendimento ao cliente.
            </p>
            Essa experiência profissional, me fez desenvolver a comunicação, trabalho em equipe e levar o meu ponto de vista para o ambiente de trabalho. Mas não me sentia desafiada de uma forma adequada, e que todas as habilidades que desenvolvi, seriam melhor aproveitadas em outra área
            <p>
              Foi então que comecei a assistir diversos vídeos de programação no Youtube. Foi amor à primeira linha de código. Desde então fiquei muito empolgada com esse universo e nunca mais parei.
            </p>
            <p>
              Encontrei um post nos feeds do Google, sobre o bootcamp da Generation Brasil, que proporciona acesso aos jovens vulneráveis na tecnologia. Logo me inscrevi no programa, e me orgulho bastante dessa decisão.
            </p>
            <p>
              Não sabia que precisava desenvolver as minhas softs skills, até que com as atividades, aulas e a realização do projeto que aborda sobre o Objetivos de Desenvolvimento Sustentável, da Onu, com o tema Educação, desenvolvemos o Back-end e Front-end construímos um ecommerce de cursos, tivemos a chance de exercer funções como PO, Master, Tester e Devs. As experiências me fizeram ver o quanto é importante ter uma comunicação clara e eficiente com a equipe, superar os obstáculos e ter responsabilidade são fundamentais para a realização de uma tarefa, e que o trabalho em equipe nos permitem fortalecer vínculos com as pessoas, distribuir tarefas e otimizar o tempo de entregas.
            </p>
            <p>
              Já que você conheceu um pouco mais sobre mim, ficou animado e gostou da minha história? Te convido a me contratar, para você ver todo esse desenvolvimento e aprendizado, sendo aplicado todos os dias na sua empresa.  Obrigada
            </p>

          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;