import React, { useEffect, useState } from "react";
import ResultsList from "./ResultsList";
import { fetchGiphyApiSearch } from "../services/GiphyApiService";
import { Giphy, GiphyResponse } from "../models/Giphy";

interface GifProp {
  gif: Giphy;
}

export default function Result({ gif }: GifProp) {
  return (
    <div className="Result">
      <div key={gif.id}>
        <h3>{gif.title}</h3>
        <img src={gif.images.original.url} alt="" />
        <a href={gif.url}>link to GIPHY</a>
      </div>
    </div>
  );
}
