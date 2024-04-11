import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './Cover/Cover';
import coverImg from "../assets/Images/portfoglio.jpg";
import FirstPage from './FirstPage/FirstPage';
import Skills from './SecondPage/Skills';
import Services from './Services/Services';
import About from './About/About';
import Contacs from './MyContacts/Contacs';
import Thanks from './Thanks/Thanks';

function MyBook(props) {
  return (
    <HTMLFlipBook className="mx-auto" width={400} height={500} showCover={true}>
      <Page number={1}>
        <Cover coverImg={coverImg}  />
      </Page>
       
      <Page number={2}>
        <FirstPage />
      </Page>
       
      <Page number={3}>
       <Skills />
      </Page>

      <Page number={4}>
       <Services />
      </Page>

      <Page number={5}>
       <About />
      </Page>

      <Page number={6}>
       <Contacs />
      </Page>

      <Page number={7}>
       <Thanks />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
