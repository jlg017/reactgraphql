import gitHub from "./db";
import {useEffect} from "react";


function App() {

  useEffect(() => {
    const githubQuery = {
      query: `{
        viewer {
          avatarUrl
        }
      }`
    };

    fetch(gitHub.baseURL, {
      method: "POST",
      headers: gitHub.headers,
      body: JSON.stringify(githubQuery),
    })
    .then( response => response.json())
    .then( (data) => { console.log(data)})
    .catch((error) => console.error(error));
  })



  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i>
        Repos
      </h1>
    </div>
  );
}

export default App;
