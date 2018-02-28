import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//const baseUrl = 'http://localhost:3005';
import './Bins.css'

export default class Bins extends Component {
    constructor(){
        super()
      
    }
    componentDidMount = () =>{
        console.log(this.props.itemName)
    }
    
    
    render(){
       
        return (
                <div className='bin-link'>
                {!this.props.itemName ?(
                    <div className="add-inventory bin">
                        <span>+ Add iventory to bin </span>
                    </div>
                ):(
                    <div className="inventory-in-bin bin">
                        <span>{`Bin`}</span>
                    </div>
                )

                }

                </div>
        )
    }


}