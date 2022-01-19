import React from 'react'
import { Giphy } from '../models/Giphy'
import Result from './Result'

interface Props {
    gifs: Giphy[];
}

export default function ResultsList({gifs}: Props) {
    return (
        <div>
            <h2>Results</h2>
            {gifs.map((gif,i) => <Result key={i} gif={gif} />)}
        </div>
    )
}
