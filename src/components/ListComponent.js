import { Card } from '@mui/material';
import React from 'react';
import CardComponent from './CardComponent';
import CardFormComponent from './CardFormComponent';

export default function ListComponent({title, cards}) {
    return (
        <div style={styles.container}>
            <h3>{title}</h3>
            {
                cards.map(card => <CardComponent key={card.id} text={card.text} /> )
            
            }
            <CardFormComponent  />
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRarius:3,
        width: 250,
        padding: 8.5,
        marginRight: 8

    }
}
