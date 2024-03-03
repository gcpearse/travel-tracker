const VisitedButton = ({ locations, isVisited, setIsVisited, setOnWishList, setVisitCount }) => {

  const handleClick = () => {
    setIsVisited((bool) => {
      return !bool;
    });
    setOnWishList(() => {
      return false;
    });
    setVisitCount((current) => {
      if (!isVisited) {
        if (current < locations.length) {
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
    <button
      className={!isVisited ? (
        "list-button visited-button"
      ) : (
        "list-button visited-button green-button"
      )}
      onClick={handleClick}>
      Visited
    </button>
  );
};

export default VisitedButton;
