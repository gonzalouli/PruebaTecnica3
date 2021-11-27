import { Card , Button} from '@mui/material';
import React from 'react'
import { VscDiffAdded , VscTrash} from "react-icons/vsc";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Draggable } from 'react-beautiful-dnd';
import styled from "styled-components"
import {connect} from 'react-redux'
import {deleteCard} from '../actions'


const CardContainer = styled.div`
    margin-bottom: 8px;
`

const CardComponent=React.memo(({text,id,index,idList, dispatch})=> {

    const delCard = (e)=>{
        dispatch(deleteCard(id, idList));
    }

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <CardContainer ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                    <Card >
                        <CardContent >
                            <Typography gutterBottom>
                            {text}
                            </Typography>
                            <button 
                                variant="contained" onClick={delCard} >
                                    <VscTrash style={{backgroundColor:"red", fontSize:27, marginLeft: 10, borderRadius:4 }}/>
                                </button>
                               
                        </CardContent>
                    </Card>
                {provided.placeholder}
                </CardContainer>
            )}
        </Draggable>

        )
})

export default connect()(CardComponent);
