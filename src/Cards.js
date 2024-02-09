import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import Context from './Store/Context';

const MovieCard = ({ title, genre, release_year, director, rating, image_url , submitHandler}) => {
    const {setSelectedMovie} = useContext(Context)
    const bookHandler = ()=>{
        setSelectedMovie(title)
        submitHandler();
    }
    return (
        <Card style={{ width: '18rem', margin: '10px', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{  width: '100%', overflow: 'hidden' ,height:'350px'}}>
                <Card.Img variant="top" src={image_url} style={{  width: '100%', height: '100%', top: 0, left: 0 }} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Button variant="primary" onClick={bookHandler} >Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;