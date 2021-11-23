import React from 'react';
import ListComponent from './ListComponent';
import {connect} from 'react-redux';

function App(props) {

  const {lists} = props

  return (
    <div className="App">
      <h2>Mi Trello</h2>
      <div style={styles.container}>
      {lists.map( list => <ListComponent title={list.title}
      cards={list.cards} /> )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  }
}



const mapStateToProps = (state)=>({
  lists : state.lists
})
export default connect(mapStateToProps)(App);
