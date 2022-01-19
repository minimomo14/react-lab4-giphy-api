import React, { useEffect, useState } from 'react'
import { Giphy } from '../models/Giphy'
import Results from './Result';
import ResultsList from './ResultsList';
import SearchForm from './SearchForm'
import { fetchGiphyApiTrending } from '../services/GiphyApiService';
import { fetchGiphyApiSearch } from '../services/GiphyApiService';




export default function Main() {
    const [ gifs, setGifs] = useState<Giphy[]>([]);
    const [ searchTerm, setSearchTerm ] = useState<string>("")

    //GIFs and search term
    //hook
     useEffect(() => { 
         if ( searchTerm === "") {
           fetchGiphyApiTrending().then((data) => setGifs(data))
            } else {
                fetchGiphyApiSearch(searchTerm).then((data) => setGifs(data))
            }
        }, [searchTerm]);      

        function handleOnSubmit(gifs:string) {
            setSearchTerm(gifs);
        }

    return (
        <div>
            <SearchForm onSubmit={handleOnSubmit}/>
            <ResultsList gifs={gifs}/>              
        </div>
    )
}


