import { Project } from "../../page"; // Import the interface you made in the Home file

interface DashboardProps {
  projects: Project[] | null;
}

export default function Dashboard({ projects }: DashboardProps) {
  return (
    <div>
      {projects?.map((project) => (
        <div key={project.id}>{project.project_name}</div>
      ))}
    </div>
  );
}
