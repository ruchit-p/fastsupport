import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Fast Support</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-2xl font-bold text-center mb-8">About Fast Support</h1>
            <p className="text-base leading-7 mb-8">
              Fast Support is a customer support company that provides solutions for technical issues. Founded in 2021, we strive to be the go-to solution for customers who need prompt and effective assistance with their IT needs.
            </p>
            <p className="text-base leading-7 mb-8">
              At Fast Support, our team of experienced technicians is equipped to handle a wide range of technical issues, from software support to hardware repair. We pride ourselves on being able to provide fast and reliable solutions to our customers, no matter how complex the problem may be.
            </p>
            <p className="text-base leading-7 mb-8">
              Our goal is to make sure that our customers can focus on their work without being held back by technical issues. Whether you&apos;re a small business owner or an individual with a technical issue, Fast Support is here to help you get back on track.
            </p>
            <p className="text-base leading-7 mb-8">
              Contact us today to get the fast and effective IT support you need.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
