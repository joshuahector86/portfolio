import Page from "@/components/layout/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { project_data } from "@/potfolio-data/project-data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Page>
      <div className="w-full flex flex-col items-center">
        {project_data.map((project) => (
          <>
            <Card key={project.projectName} className="mt-2 sm:max-w-[70%]">
              <CardHeader className="flex-row justify-between items-center">
                <h3 className="font-semibold sm:text-3xl">
                  {project.projectName}
                </h3>
                <Link to={project.url} target="_blank">
                  <Button variant={"secondary"}>Go to site</Button>
                </Link>
              </CardHeader>
              <CardContent>
                <img src={project.projectImg} alt="project-img" />
              </CardContent>
              <CardFooter>{project.projectCaption}</CardFooter>
            </Card>
            <Separator />
          </>
        ))}
      </div>
    </Page>
  );
};

export default Projects;
