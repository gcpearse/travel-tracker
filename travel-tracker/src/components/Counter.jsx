const Counter = ({ visitCount, locations }) => {
  return (
    <p id="counter">Countries visited: {visitCount}/{locations.length}</p>
  );
};

export default Counter;
