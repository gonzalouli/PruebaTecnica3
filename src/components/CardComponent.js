import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Draggable } from 'react-beautiful-dnd';

export default function CardComponent({text,id,index}) {
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                    <Card style= {styles.card}>
                        <CardContent style={styles.container}>
                            <Typography gutterBottom>
                            {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>

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
