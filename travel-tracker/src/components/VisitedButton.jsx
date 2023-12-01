const VisitedButton = ({ isVisited, setIsVisited, setOnWishList, setVisitCount }) => {

  let visitedButtonStyle = "visited-button";
  if (isVisited) visitedButtonStyle = "green-button";

  const handleClick = () => {
    setIsVisited((bool) => {
      return !bool;
    });
    setOnWishList(() => {
      return false;
    });
    setVisitCount((current) => {
      if (!isVisited) {
        if (current < 10) {
          return current + 1;
        } else {
          return current;
        }
      } else {
        if (current > 0) {
          return current - 1;
        } else {
          return current;
        }
      }
    });
  };

  return (
    <button className="list-button" id={visitedButtonStyle} onClick={handleClick}>Visited</button>
  );
};

export default VisitedButton;
