import React from 'react';
import ListComponent from './ListComponent';
import {connect} from 'react-redux';
import CardFormComponent from './CardFormComponent';
import {DragDropContext} from 'react-beautiful-dnd'
import { sort } from '../actions'

class App extends React.Component{

   onDragEnd = result =>{
    const {destination, source, draggableId} = result

    if(!destination){
      return
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId))

  }

  render(){
    const {lists} = this.props
    // lists.forEach(item=>console.log(item))

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>

      <div className="App" style={styles.bgColor}>
        <h2>Mi Trello</h2>
        <div style={styles.container}>
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
        </div>
      </div>
      </DragDropContext>

    );
  }
}

export const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  bgColor: {
    backgroundColor: "aquamarine"
  }
}



const mapStateToProps = (state)=>({
  lists : state.lists
})
export default connect(mapStateToProps)(App);
