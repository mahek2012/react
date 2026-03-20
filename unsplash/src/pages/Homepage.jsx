import HeroSection from "../components/Herosection";
import NavBar from "../Layout/NavBar";
import SideBar from "../Layout/SideBar";


const HomePage = () => {
  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-16 h-screen border-r border-r-gray-300">
          <SideBar />
        </div>

        <div className="w-full h-screen  py-3">
          <NavBar />
          <section className="px-10 flex items-center justify-center mt-12 mx-auto">
         <HeroSection/>
         </section>
        </div>
      </section>
    </>
  );
};

export default HomePage;
