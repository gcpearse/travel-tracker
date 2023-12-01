const WishlistButton = ({ isVisited, onWishList, setIsVisited, setOnWishList, setVisitCount }) => {

  let wishlistButtonStyle = "wishlist-button";
  if (onWishList) wishlistButtonStyle = "green-button";

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
    <button className="list-button" id={wishlistButtonStyle} onClick={handleWishlistClick}>Add to wishlist</button>
  );
};

export default WishlistButton;
