import Location from "./Location";

const Locations = ({ locations, setVisitCount }) => {
  return (
    <div>
      <ol id="locations-list">
        {locations.map((location) => {
          return <Location
            key={location.name}
            location={location}
            setVisitCount={setVisitCount}
          />;
        })}
      </ol>
    </div>
  );
};

export default Locations;
