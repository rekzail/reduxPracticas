import React from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../../api/characters';
import { ICharacter } from '../../pages/character/character.interface';
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';

export const CharacterPages: React.FC = () => {

    const {id} = useParams();

    const [loading,setLoading] = React.useState<boolean>(true);
    const [character,setCharacter] = React.useState<ICharacter | null>(null);


    React.useEffect(()=>{
        characters
        .getById({id})
        .then((res)=>{
            
            setCharacter(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

  return (
    <Box sx={{maxWidth:"100%"}}>
      <Container maxWidth="xl">
         {
          loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress />
            </Box>
          ) :

          <Grid sx={{mt:2 }} container columnSpacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4" color="white">{character?.name}</Typography>
            <Divider/>
            <Typography variant="h6" color="white">{character?.species}</Typography>
            <Box>
              <Chip label={character?.status} color='primary' variant='outlined'></Chip>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img src={character?.image} style={{width:"100%",borderRadius:"0.5em"}}/>
          </Grid>
        </Grid>
         }
      </Container>
    </Box>
  )
}
