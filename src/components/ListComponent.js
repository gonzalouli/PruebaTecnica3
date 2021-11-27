import React from 'react';
import CardComponent from './CardComponent';
import CardFormComponent from './CardFormComponent';
import { Droppable } from 'react-beautiful-dnd';

export default function ListComponent({title, cards, idList}) {
    console.log(title)


    return (
        title!=="First list" &&
         <Droppable droppableId={String(idList)}>
            { (provided)=>
            <div  
                    {...provided.droppableProps}
                    ref={provided.innerRef} 
                style={styles.container}>
                <h4>{title}</h4>
                {
                    cards.map((card, index) => 
                        <CardComponent 
                            key={card.id} 
                            text={card.text} 
                            id={card.id}
                            index={index}
                            /> 
                        )
                
                }
                <CardFormComponent idList={idList}/>
                {provided.placeholder}
            </div>}
            
            
         </Droppable>
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
