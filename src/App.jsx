import './App.css';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Mysec from './components/Mysec';

const dataList = [
  {  title: 'TextUtils',  bio: 'We can handle Text using this utils and Manuplate the text and Edit the Text' , repo:'https://github.com/suryatenz/myapp.git', frame:'React.js'},
  {  title: 'Music Drums', bio: 'It will generate the sounds of Music Instruments with keyboard press' , repo: ' https://suryatenz.github.io/DrumsSound/' , frame:'JavaScript'},
  {  title: 'Random-Password',  bio: 'It will help you generate random password numbers and spetial symbols included', repo: 'https://github.com/suryatenz/randompass.git', frame:'React.js'},
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
