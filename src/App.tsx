import Button from "./components/Button";

function App() {


  return (
    <div>
      <Button color="danger" onClick={() => console.log('Clicked')}>My button</Button>
    </div>
  );
}

export default App;
