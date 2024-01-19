import './App.css';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Mysec from './components/Mysec';

const dataList = [
  {  title: 'TextUtils',  bio: 'We can handle Text using this utils and Manuplate the text' },
  {  title: 'Music Drums', bio: 'It will generate the sounds of Music Instruments with keyboard press' },
  {  title: 'Dice Game',  bio: 'It is a 2-player game where dice decides which player will win' },
];

function App() {
  return (
    <>
    <div className="App">
      <Hero/>
      <div>
     <CardList dataList={dataList} />
   </div>
   <Resume/>
   <Mysec/>
   <Footer/>
    </div>
     
   </>
  );
}

export default App;
