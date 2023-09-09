import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("You have clicked the first button");
  }

  const handleClick2 = () => {
    alert("You have clicked the second button");
  };

  const AddToFive = (nums) => {
   alert(nums + 5);
  };

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button
        onClick={() => {
          alert("You have clicked the third button");
        }}
      >
        Third
      </button>
      {/* Confusing part : You have to pay serious attention here */}
      <button onClick={() => AddToFive(3)}>Button 4</button>
    </>
  );
}

export default App;
