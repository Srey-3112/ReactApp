import axios from 'axios';
import React, { createContext, useState } from 'react'
import { MovieDetail } from './MovieDetail';

export const Mid = createContext();
export const SearchMovie = () => {


    const [movieName, setmovieName] = useState('')
    const [movieId, setmovieId] = useState(undefined)

    async function search(e) {

        e.preventDefault();
        console.log(movieName)
        const res = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`
            , {
                headers: 
                {
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                    'x-rapidapi-key': '17ddacc90amsh6a4ddbae066c808p1abdcdjsn17ffffdd0944'
                }
            }
        )
       
        console.log(res.data.titles[0].id)
        setmovieId(res.data.titles[0].id)

    }

    
    return (
        <div>
            <form onSubmit={search}>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" onChange={(e) => { setmovieName(e.target.value) }} />
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-search">Search</i>
                    </button>

                </div>
            </form>
            {
                // movieId!== undefined &&
                // <MovieDetail id={movieId} />
                <Mid.Provider value={{I:movieId}}>
                    <MovieDetail/>
                </Mid.Provider>
            }
        </div>
    )
}