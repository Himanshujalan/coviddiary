import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_CITY':
        return {
            ...state,
            info_list: action.payload,
            heading: 'City Wise Details'
        };
        default:
            return state;
    }
}

export class Provider extends Component {
state = {
    info_list: [], 
    dispatch: action => this.setState(state => reducer(state, action))
};


    componentDidMount() {

        axios.get(`https://coviddiary.herokuapp.com/oxygenapi`)
        .then(res => {
            // console.log(res.data);
            this.setState({info_list: res.data})
        })
        .catch(err => console.log(err));

    }

    render() {
        return (
         <Context.Provider value={this.state}>   
             {this.props.children}
        </Context.Provider>  
        )
    }
}


export const Consumer = Context.Consumer;