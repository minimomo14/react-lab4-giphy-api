import React, { FormEvent, useState } from 'react'
import { Giphy } from "../models/Giphy"

interface Props {
    onSubmit: (gifs:string) => void;

}

export default function SearchForm({onSubmit}: Props) {
    const [search, setSearch] = useState("")

    function handleOnSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(search);
    }

    return (
        <div className='SearchForm' onSubmit={handleOnSubmit}>
            <form action="" className='inputForm'>
            <label>Search for a GIF</label>
            <br></br>
            
            <input 
            type="text"
            name='search'
            placeholder='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
            <button type="submit">Search</button>
            <br></br>

            {/*<ul>
                {giphys.map((giphy,i)=>
                <li key={i}>
                    <h2>{giphy.type} - {giphy.title}</h2>
                    <img src={giphy.images.original.url} alt="" />
                    <a href={'http://giphy.com' + giphy.url}>link</a>
                </li>
                )}
            </ul> */}
            
            </form>
        </div>
    )
}
