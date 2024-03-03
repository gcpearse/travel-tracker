const WishlistButton = ({ isVisited, onWishList, setIsVisited, setOnWishList, setVisitCount }) => {

  const handleWishlistClick = () => {
    setOnWishList((bool) => {
      return !bool;
    });
    setIsVisited(() => {
      return false;
    });
    setVisitCount((current) => {
      if (!onWishList) {
        if (current > 0 && isVisited) {
          return current - 1;
        } else {
          return current;
        }
      } else {
        return current;
      }
    });
  };

  return (
    <button
    className={!onWishList ? (
      "list-button wishlist-button"
    ) : (
      "list-button wishlist-button green-button"
    )}
      onClick={handleWishlistClick}>
      Add to wishlist
    </button>
  );
};

export default WishlistButton;
