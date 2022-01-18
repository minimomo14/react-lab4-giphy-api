import React from "react";
import axios from "axios";
import { Data } from "../models/Giphy";

export default function fetchGiphyApi(): Promise<Data[]> {
    return axios.get("api.giphy.com/v1/gifs/search", {
        params: {
            q: "happy", 
            api_key: "KEINUJm29ovdsw8hMexRe3EVfybWzF7o"
        }
    })
    .then(res => res.data);
}

//https://api.giphy.com/v1/gifs/search?api_key=KEINUJm29ovdsw8hMexRe3EVfybWzF7o&q=happy&limit=25&offset=0&rating=g&lang=en