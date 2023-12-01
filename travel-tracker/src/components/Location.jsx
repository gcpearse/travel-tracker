import { useState } from "react";
import VisitedButton from "./VisitedButton";
import WishlistButton from "./WishlistButton";

const Location = ({ location, locations, setVisitCount }) => {

  let [isVisited, setIsVisited] = useState(false);
  let [onWishList, setOnWishList] = useState(false);

  return (
    <li className="country">
      <img
        className="image"
        src={location.image}
        alt="An image representing the country"
      />
      <p className="country-fact" id="country-name">{location.name}</p>
      <VisitedButton
        locations={locations}
        isVisited={isVisited}
        setIsVisited={setIsVisited}
        setOnWishList={setOnWishList}
        setVisitCount={setVisitCount}
      />
      <WishlistButton
        isVisited={isVisited}
        onWishList={onWishList}
        setIsVisited={setIsVisited}
        setOnWishList={setOnWishList}
        setVisitCount={setVisitCount}
      />
    </li>
  );
};

export default Location;
