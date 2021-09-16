import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post.js';

function App() {
  const[posts, setPosts] = useState([
    {
      username: "steph_younes" ,
      caption: "coffee shop outfit 💛" ,
      imageUrl: "https://i.pinimg.com/originals/6f/56/3e/6f563ee537232e5d30eae8d43b4dee1b.jpg"
    },

    {
      username: "b3nb4ggs" ,
      caption: "new winter jacket" ,
      imageUrl: "https://image.geartrade.com/userimages/N/9/N9fP7pLuUr0Wmm90ckSL6kFg3vhamzSBDMTQFWxA.jpg"
    },
    {
      username: "tiffanys.typing" ,
      caption: "streetwear" ,
      imageUrl: "https://8outfits.com/previews/0/38/389/3898/389802.jpg"
    },
    {
      username: "steph_younes" ,
      caption: "day outfit!" ,
      imageUrl: "https://i.pinimg.com/736x/ca/bc/97/cabc9711a594f45d336ef65ec648f2e8--dope-fashion-asian-fashion.jpg"
    },
    {
      username: "tiffanys.typing" ,
      caption: "first day of college" ,
      imageUrl: "https://i.pinimg.com/originals/89/4d/df/894ddf5dd46ea59f540c7ffa29681341.jpg"
    },
    {
      username: "b3nb4ggs" ,
      caption: "at an art museum" ,
      imageUrl: "https://i.pinimg.com/originals/60/88/f3/6088f39df63a4a30da579ee89da1ccc7.jpg"
    },
    /** */
    {
      username: "steph_younes" ,
      caption: "a lil different today" ,
      imageUrl: "https://i.pinimg.com/originals/69/3a/af/693aaf5cb71c152c88c1c665e6bbcb17.jpg"
    },

    {
      username: "b3nb4ggs" ,
      caption: "time to explore new outfits" ,
      imageUrl: "https://i.pinimg.com/564x/58/84/d6/5884d64ff6513ba10a8d470c366d9995.jpg"
    },
    {
      username: "tiffanys.typing" ,
      caption: "getting a little chilly" ,
      imageUrl: "https://i.pinimg.com/564x/99/74/b6/9974b6d0ec480f6ad5f2fb6d3c49adf7.jpg"
    },
    {
      username: "steph_younes" ,
      caption: "love tote bags" ,
      imageUrl: "https://i.pinimg.com/564x/1e/58/0c/1e580c67f2ff032095260b28994740e7.jpg"
    },
    {
      username: "tiffanys.typing" ,
      caption: "matching" ,
      imageUrl: "https://i.pinimg.com/originals/75/8c/6c/758c6cf452df7e0324b0aeba9c78ebd4.jpg"
    },
    {
      username: "b3nb4ggs" ,
      caption: "shopping spree" ,
      imageUrl: "https://i.pinimg.com/originals/60/d6/e0/60d6e03881d51b8629e6c907f363d8b8.png"
    }

  ]);

  return (
    <div className="App">
      
      <div className="app__header">
         <img className="app__headerImage" src="Fashagram_Logo.png" alt="Fashagram Logo" />
      </div>
      

      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
