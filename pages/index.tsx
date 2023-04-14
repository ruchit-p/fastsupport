import type { NextPage } from 'next';
import Head from 'next/head';

import {Chat} from './components/chatbot';





const Home: NextPage = () => {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Head>
          <title>Fast Support</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col w-full h-full">
          <div className="flex-grow flex flex-col w-full h-full">
            <div className="w-full h-full bg-white rounded shadow-lg p-6 overflow-auto chat-container">
              <Chat />
          </div>
          </div>
          </div>
      </div>
      
    </>
  )
};

export default Home;