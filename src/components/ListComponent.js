import React from 'react';
import CardComponent from './CardComponent';
import CardFormComponent from './CardFormComponent';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from "styled-components"
import {connect} from 'react-redux';

const ListContainer= styled.div`
    background-color: #F3FF8C;
    border-radius: 4px;
    width: 300px;
    padding: 10px;
    height: 100%;
    margin-right: 10px;
`

function ListComponent({title, cards, idList, index}) {

    // cards.forEach(card=>console.log(card))

    return (
        <Draggable draggableId={String(idList)} index={index}>
        {provided => (
            title!="First list" &&<ListContainer  
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                
                >

                <Droppable droppableId={String(idList)}>
                    { (provided)=>(
                        
                        <div {...provided.droppableProps}
                            ref={provided.innerRef}>
                        <h4>{title}</h4>
                        {
                            cards.map((card, index) => 
                                <CardComponent 
                                    key={card.id} 
                                    text={card.text} 
                                    id={card.id}
                                    idList={idList}
                                    index={index}
                                    /> 
                                )
                        
                        }
                        {provided.placeholder}
                        <CardFormComponent idList={idList}/>
                        </div>
                        )

                    }
                    
                </Droppable>
            </ListContainer>
            )
        }
        </Draggable>
            
        
    )
}

export default connect()(ListComponent);
