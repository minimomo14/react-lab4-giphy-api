import React from "react";
import axios from "axios";
import { Giphy, GiphyResponse } from "../models/Giphy";

export function fetchGiphyApiSearch(searchTerm:string): Promise<Giphy[]> {
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    return axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: apiKey
        }
    })
    .then(res => res.data.data);
}

export function fetchGiphyApiTrending(): Promise<Giphy[]> {
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    return axios.get("https://api.giphy.com/v1/gifs/trending", {
        params: { 
            api_key: apiKey
        }
    }) 
    .then(res => res.data.data);
}


