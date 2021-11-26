import React from 'react';
import ListComponent from './ListComponent';
import {connect} from 'react-redux';
import CardFormComponent from './CardFormComponent';
import {DragDropContext} from 'react-beautiful-dnd'
import { sort } from '../actions'

class App extends React.Component{

    render(){
    const {lists} = this.props

    const onDragEnd =(result)=>{
      const {dest, source, draggableId} =result

      if(!dest){
        return
      }

      this.props.dispatch(sort(
        source.droppableId,
        dest.droppableId,
        source.index,
        dest.index,
        draggableId))

    }

    return (
      <DragDropContext onDragEnd={onDragEnd}>
      <div className="App" style={styles.bgColor}>
        <h2>Mi Trello</h2>
        <div style={styles.container}>
          {lists.map( list => 
            <ListComponent 
              idList={list.id} 
              key = {list.id} 
              title={list.title}
              cards={list.cards} /> )}
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
