import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {

  const locations = [
    {
      name: "Australia",
      capital: "Canberra",
      image: "https://images.pexels.com/photos/10992800/pexels-photo-10992800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Canada",
      capital: "Ottawa",
      image: "https://images.pexels.com/photos/3222196/pexels-photo-3222196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Cyprus",
      capital: "Nicosia",
      image: "https://images.pexels.com/photos/14310463/pexels-photo-14310463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "France",
      capital: "Paris",
      image: "https://images.pexels.com/photos/8433681/pexels-photo-8433681.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Greece",
      capital: "Athens",
      image: "https://images.pexels.com/photos/2291340/pexels-photo-2291340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Iceland",
      capital: "Reykjavik",
      image: "https://images.pexels.com/photos/12166196/pexels-photo-12166196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Italy",
      capital: "Rome",
      image: "https://images.pexels.com/photos/3728022/pexels-photo-3728022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "New Zealand",
      capital: "Wellington",
      image: "https://images.pexels.com/photos/9485548/pexels-photo-9485548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Poland",
      capital: "Warsaw",
      image: "https://images.pexels.com/photos/745499/pexels-photo-745499.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Portugal",
      capital: "Lisbon",
      image: "https://images.pexels.com/photos/10733621/pexels-photo-10733621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Russia",
      capital: "Moscow",
      image: "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Spain",
      capital: "Madrid",
      image: "https://images.pexels.com/photos/7934255/pexels-photo-7934255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sweden",
      capital: "Stockholm",
      image: "https://images.pexels.com/photos/16378758/pexels-photo-16378758/free-photo-of-an-orange-toyota-yaris-parked-on-the-side-of-the-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "United Kingdom",
      capital: "London",
      image: "https://images.pexels.com/photos/5556740/pexels-photo-5556740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "United States of America",
      capital: "Washington DC",
      image: "https://images.pexels.com/photos/8181763/pexels-photo-8181763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [visitCount, setVisitCount] = useState(0);
  return (
    <>
      <Header />
      <p className="counter">Countries visited: {visitCount}/{locations.length}</p>
      <Locations locations={locations} setVisitCount={setVisitCount} />
      <Footer />
    </>
  );
}

export default App;
