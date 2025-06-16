import ListGroup from "./components/ListGroup";

function App() {
  let items = ["kedah", "perlis", "selangor", "putrajaya"];

  const handleSelectItem = (items: string) => {
    console.log(items);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
