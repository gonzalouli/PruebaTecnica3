import { Card } from '@mui/material';
import React from 'react';
import CardComponent from './CardComponent';
 

export default function ListComponent({title, cards}) {
    return (
        <div style={styles.container}>
            <h3>{title}</h3>
            {cards.map(card => <CardComponent text={card.text} />)}
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRarius:3,
        width: 250,
        padding: 8
    }
}
