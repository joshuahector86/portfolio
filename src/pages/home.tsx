import Page from "@/components/layout/page";
import Headshot from "../assets/headshot.jpeg";
const Home = () => {
  return (
    <Page>
      <div className="flex flex-col xl:flex-row items-center gap-10 justify-center">
        <img
          src={Headshot}
          alt="headshot"
          className="max-w-[60%] lg:max-w-[50%] rounded-full"
        />
        <div className="flex flex-col items-start ">
          <h1 className="font-semibold text-5xl ">Dimitri Hector</h1>
          <h3 className="text-2xl text-muted-foreground ">
            Senior Software Engineer
          </h3>
          <div className="w-full border-2 border-blue-400" />
          <p className="max-w-[600px] text-3xl  mt-5">
            Welcome. This portfolio showcases projects and experiments across a
            range of technologies that have captured my interest over time.
            Please feel free to explore the work and ideas that reflect my
            ongoing curiosity and growth.
          </p>
          <button className="mt-4 border-2 border-blue-400 px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-400 hover:text-white transition-colors">
            <a
              href="https://snytax-nsteps.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SyntaxNSteps Company Site
            </a>
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Home;
