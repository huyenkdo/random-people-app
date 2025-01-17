import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import userInfos from './userInfos.json';

function App() {
  return (
    <div>
      <Header />
      <div className='container my-3'>
        <div className="row row-cols-4 gap-3 justify-content-center">
          {userInfos.map((user) => (
            <Card firstName={user.name.first} lastName={user.name.last} image={user.picture.large} city={user.location.city} state={user.location.state} country={user.location.country} tel={user.phone} age={user.dob.age} email={user.email} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
