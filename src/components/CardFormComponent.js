import { Card , Button} from '@mui/material';
import React from 'react'
import { VscDiffAdded , VscTrash} from "react-icons/vsc";
import TextareaAutosize from 'react-textarea-autosize';

class CardFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false, text: ""};
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
            <div onClick={this.openForm}>
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
                    variant="contained" 
                    style={{fontSize: 10}}>
                        {buttonText}{" "}
                    </Button>
                    <VscTrash style={{backgroundColor:"red", fontSize:30, marginLeft: 30, borderRadius:4 }}/>
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

export default CardFormComponent