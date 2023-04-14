import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from './components/navbar';
import {Chat} from './components/chatbot';
import Footer from './components/footer';
import Card from './components/card';
import About from './components/about'; 
import Contact from './components/contact';

// const cards = [
//   {
//     imageUrl: 'https://source.unsplash.com/random/800x600',
//     title: 'Card 1',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sapien vitae risus tempor, vel lacinia sapien malesuada. Praesent at sollicitudin ligula, ut hendrerit odio.',
//   },
//   {
//     imageUrl: 'https://source.unsplash.com/random/800x600',
//     title: 'Card 2',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sapien vitae risus tempor, vel lacinia sapien malesuada. Praesent at sollicitudin ligula, ut hendrerit odio.',
//   },
//   {
//     imageUrl: 'https://source.unsplash.com/random/800x600',
//     title: 'Card 3',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sapien vitae risus tempor, vel lacinia sapien malesuada. Praesent at sollicitudin ligula, ut hendrerit odio.',
//   }, {
//     imageUrl: 'https://source.unsplash.com/random/800x600',
//     title: 'Card 4',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum sapien vitae risus tempor, vel lacinia sapien malesuada. Praesent at sollicitudin ligula, ut hendrerit odio.',
//   }
// ];

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center py-4">
        <Head>
          <title>Fast Support</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
{/*         <About />  */}
{/*         <Contact /> */}
        <div className="min-h-screen flex flex-col items-center justify-center py-4" style={{ minHeight: "calc(100vh - 90px)" }}>
{/*           <div className="flex flex-row flex-wrap justify-center">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div> */}
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Home;