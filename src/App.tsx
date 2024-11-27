import ComponentCards from './components/ComponentCards'
import './App.css'

function App() {
  return (
    <div>
      <ComponentCards
        title={"Card title"}
        text={
          " Some quick example text to build on the card title and make up the\n" +
          "          bulk of the card's content."
        }
      >
        <img
          alt={"..."}
          src={"./src/img/image_cap.PNG"}
          className="card-img-top"
        />
      </ComponentCards>
      <ComponentCards
        title={"Special title treatment"}
        text={
          "With supporting text below as a natural lead-in to additional content."
        }
      />
    </div>
  )
}

export default App
