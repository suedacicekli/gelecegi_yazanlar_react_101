import React, { useState } from 'react';
//import User from "./components/User"
//import UserCard from './components/UserCard';
//import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
//import Use from "./components/Use";
//import Colors from './components/Colors';
//import Form2 from './components/Form';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div >

      {isVisible && <CounterTwo />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
      {/* <Use />
      <User
        //title="Kişi"
        // name="abdullah"
        // city="Ankara"
        // age={25}
        data={{
          name: "Sueda Çiçekli",
          city: "Ankara",
          age: 23,
        }}
        friends={["Sena", "Şüheda", "İrem", "Abdullah", "Suedaaa", "Said"]}
      />
      <hr></hr>
      <div className="container">
        <div className="row">
          <UserCard
            persons={[
              {
                id: 1,
                name: "Sueda",
                surname: "Çiçekli",
                explanation: "Hello! I'm Sueda. I am passionate about Web Design. I am a small Front-end Developer. I continue to learn.",
                image: "https://miro.medium.com/max/2400/1*P50HYU2xOqW2tXMPbqx1Zg.jpeg"
              },
              {
                id: 2,
                name: "Abdullah",
                surname: "Çiçekli",
                explanation: "Hello! I'm Abdullah. I am passionate about Web Design. I am a small Front-end Developer. I continue to learn.",
                image: "https://media-exp1.licdn.com/dms/image/C4D03AQFrUAMG2MJv6w/profile-displayphoto-shrink_800_800/0/1656701777590?e=2147483647&v=beta&t=4xTnscHWMZFUIWZUW8a8vu8zLc4v_uLI6R6WxyGe9C4"
              },
              {
                id: 3,
                name: "Elon",
                surname: "Musk",
                explanation: "Hello! I'm Abdullah. I am passionate about Web Design. I am a small Front-end Developer. I continue to learn.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
              }
            ]}
          />
        </div>
      </div>  */}

      {/* <Colors /> */}
      {/* <Form2 /> */}
      {/* <Use /> */}

    </div>

  );
}

export default App;

