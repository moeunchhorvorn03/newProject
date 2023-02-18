import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import Streaming from './components/Streaming';

//import { v4 as uuidv4 } from 'uuid';
//import Footer from './components/Footer';


export default function App() {
    
    const [streaminglist] = useState([
    {
        id: 1,
        img: "avatar2.jpg",
        title: "Avatar: The Way of Water",
        story: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na&apos;vi race to protect their home.",
        flag: 1,
        eng: 1,
        watch: 1,
    },
    {
        id: 2,
        img: "mortal-kombat.jpg",
        title: "Mortal Kombat",
        story: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
    },
    {
        id: 3,
        img: "moana.jpg",
        title: "Moana",
        story: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana&apos;s island, she answers the Ocean&apos;s call to seek out the Demigod to set things right.",
    },
    {
        id: 4,
        img: "monster-hunter.jpg",
        title: "Monster Hunter",
        story: "When Cpt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.",
    },
])
    const [movieList] = useState([
    {
        id: 1,
        poster: "https://static.bunnycdn.ru/i/cache/images/c/cb/cb9c436599b67cbc81fbc78d7bc8a087.jpg-w180",
        rating: "6.60",
        title: "Anne Rice's Mayfair Witches",
        ss: "SS 1",
        eps: "EP 3",
    },
    {
        id: 2,
        poster: "https://static.bunnycdn.ru/i/cache/images/f/f6/f63c12bcc7f1d242b9a100f910abd9f8.jpg-w180",
        rating: "7.50",
        title: "BMF",
        ss: "SS 2",
        eps: "EP 3",
    },
    {
        id: 3,
        poster: "https://static.bunnycdn.ru/i/cache/images/0/09/0902e5667fcd99ef49d814da5178cc59.jpg-w180",
        rating: "1.30",
        title: "Velma",
        ss: "SS 1",
        eps: "EP 4",
    },
    {
        id: 4,
        poster: "https://static.bunnycdn.ru/i/cache/images/2/2a/2a9b75184dad9c4ca5f64aa2c9cc9961.jpg-w180",
        rating: "8.00",
        title: "New Amsterdam",
        ss: "SS 5",
        eps: "EP 12",
    },
    {
        id: 5,
        poster: "https://static.bunnycdn.ru/i/cache/images/6/6f/6f930d94934dee2d18bacc38497c52c7.jpg-w180",
        rating: "9.40",
        title: "The Last of Us",
        ss: "SS 1",
        eps: "EP 2",
    },
    {
        id: 6,
        poster: "https://static.bunnycdn.ru/i/cache/images/5/5c/5c9a26ae2e4618d7598f304884ffea92.jpg-w180",
        rating: "7.20",
        title: "Vikings: Valhalla",
        ss: "SS 2",
        eps: "EP 8",
    },
    {
        id: 7,
        poster: "https://static.bunnycdn.ru/i/cache/images/3/35/3588e31759b08441bdb9ab87a143233e.jpg-w180",
        rating: "8.20",
        title: "Tulsa King",
        ss: "SS 1",
        eps: "EP 9",
    },
    {
        id: 8,
        poster: "https://static.bunnycdn.ru/i/cache/images/d/de/de60abc3ebc1626aac4beb67a87eeb48.jpg-w180",
        rating: "8.20",
        title: "Wednesday",
        ss: "SS 1",
        eps: "EP 8",
    },
    {
        id: 9,
        poster: "https://static.bunnycdn.ru/i/cache/images/c/c7/c7b1c91a78880ab04441f69c6aed76b4.jpg-w180",
        rating: "7.50",
        title: "Ginny & Georgia",
        ss: "SS 2",
        eps: "EP 10",
    },
    {
        id: 10,
        poster: "https://static.bunnycdn.ru/i/cache/images/b/b0/b0706586ca43ec49da490cb94d8e1661.jpg-w180",
        rating: "7.60",
        title: "Young Sheldon",
        ss: "SS 6",
        eps: "EP 10",
    },
    {
        id: 11,
        poster: "https://static.bunnycdn.ru/i/cache/images/f/fc/fce60b6ca3683c9de0481b2e6bdd3d50.jpg-w180",
        rating: "7.20",
        title: "Hunters",
        ss: "SS 2",
        eps: "EP 8",
    },
    {
        id: 12,
        poster: "https://static.bunnycdn.ru/i/cache/images/9/92/92c624b16042ac3f4e9c53bec3a402f4.jpg-w180",
        rating: "8.60",
        title: "1923",
        ss: "SS 1",
        eps: "EP 4",
    },

])
    
return (
    <div className="App">
      <div className="rectangle-left"></div>
      <Navbar />
      <section className="streaming">
         {streaminglist.map((item) =>{
            return (
                <Streaming
                    key={item.id}
                    img ={item.img}
                    title={item.title}
                    story={item.story}
                    flag={item.flag}
                    eng={item.eng}
                    watch={item.watch}
            />
            );
            })}
      </section>
      <div className="movies-bar" >
            <h1 className="TV-Show">TV Show</h1>
            <i className="slash">/</i>
            <h1 className="movies">Movies</h1>      
        </div>
      <section className="moviesList">
        {movieList.map((item) =>{
            return (
                <Movie
                    key={item.id}
                    poster={item.poster}
                    title={item.title}
                    rating={item.rating}
                    ss={item.ss}
                    eps={item.eps}
                />
            );
        })}
      </section>
    </div>
  )
}

