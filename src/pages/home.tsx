import Page from "@/components/layout/page";
import Headshot from "../assets/headshot.jpeg";
const Home = () => {
  return (
    <Page>
      <div className="flex flex-col items-center gap-4 ">
        <img
          src={Headshot}
          alt="headshot"
          className="max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] xl:max-w-[20%] rounded-full"
        />
        <h3 className="text-2xl text-muted-foreground ">
          Senior Software Engineer
        </h3>
        <h1 className="font-semibold text-5xl">Dimitri Hector</h1>
        <p className="max-w-[600px]">
          Heyo! This is really just me messing around with various types of
          technologies and trying to make cool things out of it. Feel free to explore
          the cacophony of tech things that held my interest for undetermined
          periods of time!
        </p>
      </div>
    </Page>
  );
};

export default Home;
