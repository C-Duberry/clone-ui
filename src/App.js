/*Compulsory Task 49 

This app is a clone homepage of the supermarket Sainsbury’s homepage. 
Having looked at their page, I have taken a similar approach. There is a header
a footer and a div for app links, but the main page is split into four sections.
The four sections correspond with the four headings on the original webpage. 

As the main page is made up of small, medium and large image cards, I have made
a component for different-sized card, which is then returned within the different 
section components.*/

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import AppBox from './components/AppBox';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="pageContainer">
          <section className="sectionOne">
            <SectionOne />
          </section>
          <section>
            <SectionTwo />
          </section>
          <section>
            <SectionThree />
          </section>
          <section>
            <SectionFour />
          </section>
        </div>
        <AppBox />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


