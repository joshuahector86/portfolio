import Page from "@/components/layout/page";
import Headshot from "../assets/headshot.jpeg";
const Home = () => {
  return (
    <Page>
      <div className="flex flex-col items-center gap-4 ">
        <img
          src={Headshot}
          alt="headshot"
          className="max-w-[60%] sm:max-w-[30%] rounded-full"
        />
        <h3 className="text-2xl text-muted-foreground ">
          Senior Software Engineer
        </h3>
        <h1 className="font-semibold text-5xl">Dimitri Hector</h1>
        <p>
          Heyo! This is really just me messing around with various types of
          technologies and trying to make cool things out of it. Each sub
          heading in the navbar will lead you to a different type of project I
          have tried. Umbrella terms like web dev include a lot of various types
          of projects that all fall under that category. Feel free to explore
          the cacophony of tech things that held my interest for undetermined
          periods of time!
        </p>
      </div>
    </Page>
  );
};

export default Home;
