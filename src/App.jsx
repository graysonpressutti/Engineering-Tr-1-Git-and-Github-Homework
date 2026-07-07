import scenery from './scenery.jpeg'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Yosemite National Park</h1>
        <img src={scenery} className="scenery-img" alt="A beautiful scenery" />
        <p className="description">"A picture of Yosemite National Park's Half Dome, halfway through the 4 Mile Trail."</p>
      </div>
    </>
  )
}

export default App