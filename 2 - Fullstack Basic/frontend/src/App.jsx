import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   // const res = await fetch("http://localhost:3000/jokes");
    //   // const data = await res.json();
    //   // console.log(data);
    // };
    // fetchData();
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log("failed to fetch data: ", err);
      });
  }, []);

  return (
    <>
      <h1>My First full stack app</h1>
      <img src='./image.png' width={'200px'}/>
      <p>We used proxy in this for solving CORS error. Proxy prepend the baseURL added in the request automatically in every request with /api in our case and solve CORS error as well as it says our backend that the request is coming from the declared url.</p>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
