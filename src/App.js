import "./App.css"

function Msg({ title, poster, rating, summary, cast, directors })
{
  return (
      <div className="col-6">
      <img src={poster} class="img img-responsive img-thumbnail" alt="poster" />
      <div class="details">
        <p><b>TITLE:</b>{title}</p>
        <p><b>RATING:</b>{rating}</p>
        <p><b>CAST:</b>{cast}</p>
        <p><b>DIRECTORS:</b>{directors}</p>
        <p><b>SUMMARY:</b>{summary}</p>
      </div>
      </div>    
  )
}

export default function App() {
  const movieList = [
    {
      title: "X-Men Origins: Wolverine",
      poster: "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg", rating: "6.6/10",
      summary:"The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special forces team Weapon X, and his experimentation into the metal-lined mutant Wolverine.", 
      cast: "Hugh Jackman,Liev Schreiber,Lynn Collins",
      directors: "Gavin Hood"
    },
    {
      title: "Avengers: Infinity War",
      poster: "https://cdna.artstation.com/p/assets/images/images/018/256/764/large/george-britton-infinitywarposterv2.jpg?1558723043",
      rating: "8.4/10",
      summary: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      cast: "Robert Downey Jr,Chris Evans,Mark Ruffalo",
      directors: "Anthony Russo,Joe Russo"
    },
    {
      title: "Avatar",
      poster: "https://movieposters2.com/images/670908-b.jpg",
      rating: "7.8/10",
      summary: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      cast: "Sam Worthington,Zoe Saldana,Stephen Lang",
      directors: "James Cameron"
    },
    {
      title: "Deadpool",
      poster: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", rating: "8.0/10",
      summary: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      cast: "Ryan Reynolds,Morena Baccarin,T.J. Miller",
      directors: "Tim Miller"
    },
    {
      title: "La La Land",
      poster: "https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SL1500_.jpg",
      rating: "8.0/10",
      summary: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      cast: "Ryan Gosling,Emma Stone,Rosemarie DeWitt",
      directors: "Damien Chazelle"
    },
    {
      title: "Bãhubali: The Beginning",
      poster: "https://rukminim1.flixcart.com/image/416/416/j95y4cw0/poster/f/v/w/large-bahubali-part-2-baahubali-2-first-look-poster-bahubali-the-original-imaevknqbcgcyr99.jpeg?q=70",
      rating: "8.0/10",
      summary: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
      cast: "Prabhas,Rana Daggubati,Sathyaraj",
      directors: "S.S. Rajamouli"
    },
    {
      title: "Soorarai Pottru",
      poster: "https://www.socialnews.xyz/wp-content/uploads/2020/08/22/20200822_132614.jpg",
      rating: "9.1/10",
      summary: "Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
      cast: "Suriya,Paresh Rawal,Gaurav Pareek",
      directors: "Sudha Kongara"
    }];

    return (
    <div className="App">
      {movieList.map((ur) => <Msg poster={ur.poster} title={ur.title} rating={ur.rating} summary={ur.summary} cast={ur.cast} directors={ur.directors} />)}
    </div>
  );
}