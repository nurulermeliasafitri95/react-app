import ListGroup from "./components/ListGroup";

function App() {
  let items = ["kedah", "perlis", "selangor", "putrajaya"];

  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;