import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/matches/')
      .then(response => setMatches(response.data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>Cricket Matches</h1>
      <ul>
        {matches.map(match => (
          <li key={match.id}>{match.team1} vs {match.team2}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
