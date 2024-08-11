import Header from "@/components/Header";
import Main from "@/components/Main";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      <div className="bg-white rounded-lg text-black px-5 py-3">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
