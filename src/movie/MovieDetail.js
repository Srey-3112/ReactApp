import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Mid } from './SearchMovie'


export const MovieDetail = () => {

     const {I} = useContext(Mid)

    const [movieData, setmovieData] = useState('')
    useEffect(() => {
       fetchMovieDetail()
        return () => {
            
        }
    }, )

    var movieRecord = {

        id: movieData.id,
        title: movieData.title,
        year: movieData.year,
        length: movieData.length,
        rating: movieData.rating,
        poster: movieData.poster

    }

    async function fetchMovieDetail() {

    
        //contextAPI
        const res = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${I}`,
            {
                headers: {
                    
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                    'x-rapidapi-key': '17ddacc90amsh6a4ddbae066c808p1abdcdjsn17ffffdd0944'
                }
            }
        )
        console.log(res.data)
        setmovieData(res.data)
    }

    const style = {
        width: "18rem"
    }
    return (
        <div>

            

            <div class="card" style={style}>
                <img class="card-img-top" src={movieRecord.poster} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{movieRecord.title}</h5>
                    Duration<p class="card-text">{movieRecord.length}</p>
                    Ratings<p class="card-text">{movieRecord.rating}</p>

                </div>

            </div>

        </div>
    )
}