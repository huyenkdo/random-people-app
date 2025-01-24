import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then((response) => {
        setPeople(response.results);
      })
  }, [])

  const [query, setQuery] = useState('');

  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <CardList people={people} query={query} setPeople={setPeople} />
      <Footer />
    </div>
  );
}

export default App;
