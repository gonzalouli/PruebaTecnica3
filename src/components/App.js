import React from 'react';
import ListComponent from './ListComponent';
import {connect} from 'react-redux';
import CardFormComponent from './CardFormComponent';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import { sort } from '../actions'
import styled from "styled-components"

const ListContainer = styled.div`
  display:flex;
  flex-direction: row;
  background-color: #FFC4B7;
`

class App extends React.Component{

   onDragEnd = result =>{
    const {destination, source, draggableId, type} = result

    if(!destination){
      return
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type))

  }

  render(){
    const {lists} = this.props
    // lists.forEach(item=>console.log(item))

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>

      <div className="App">
        <h2>Mi Trello</h2>
        <Droppable droppableId="all-lists" 
          direction="horizontal" 
          type="list">
            {provided => (
              <ListContainer 
              {...provided.droppableProps} 
                ref={provided.innerRef}>
                {lists.map( (list,index) => 
                    <ListComponent 
                      idList={list.id} 
                      key = {list.id} 
                      title={list.title}
                      cards={list.cards}
                      index={index}
                      />
                )}
                <CardFormComponent list/>
                {provided.placeholder}
              </ListContainer>
              )
            }
        </Droppable>
      </div>
      </DragDropContext>

    );
  }
}



const mapStateToProps = (state)=>({
  lists : state.lists
})
export default connect(mapStateToProps)(App);
