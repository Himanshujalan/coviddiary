import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../../context';
import logo from '../layout/diary.png'

class Search extends Component {
    state = {
        infoCity: ''
    };
    findCity = (dispatch, e) => {
        e.preventDefault();

         axios.get(`https://coviddiary.herokuapp.com/search?city=${this.state.infoCity}`)
        .then(res => {
            dispatch({
                type: 'SEARCH_CITY',
                payload: res.data
            });
            this.setState({'infoCity': ''});
        })
        .catch(err => console.log(err));

    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="main_section card-body mb-4 shadow-sm">
                           
                            <img
                                src={logo}
                                alt="Loading..."
                                style={{ width: '179px', height:'122.89px', margin: ' 1px auto', display: 'block' }}
                            />
                                <div className="textcentre">
                            <p className="w-full mt-6 btn-block mt-2 mb-2 tagline"> Verified Crowd Sourced Active Services Directory
 </p>
                            </div>
                    <form onSubmit={this.findCity.bind(this, dispatch)}>       
                  <div className="form-group w-full md:w-3/4 px-2">
                            <input
            type="text"
className="form-control form-control-lg mt-6 w-full h-12 rounded mb-2 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg dark:bg-gray-1200 dark:placeholder-gray-500 dark:text-gray-200"
            style={{ margin: 'auto', display: 'block' }}             placeholder="Search City..."
            name="infoCity"
            value={this.state.infoCity}
            onChange={this.onChange}
            list="city_list"
          />
          <datalist  id="city_list">
             <option> Lucknow </option>
             <option> Delhi </option>
             <option> Gurugram </option>
          </datalist>
                        </div>
                        <button className="btn btn-primary w-full mt-6 btn-block mt-2 mb-2 " style={{ margin: 'auto', display: 'block' }} type="submit">
          Search
        </button>
                        </form>
                        </div>
  

                     
                    );
                }}
                </Consumer>
            </div>
        )
    }
}








export default Search;