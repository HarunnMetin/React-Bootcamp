function App() {
  let content = "Bu bir react egitimidir";
  function handleClick() {
    content = "Bu bir react egitimidir";
    console.log(content);
    
  }

  return (
    <div>
      <h1>Bu Bir JavaScript Egitimidir</h1>
      <button onClick={handleClick}>Degistir</button>
    </div>
  );
}

export default App;
