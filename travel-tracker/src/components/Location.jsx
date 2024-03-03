import { useState } from "react";
import VisitedButton from "./VisitedButton";
import WishlistButton from "./WishlistButton";

const Location = ({ location, locations, setVisitCount }) => {

  const [isVisited, setIsVisited] = useState(false);
  const [onWishList, setOnWishList] = useState(false);

  return (
    <li>
      <img
        src={location.image}
        alt={`An photograph of a location in ${location.name}`}
      />
      <h3>{location.name}</h3>
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
