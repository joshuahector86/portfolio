import Page from "@/components/layout/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { project_data } from "@/potfolio-data/project-data";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const Projects = () => {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(project_data.length / pageSize));

  const pagedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return project_data.slice(startIndex, startIndex + pageSize);
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <Page>
      <div className="min-h-screen flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {pagedProjects.map((project) => (
            <Link
              key={project.projectName}
              to={project.url}
              target="_blank"
              className="block h-full"
            >
              <Card className="mt-2 h-full transition-transform duration-200 hover:scale-105 shadow-md  hover:shadow-lg">
                <CardHeader className="flex-row justify-between items-center">
                  <h3 className="font-semibold text-xl md:text-3xl">
                    {project.projectName}
                  </h3>
                </CardHeader>
                <CardContent>
                  <img src={project.projectImg} alt="project-img" />
                </CardContent>
                <CardFooter>{project.projectCaption}</CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center justify-center gap-2">
          <Button
            variant="secondary"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;

              return (
                <Button
                  key={pageNumber}
                  variant={isActive ? "default" : "secondary"}
                  onClick={() => goToPage(pageNumber)}
                  disabled={isActive}
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>

          <Button
            variant="secondary"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Projects;
