import React from "react";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from "@mui/material/CardActionArea";
import Picture from '../component/Images/Picture.png';
import './Vrm1.css'
function Vrm1() {

    return (
        <>

            <Card sx={{ width: '200px', maxwidth: '400px' }}>
                <CardActionArea>
                    <CardMedia
                        className="xyz"
                        component="img"
                        width={'100px'}
                        image={Picture}
                        verticalalign={'middle'}
                        sx={{ display: 'flex' }}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            LIFE AT TARENTO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Life at tarento is a good balance of fun & work- open work culture, team work & flat hierarchy define us. We believe in excellence & strive towards excellence in everything we do!
                        </Typography>
                       
                    </CardContent>
                </CardActionArea>
            </Card>


        </>
    )
}

export default Vrm1;