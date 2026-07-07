import scenery from './scenery.jpeg'

function App() {
  return (
    <div className="container">
      <h1>Yosemite National Park</h1>
      <img src={scenery} className="scenery-img" alt="A beautiful scenery" />
      <p className="description">
        A picture of Yosemite National Park's Half Dome, halfway through the 4 Mile Trail.
      </p>
    </div>
  )
}

export default App