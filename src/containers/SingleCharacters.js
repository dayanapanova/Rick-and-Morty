import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCharacter } from '../store/CharacterSlice';
import TabComponent from '../components/TabComponent';


const SingleCharacter = () => {
    const params = useParams();
    const characterID = params?.id;
    const dispatch = useDispatch();
    const { characters: { singleCharacter } } = useSelector((state) => state);

    useEffect(() => {
        if (characterID) {
            dispatch(getSingleCharacter(characterID));
        }
    }, [characterID]);

    return (
        <Container>
            <Grid container spacing={2}>
                <TabComponent
                    name={singleCharacter?.name}
                    gender={singleCharacter?.gender}
                    species={singleCharacter?.species}
                    status={singleCharacter?.status}
                />
            </Grid>
        </Container>
    )
}

export default SingleCharacter;
