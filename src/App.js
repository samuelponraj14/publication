import React from 'react';
import './App.css';
import Nav from "./Nav";
import Home from './Home';
import About from './About';
import Publications from './Publications';
import Contact from './Contact';
import tt_pub_logo from './assets/tt-pub-logo.jpg'
import ut_pub_logo from './assets/ut-pub-logo.jpg'
import kk_pub_logo from './assets/kk-pub-logo.jpg'

function App() {

  const data = [
    {
      id: "1",
      key: "1",
      title: "Tamil Times",
      img: tt_pub_logo
    },
    {
      id: "2",
      key: "2",
      title: "Ungal Thozhan",
      img: ut_pub_logo
    },
    {
      id: "3",
      key: "3",
      title: "King of Kings",
      img: kk_pub_logo
    },
  ]

  const pdfs = {
    jan: './monthly-issues/jan.pdf',
    feb: './monthly-issues/feb.pdf',
    mar: './monthly-issues/mar.pdf',
    apr: './monthly-issues/apr.pdf',
    may: './monthly-issues/may.pdf',
    jun: './monthly-issues/jun.pdf',
    jul: './monthly-issues/jul.pdf',
    aug: './monthly-issues/aug.pdf',
    sep: './monthly-issues/sep.pdf',
    oct: './monthly-issues/oct.pdf',
    nov: './monthly-issues/nov.pdf',
    dec: './monthly-issues/dec.pdf',
  }

  const tariffs = {
    tt: './tariffs/tamiltimes_tariff.jpg',
  }


  return (
      <div>
        <Nav/>
        <Home />
        <Publications 
          data={data}
          pdfs={pdfs}
          tariffs={tariffs}
          />
        <About />
        <Contact />
      </div>
  );
}

export default App;
