import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Github, Linkedin } from "lucide-react";
import Page from "@/components/layout/page";
import Headshot from "../assets/headshot.jpeg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Home = () => {
  return (
    <Page>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-[3px] rounded-full bg-gradient-to-br from-blue-400 to-violet-500 shadow-[0_0_55px_rgba(96,165,250,0.35)] max-w-[60%] lg:max-w-[50%] shrink-0"
        >
          <img
            src={Headshot}
            alt="headshot"
            className="rounded-full w-full block"
          />
        </motion.div>

        <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
          <motion.h1
            {...fadeUp(0.15)}
            className="font-semibold text-5xl bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent"
          >
            Dimitri Hector
          </motion.h1>

          <motion.h3
            {...fadeUp(0.25)}
            className="text-2xl text-muted-foreground mt-1"
          >
            <Typewriter
              options={{
                strings: [
                  "Senior Software Engineer",
                  "Full Stack Developer",
                  "React Specialist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h3>

          <motion.div
            {...fadeUp(0.35)}
            className="w-full max-w-[600px] border-2 border-blue-400 mt-2"
          />

          <motion.p {...fadeUp(0.45)} className="max-w-[600px] text-3xl mt-5">
            Welcome. This portfolio showcases projects and experiments across a
            range of technologies that have captured my interest over time.
            Please feel free to explore the work and ideas that reflect my
            ongoing curiosity and growth.
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="flex items-center justify-center xl:justify-start gap-3 mt-4 flex-wrap"
          >
            <a
              href="https://www.syntaxnsteps.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-blue-400 px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-400 hover:text-white transition-colors">
                SyntaxNSteps Company Site
              </button>
            </a>
            <a
              href="https://github.com/joshuahector86"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border-2 border-white/10 hover:border-blue-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/dimitri-hector-a113b9149/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border-2 border-white/10 hover:border-blue-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
