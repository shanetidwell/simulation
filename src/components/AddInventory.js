import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Item.css';
import './AddInventory.css';



export default class AddInventory extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: {},
            name: "",
            price: "",
            binNumber: "",
            // name: "",
            shelfName: ""
            // price: ""
        }
    }
    componentDidMount = () =>{
        console.log("getting item")
        axios({
            method: "GET",
            url: `http://localhost:3005/api/bin/${this.props.match.params.id}`
        }).then(response=>{
            console.log(response)
            this.setState({item: response.data[0], shelfName: response.data[0].shelf_name, binNumber: response.data[0].bin_name[1]});                     
        }).catch(e=>console.log(e))
    }


    handleChangeName=(value)=>{
        this.setState({name: value});
    }
    handleChangePrice = (value) => {
        this.setState({price: value})
    }
    addClick = () => {
        axios({
            method: "POST",
            url: `http://localhost:3005/api/bin/${this.state.item.bin_id}?desc=${this.state.name}&price=${this.state.price}`
        }).then(response=>{
            console.log('post response', response)
        }).catch(e=>console.log(e))
        
    }
    


  

    render(){
        return(
            <div>
                <div className='item-banner'>
                    <Link to={`/`} className='logo-link'>
                        <div className='logo-container'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAABKJJREFUeAHVnLtPFFEUxncNARsfnRU24INKpaKg0UILNBT8JVQkVms0hlhb+C/QGBIwGE20UwsjHY8EQ4JGLEgELYBEXb9vmQvj7MzO3Jlz7r1zkm/v7My995zz23nceew0G46s3W5fgatRaCTSEMpz0NlIKBo/I+2h/AytQivQcrPZXEepbk0tDwBwGn3fg+5At6FBqIp9QeNX0EtoEYAOqnTmrC1A3ICeQj8gLWPf9HHdWWK2jhDcGPQacm30OWYbr1p9BHMVeuGaQoq/Rcailmhex3DeB92HDqBQjLEwpr68+EWXw+FlaBkK1T4hMB7V9A2OJqDdUEnE4mKME6pE4GAG+hNzGvokY51RgYKOH4aefY/4HolCgaPZHs7qsuhxESinilRCnaL1Cnbnpdo1/HJyRx909qQuq0JKnBwnDYj/DDWFogPD0K0ZFF0YNYPiBkZNoLiFETgUPzACheIXRmBQwoARCJSwYHiGEiYMT1DChuEYSj1gOIKiCwPD8ZsmEclSaZivAgOxXurkjolB6BBSudyGfiXPkrVgjCDO79DFBj4mIVroULRhkMEkgTzgVGShQnEBgwhaBDIfwTBFaFBcwWD+8wTyzpCIlaFAcQmD6b8nkJUYiPikbyiuYTD3VQLZjlNITPuC4gMGU98mkP0EhORX11B8wWDe+wTChPPMFRSfMMjgkEB28mhEy7Wh+IbBNHcIZJNTBU0TitxNpOj8AzmZEWjB9NqbvCO3a3H+0o+6z9G7+DAfz4z9togjtyphoNJb6EJu5ZMKuwSycfK90JQalELeC1QqCYM9bxBImccdg4VSAQaBrBHIGqdKWHBQKsIggnXuVIehKqa2o7X5kZCA7Q40Lefhjk8s2UpbajHPKxTEKQFjizC4ydDeHBWlP71tPoSBqG2PJmmJdhgYIItpNSznOYciCIOpLhzni44HID4uLWFONh8EKrGZmHyZe+eBms4agkHRIejMHROqNqG+phAGQpTYTEymcxED873Bo82owSVUqqwpiI1HxW9CMZpu+LeVbsPSJVNDqBSFgpgI46tQbKabpW4S0RzUGDe1BEsRKIhHAwbTHM8EwgWoIL2W0GklKGivBSN77TCUIuca/3AoBUURBnM8Gpma5LNKVGxBGmYFBQForRnMrZWVf9d8VO6HPrKVghWCAr+aMJgbhwfFDQ2GoD1Iw3pCgUNNGMyJ/wi1NzScgv5CGpYKBY40YTCXKXsSsRboYFqDRtTnf1AwTxMGXU7HUis/iY40/x7SgeIAxmx5AiktHUDpdQcR7iuZLAzDByFx89Hap1TKOKMxY5XZTAyEZAkH3NFqHX0y8io1mzFW24Emk8/6Dkc8JGuNU0pln2jE2ModWrOSzpsPhxy8cUSrMcxHt6WMsTAmu0FXXrI2y+Gch0qNE0J0a2WModi5iU2CZesiGF468AGGPnufwpdNSqIdguOVt2eQ1DVadNVl7Js+0q90VUhE84UqvGjLF6rchW5BEi9U4a0C3iFY6LoGipkSpgYkGRx+TW7ffM8HX2nBFxXw+3noTCQUjV+R+EQCb8LzvjNvtX4AANub8mhmb/8Asov1hwQSlWQAAAAASUVORK5CYII="
                                alt="logo" className="bin-header-logo"/>
                        </div>
                    </Link>
                    <Link to={`/shelf/${this.state.item.shelf_id}`} className='shelf-link'>
                        <div className='shelf-container'>{`Shelf ${this.state.shelfName}`}
                            
                        </div>
                    </Link>
                    <div className="bin-description">
                        <span>{`Add to Bin ${this.state.binNumber}`}</span>
                    </div>
                </div>
                <div className="item-content">
                    <div className="box-title">Name</div>
                    
                    <input type="text" value={this.state.name} onChange={(e)=>this.handleChangeName(e.target.value)}></input>
                    
                    <div className="box-title">Price</div>
                    
                    <input type="text" value={this.state.price} onChange={(e)=>this.handleChangePrice(e.target.value)}></input>
                   
                    <div className="button-container">
                        
                        <Link to={`/shelf/${this.state.item.shelf_id}`}><button className="btn inventory-button" onClick={()=>this.addClick()}>+ Add to Inventory</button></Link>
                    
                    </div>
                </div>
            </div>
        )
    }
}