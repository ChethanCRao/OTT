import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [banner, setBanner] = useState([]);
  const [trending, setTrending] = useState([]);
  const [horror, setHorror] = useState([]);
  const [scific, setScific] = useState([]);

  useEffect(() => {
    axios.get('/banner')
      .then(response => {
        setBanner(response.data);
      })
      .catch(error => {
        console.error('Error fetching banner content:', error);
      });

    axios.get('/trending')
      .then(response => {
        setTrending(response.data);
      })
      .catch(error => {
        console.error('Error fetching trending content:', error);
      });

    axios.get('/horror')
      .then(response => {
        setHorror(response.data);
      })
      .catch(error => {
        console.error('Error fetching horror content:', error);
      });

    axios.get('/scific')
      .then(response => {
        setScific(response.data);
      })
      .catch(error => {
        console.error('Error fetching scific content:', error);
      });
  }, []);

  return (
    <div>
      <h1>OTT Website</h1>
      
      <h2>Banner Content:</h2>
      <ul>
        {banner.map(item => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      <h2>Trending Content:</h2>
      <ul>
        {/* Similar rendering for trending, horror, and scific */}
      </ul>
    </div>
  );
}

export default App;
