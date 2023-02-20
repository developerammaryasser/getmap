import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { Footer } from 'flowbite-react'
import { IoLogoDribbble, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5'
import logo from './assets/images/logo.png'
function App() {
  const links = [
    {
        to: '/',
        text: "Home",
    },
    {
        to: '/feature',
        text: "Feature",
    },
    {
        to: '/about',
        text: "About",
    },
    {
        to: '/contact',
        text: "Contact",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar logo={logo} links={links}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer container={false}>
        <div className="container py-8">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand
                  href="/"
                  src={logo}
                  alt="Logo"
                  name=""
                />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="/contact">
                      Contact Us
                    </Footer.Link>
                    <Footer.Link href="/about">
                      About Us
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                      Github
                    </Footer.Link>
                    <Footer.Link href="#">
                      Discord
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                      Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                      Terms & Conditions
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                href="#"
                by="Flowbite™"
                year={2022}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="#"
                  icon={IoLogoTwitter}
                />
                <Footer.Icon
                  href="#"
                  icon={IoLogoDribbble}
                />
                <Footer.Icon
                  href="#"
                  icon={IoLogoFacebook}
                />
              </div>
            </div>
          </div>
        </div>
        </Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
