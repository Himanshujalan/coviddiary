import React, { Component } from 'react'
import {Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Infor from '../info/Infor'

 class Info extends Component {
    render() {
        return (
           <Consumer>
               {value => {
                   const {info_list, heading} = value;

                   if (info_list === undefined || info_list.length === 0) {
                        return <Spinner />
                   } else {
                       
                        return (
                            <React.Fragment>
                                <p className="text-right mb-4">{heading}</p>
                            <div className="row">
                                {info_list.map(item =>(
                                    <Infor key={item._id} info={item} />
                                ) )}
                            </div>
                            </React.Fragment>
                        );
                   }
               }}
           </Consumer>
        )
    }
}

export default Info;