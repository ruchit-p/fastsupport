const Footer = () => {
  return (
    <footer className="w-full bg-white border-t shadow">
      <div className="container mx-auto flex py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-2 md:px-8 py-8">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4 text-gray-600 text-sm">
                Fast Support is a customer support company that provides solutions for technical issues.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
            <div className="px-2 md:w-1/2 lg:w-auto">
              <h3 className="font-bold text-gray-900">Support</h3>
              <ul className="py-4 text-gray-600 text-sm">
                <li className="hover:text-gray-800"><a href="#">FAQs</a></li>
                <li className="hover:text-gray-800"><a href="#">Contact us</a></li>
                <li className="hover:text-gray-800"><a href="#">Help center</a></li>
              </ul>
            </div>
            <div className="px-2 md:w-1/2 lg:w-auto">
              <h3 className="font-bold text-gray-900">Legal</h3>
              <ul className="py-4 text-gray-600 text-sm">
                <li className="hover:text-gray-800"><a href="#">Privacy Policy</a></li>
                <li className="hover:text-gray-800"><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;