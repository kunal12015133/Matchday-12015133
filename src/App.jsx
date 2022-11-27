// eslint-disable-next-line
import React from 'react';
import Search from './Search';
import Fixture from './Fixture';

const imageWithCrown = (
  <div display="inline">
    <img className='disBl crown' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T043522Z&X-Amz-Expires=86400&X-Amz-Signature=24ca5df4e52e527b63b6591e997bafecdc4feeb89a425fb5b588b443e22b6818&X-Amz-SignedHeaders=host&x-id=GetObject"></img>
<img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' className='flag'></img>
  </div>

);


const flagImg =(
  <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' className='flag'></img>
);

function App() {
  return (
    <div>
      <h1 className="center purple">International Matches</h1>
      <Search />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />

      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "../img/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
      <Fixture 
        MatchType="Final"
        img1={imageWithCrown}
        img2={flagImg}
        score = "12-22,36-12"
        player1= "Aman"
        player2="Raman"
        // cup = "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png"
      />
    </div>
  );
}

export default App;
