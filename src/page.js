import './App.css';
import Typewriter from 'typewriter-effect';
import {useState} from 'react';
import dog from "./imgg.webp";
import logo from "./download.webp";
function Page() {
  let [text, setText] = useState("Welcome To The Tribe");
  

  return (

    <div className="warningpage">
      <div className="typewriter">
     <Typewriter
      skipAddStyles = 'false'
      wrapperClassName='typing'
      cursorClassName='typing'
    
      onInit={(typewriter) => {
        typewriter.typeString("I am a Solana guy, always Trading Nfts On Solana and DOGAMI is the only reason i am on tezos ecosystem. I literally love this Project,  Vision but more than that I really love the team and community. I just love being in this awesome community full of really good people and i honestly love spending time on Discord interacting with all. I don't know how will the game perform and i can't comment on that right now but one thing i'm sure that you all have created a really good community and all the credit goes to Alex, Andy, Dionne, all the Doga Crew and mods who are always in discord interacting with members.Thank you so much for creating this project and making me part of this, I love you all :) "

)
        .callFunction(() => {
          console.log('String typed out!');
        })
        
        .pauseFor(1000)
        .start()
        .pauseFor(100)
      }}
      />
    </div>
    <div className="image" >
    <img src = {dog} className="dog"/>
    </div>
    </div>
  );
}

export default Page;