import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Shelf.css';
import Bin from './Bins';


export default class Shelf extends Component {
    constructor(props){
        super(props)
        this.state = {
            bins: [],
            shelfName:""
        }
    }

    componentDidMount = () =>{
        console.log("getting bins")
        axios({
            method: "GET",
            url: `http://localhost:3005/api/bins/${this.props.match.params.id}`
        }).then(response=>{
            response.data.sort((a,b)=>{
                var nameA = a.bin_name.toUpperCase();
                var nameB = b.bin_name.toUpperCase();
                if(nameA < nameB){
                    return -1;
                }
                if(nameA>nameB){
                    return 1;
                }
                return 0;
            })
            console.log(response.data)
            this.setState({bins: response.data, shelfName: response.data[0].shelf_name})
            console.log(this.state.bins[0].shelf_name)
        }).catch(e=>console.log(e))
    }


  

    render(){
        const bins = this.state.bins.map((bin, i)=>{
            console.log(bin.shelf_id)
            return(
                <div key={i}>{bin.item_name?(
                        <Link to={{
                            pathname: `/bin/${bin.bin_id}`,
                            state: { shelfName: this.state.shelfName }
                        }} key={i}>
                    {/* <Link to={`/bin/${bin.bin_id}`} key={i}> */}
                        <Bin shelf_id={bin.shelf_id} itemName={bin.item_name} itemPrice={bin.item_price} shelfName={this.state.shelfName} bin_name={bin.bin_name}>{`${bin.bin_id}`}</Bin>
                    </Link>):(
                        <Link to={{
                            pathname: `/create/${bin.bin_id}`,
                            state: { shelfName: this.state.shelfName }
                        }} key={i}>                    
                        <Bin shelf_id={bin.shelf_id} itemName={bin.item_name} itemPrice={bin.item_price} shelfName={this.state.shelfName} bin_name={bin.bin_name}>{`${bin.bin_id}`}</Bin>
                    </Link>
                    )}
                </div>)
        })
        return(
            <div>
                <div className='shelf-banner'>
                    <Link to={`/`} className='logo-link'>
                        <div className='logo-container'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAABKJJREFUeAHVnLtPFFEUxncNARsfnRU24INKpaKg0UILNBT8JVQkVms0hlhb+C/QGBIwGE20UwsjHY8EQ4JGLEgELYBEXb9vmQvj7MzO3Jlz7r1zkm/v7My995zz23nceew0G46s3W5fgatRaCTSEMpz0NlIKBo/I+2h/AytQivQcrPZXEepbk0tDwBwGn3fg+5At6FBqIp9QeNX0EtoEYAOqnTmrC1A3ICeQj8gLWPf9HHdWWK2jhDcGPQacm30OWYbr1p9BHMVeuGaQoq/Rcailmhex3DeB92HDqBQjLEwpr68+EWXw+FlaBkK1T4hMB7V9A2OJqDdUEnE4mKME6pE4GAG+hNzGvokY51RgYKOH4aefY/4HolCgaPZHs7qsuhxESinilRCnaL1Cnbnpdo1/HJyRx909qQuq0JKnBwnDYj/DDWFogPD0K0ZFF0YNYPiBkZNoLiFETgUPzACheIXRmBQwoARCJSwYHiGEiYMT1DChuEYSj1gOIKiCwPD8ZsmEclSaZivAgOxXurkjolB6BBSudyGfiXPkrVgjCDO79DFBj4mIVroULRhkMEkgTzgVGShQnEBgwhaBDIfwTBFaFBcwWD+8wTyzpCIlaFAcQmD6b8nkJUYiPikbyiuYTD3VQLZjlNITPuC4gMGU98mkP0EhORX11B8wWDe+wTChPPMFRSfMMjgkEB28mhEy7Wh+IbBNHcIZJNTBU0TitxNpOj8AzmZEWjB9NqbvCO3a3H+0o+6z9G7+DAfz4z9togjtyphoNJb6EJu5ZMKuwSycfK90JQalELeC1QqCYM9bxBImccdg4VSAQaBrBHIGqdKWHBQKsIggnXuVIehKqa2o7X5kZCA7Q40Lefhjk8s2UpbajHPKxTEKQFjizC4ydDeHBWlP71tPoSBqG2PJmmJdhgYIItpNSznOYciCIOpLhzni44HID4uLWFONh8EKrGZmHyZe+eBms4agkHRIejMHROqNqG+phAGQpTYTEymcxED873Bo82owSVUqqwpiI1HxW9CMZpu+LeVbsPSJVNDqBSFgpgI46tQbKabpW4S0RzUGDe1BEsRKIhHAwbTHM8EwgWoIL2W0GklKGivBSN77TCUIuca/3AoBUURBnM8Gpma5LNKVGxBGmYFBQForRnMrZWVf9d8VO6HPrKVghWCAr+aMJgbhwfFDQ2GoD1Iw3pCgUNNGMyJ/wi1NzScgv5CGpYKBY40YTCXKXsSsRboYFqDRtTnf1AwTxMGXU7HUis/iY40/x7SgeIAxmx5AiktHUDpdQcR7iuZLAzDByFx89Hap1TKOKMxY5XZTAyEZAkH3NFqHX0y8io1mzFW24Emk8/6Dkc8JGuNU0pln2jE2ModWrOSzpsPhxy8cUSrMcxHt6WMsTAmu0FXXrI2y+Gch0qNE0J0a2WModi5iU2CZesiGF468AGGPnufwpdNSqIdguOVt2eQ1DVadNVl7Js+0q90VUhE84UqvGjLF6rchW5BEi9U4a0C3iFY6LoGipkSpgYkGRx+TW7ffM8HX2nBFxXw+3noTCQUjV+R+EQCb8LzvjNvtX4AANub8mhmb/8Asov1hwQSlWQAAAAASUVORK5CYII="
                                alt="logo" className="shelves-header-logo"/>
                        </div>
                    </Link>
                    <div className="shelf-title">
                        <span>{`Shelf ${this.state.shelfName}`}</span>
                    </div>
                </div>
                <div className="bin-container">
                    {bins}
                </div>
            </div>
        )
    }
}
