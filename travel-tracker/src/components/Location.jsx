import { useState } from "react";

const Location = ({ location, setVisitCount }) => {

  let [isVisited, setIsVisited] = useState(false);
  let [onWishList, setOnWishList] = useState(false);

  let visitedButtonStyle = "visited-button";
  let wishlistButtonStyle = "wishlist-button";

  if (isVisited) visitedButtonStyle = "green-button";
  if (onWishList) wishlistButtonStyle = "green-button";

  return <li className="country">
    <img className="image" src={location.image} alt="An image representing the country" />
    <p className="country-fact" id="country-name">{location.name}</p>
    <button className="list-button" id={visitedButtonStyle} onClick={() => {
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
    }}>Visited</button>
    <button className="list-button" id={wishlistButtonStyle} onClick={() => {
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
    }}>Add to wishlist</button>
  </li>;
};

export default Location;
