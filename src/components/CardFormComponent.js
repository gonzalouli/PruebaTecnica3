import { Card , Button} from '@mui/material';
import React from 'react'
import { VscDiffAdded , VscTrash} from "react-icons/vsc";
import TextareaAutosize from 'react-textarea-autosize';
import {connect} from 'react-redux'
import {addList, addCard} from "../actions"

class CardFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, text: ""};
    }

    handleAddList = ()=>{
        const {dispatch} = this.props
        const {text} = this.state        
        if(text!=="" ){
            dispatch(addList(text))
        }
        this.setState({text: ""})
        return;
    }

    handleAddCard = ()=>{
        const {dispatch, idList} = this.props
        const {text} = this.state
        if(text!=="" ){
            dispatch(addCard(idList, text))
        }
        this.setState({text: ""})
        return;
    }

    openForm = ()=>{
        this.setState({open: true})
    }

    closeForm = (e)=>{
        this.setState({open: false})
    }

    addButton = (props)=>{
        const {list} = this.props

        const textOfButton = list ? "Agrega otra lista..." : "Agrega otra tarjeta..."


        return (
            <div onClick={this.openForm} style={{height:50, fontWeight: 'bolder'}}>
                <p><VscDiffAdded/>{textOfButton}</p>
            </div>
        )
    }

    handleInput = (e)=>{
        this.setState({text: e.target.value})
    
    }

    formOpened = ()=>{
        const {list} = this.props

        const textToShow = list ? "Titulo de lista" : "Texto de tarjeta"

        const buttonText = list ? "Agrega una lista..." : "Agrega una tarjeta..."

        return (
            <div>
                
                <Card style={{ minHeight: 50, minWidth: 50}}>  
                    <TextareaAutosize 
                    placeholder={textToShow} 
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInput}
                    style={{
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none",
                        overflow: "hidden"
                    }
                    }
                    />
                </Card>
                <div style={styles.buttonStyle}>
                    <Button 
                    variant="contained" onMouseDown={list ? this.handleAddList : this.handleAddCard} >
                        {buttonText}{" "}
                    </Button>
                    <VscTrash style={{backgroundColor:"red", fontSize:30, marginLeft: 10, borderRadius:4 }}/>
                </div>
            </div>
        )
    }

    render(){
        return this.state.open ? this.formOpened() : this.addButton()

    }
}

const styles ={
    buttonStyle : {
        display: "flex",
        marginTop: 5,
        alignItems: "center"
    }
}

export default connect()(CardFormComponent)