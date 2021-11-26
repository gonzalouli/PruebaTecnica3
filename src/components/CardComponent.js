import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardComponent({text}) {
    return (
        <Card style= {styles.card}>
            <CardContent style={styles.container}>
                <Typography gutterBottom>
                {text}
                </Typography>
            </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
        )
}

const styles = {
    container: {
        marginBottom: 4
    },
    card:{
        margin: 10
    }
}
