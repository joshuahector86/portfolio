import { motion } from "framer-motion";
import Page from "@/components/layout/page";
import { Button } from "@/components/ui/button";
import { project_data } from "@/potfolio-data/project-data";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const TAG_COLORS: Record<string, string> = {
  React: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
  "Next.js": "bg-slate-500/15 text-slate-300 border border-slate-500/30",
  TypeScript: "bg-sky-600/15 text-sky-300 border border-sky-600/30",
  Tailwind: "bg-teal-500/15 text-teal-300 border border-teal-500/30",
  ShadCN: "bg-violet-500/15 text-violet-300 border border-violet-500/30",
  Zustand: "bg-orange-500/15 text-orange-300 border border-orange-500/30",
  Vite: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
};

const Projects = () => {
  const pageSize = 6;
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
      <div className="flex flex-col items-center justify-center gap-4 w-full min-h-[80vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pagedProjects.map((project, i) => (
            <motion.div
              key={project.projectName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className=""
            >
              <Link to={project.url} target="_blank" className="block">
                <div className="flex flex-col rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(96,165,250,0.12)] shadow-md overflow-hidden">
                  <div className="p-3 pb-2">
                    <h3 className="font-semibold text-base md:text-lg">
                      {project.projectName}
                    </h3>
                  </div>
                  <div className="px-3">
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <img
                        src={project.projectImg}
                        alt={project.projectName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-3 pt-2 flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground">
                      {project.projectCaption}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            TAG_COLORS[tag] ??
                            "bg-white/10 text-white/70 border border-white/20"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
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
