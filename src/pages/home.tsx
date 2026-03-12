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
            Heyo! This is really just me messing around with various types of
            technologies and trying to make cool things out of it. Feel free to
            explore the cacophony of tech things that held my interest for
            undetermined periods of time!
          </p>
        </div>
      </div>
    </Page>
  );
};

export default Home;
