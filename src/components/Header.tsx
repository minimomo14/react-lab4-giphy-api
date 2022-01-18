import React, { useEffect, useState } from 'react'
import { Data } from '../models/Giphy';
import fetchGiphyApi from '../services/GiphyApiService'

export default function Header() {
    const [giphys, setGiphys] = useState<Data[]>([]);

    //hook
    useEffect(() => {
        fetchGiphyApi().then((giphys) => setGiphys(giphys));
    }, [])

    return (
        <div className='Header'>
            <h1>GIF APP</h1>
            <label>Search for a GIF</label>
            <input type="submit">Search</input>
            <br></br>
            <h2>Results</h2> 
            <ul>
                {giphys.map((giphy,i)=>
                <li key={i}>
                    <h2>{giphy.type} - {giphy.title}</h2>
                    <img src={giphy.url} alt="" />
                </li>
                )}
            </ul>
            
        </div>
    );
    
}
//console.log(Header);