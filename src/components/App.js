import React from 'react';
import ListComponent from './ListComponent';
import {connect} from 'react-redux';
import CardFormComponent from './CardFormComponent';

function App(props) {

  const {lists} = props

  return (
    <div className="App" style={styles.bgColor}>
      <h2>Mi Trello</h2>
      <div style={styles.container}>
        {lists.map( list => <ListComponent idList={list.id} key = {list.id} title={list.title}
        cards={list.cards} /> )}
        <CardFormComponent list/>
      </div>
    </div>
  );
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
