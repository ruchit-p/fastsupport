import { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Fast Support</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center py-4">
        <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <form
            className="flex flex-col w-full lg:w-1/2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Handle form submission
            }}
          >
            <label htmlFor="name" className="font-medium text-lg">
              Name
            </label>
            <input
              id="name"
              className="py-2 px-4 border border-gray-300 rounded-lg"
              type="text"
              name="name"
              required
            />
            <label htmlFor="email" className="font-medium text-lg">
              Email
            </label>
            <input
              id="email"
              className="py-2 px-4 border border-gray-300 rounded-lg"
              type="email"
              name="email"
              required
            />
            <label htmlFor="message" className="font-medium text-lg">
              Message
            </label>
            <textarea
              id="message"
              className="py-2 px-4 border border-gray-300 rounded-lg h-36"
              name="message"
              required
            />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;