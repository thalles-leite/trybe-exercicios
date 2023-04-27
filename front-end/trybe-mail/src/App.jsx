/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Box, Container } from '@mui/system';
import {
  Alert,
  AppBar,
  Button,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Snackbar,
  Typography } from '@mui/material';

import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';

const INITIAL_STATE = [
  {
    id: 0,
    title: 'Olá, Tenho uma vaga que bate com o seu perfil...',
    status: 0,
  },
  {
    id: 1,
    title: 'Parabéns, Você avançou no processo da vaga...',
    status: 0,
  },
  {
    id: 2,
    title: 'Re: Entrevista marcada',
    status: 0,
  },
];

function App() {
  const [mails, setMails] = useState([]);
  const [open, setOpen] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    setMails(INITIAL_STATE);
  }, []);

  // Verifica se todos os e-mails estão lidos.
  const verifyMailsRead = () => mails.every(({ status }) => status === 1);

  // gancha a atualização do estado mails
  useEffect(() => {
    if (verifyMailsRead() && mails.length > 0) {
      setOpen(true);
    }
  }, [mails]);

  const handleMailButton = (id) => {
    const updatedMails = mails.map((mail) => {
      if (id === mail.id) {
        return {
          ...mail,
          status: mail.status === 0 ? 1 : 0,
        };
      }
      return mail;
    });
    setMails(updatedMails);
  };

  const allMailsRead = () => {
    const updatedMails = mails.map((mail) => {
      return {
        ...mail,
        status: 1,
      };
    });
    setMails(updatedMails);
    setOpen(true);
  };

  const allMailsUnRead = () => {
    const updatedMails = mails.map((mail) => {
      return {
        ...mail,
        status: 0,
      };
    });
    setMails(updatedMails);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <AppBar
        sx={ { padding: '10px' } }
      >
        <Typography
          variant="h4"
        >
          TryberMail

        </Typography>
      </AppBar>
      <Container maxWidth="md" sx={ { mt: '10%' } }>
        <Box width="100%" display="flex" justifyContent="space-evenly">
          <Button
            variant="contained"
            color="success"
            startIcon={ <DraftsIcon /> }
            sx={ {
              fontSize: {
                xs: '0.65em',
                sm: '0.7em',
                md: '0.9em',
              },

            } }
            onClick={ () => allMailsRead() }
          >
            Marcar todas como lida

          </Button>
          <Button
            variant="contained"
            color="warning"
            startIcon={ <MailIcon /> }
            sx={ {
              fontSize: {
                xs: '0.65em',
                sm: '0.7em',
                md: '0.9em',
              },

            } }
            onClick={ () => allMailsUnRead() }
          >
            Marcar todas como não lida

          </Button>
        </Box>
        <Paper sx={ { marginTop: '20px' } } elevation={ 10 }>
          <List>
            {mails.map(({ title, status, id }) => (
              <ListItemButton key={ id }>
                <ListItemAvatar>
                  <Avatar>TL</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={ title }
                  secondary="complemento do email"
                />
                <IconButton
                  onClick={ () => handleMailButton(id) }
                >
                  {status === 0 ? <MailIcon /> : <DraftsIcon />}
                </IconButton>
              </ListItemButton>
            ))}

          </List>
        </Paper>
        <Snackbar open={ open } autoHideDuration={ 3000 } onClose={ handleClose }>
          <Alert onClose={ handleClose } severity="success" sx={ { width: '100%' } }>
            Parabéns! Você leu todas suas mensagens!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default App;
