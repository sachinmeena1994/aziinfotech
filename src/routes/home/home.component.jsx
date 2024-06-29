import { Outlet } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import Directory from "../../components/directory/directory.component";
import Navigation from "../navigation/navigation.component";
import transition from "../../transition";
import { Link } from "react-router-dom";
import ImagesAnim from "./ImagesAnim.jsx"

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div>
      <Navigation></Navigation>
      <div className="hero-main-section mt-10 md:mt-0 flex flex-col md:flex-row w-full p-5 md:h-[87.7vh] justify-center items-center">
        <div className="text-search-left-div md:mb-0 mb-16 md:w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-[50px] tracking-tight font-semibold text-[#3069B3] text-center">No.1 Tally TDL Shop</h1>
          <h1 className="text-[14px] mb-10 font-semibold text-zinc-500 text-center">Lifetime Validity | Free Updates | Free Support</h1>
          <div className="w-[80%] mb-10 flex justify-between items-center bg-zinc-100 rounded-lg border border-zinc-200 p-2">
            <input
              className="w-full lg:w-90 outline-none border-none bg-zinc-100 py-2 px-4 text-md text-gray-700"
              type="text"
              placeholder="Search anything..."
            />
            <button className="flex-shrink-0 p-2 text-gray-700">
              <IoSearchOutline className="text-xl " />
            </button>
          </div>
          <h1 className="font-semibold mb-10 text-[15px] text-zinc-500 text-center">
            Search TDL’s with terms like WhatsApp, SMS, Outstanding, Salesman,
            Broker, Invoice, QR Code, Checker, Maker, Backup, etc
          </h1>
          <div className="explore-cards font-semibold text-[18px] text-zinc-500 flex md:flex-row gap-10 flex-col">
            <div className="card flex flex-col gap-5 items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#3069B3]"></div>
              <h1 className="text-center">
                Explore our ready to use Tally TDL’s that fits to your Business
              </h1>
              <Link
                to="/"
                className="px-4 py-2 border-[2px] rounded-full text-[#3069B3] border-[#3069B3]"
              >
                Shop Now
              </Link>
            </div>
            <div className="card flex flex-col gap-5 items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#3069B3]"></div>
              <h1 className="text-center">
                Explore our ready to use Tally TDL’s that fits to your Business
              </h1>
              <Link
                to="/"
                className="px-4 py-2 border-[2px] text-center rounded-full text-[#3069B3] border-[#3069B3]"
              >
                Customize Now
              </Link>
            </div>
          </div>
        </div>
        <div className="image-right-div md:w-[50%] ">
          <img className="object-cover" src="./undraw_working_re_ddwy.svg" alt="" />
        </div>
      </div>
      <h1 className="text-2xl sm:text-5xl px-5 sm:p-0 mt-16 tracking-tighter font-semibold text-zinc-700 text-center">Streamline Success with Tally</h1>
      <ImagesAnim/>
      {/* <Directory categories={categories} /> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default transition(Home, "Home");
