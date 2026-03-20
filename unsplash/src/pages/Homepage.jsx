import Herosection from "../components/Herosection";
import NavBar from "../Layout/NavBar";
import Sidebar from "../Layout/Sidebar";


const HomePage = () => {
  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-16 h-screen border-r border-r-gray-300">
          <Sidebar />
        </div>

        <div className="w-full h-screen py-2">
          <NavBar />

          <section className="w-[60%] flex items-center justify-center mt-12 mx-auto">
            <Herosection/>
          </section>
        </div>
      </section>
    </>
  );
};

export default HomePage;
