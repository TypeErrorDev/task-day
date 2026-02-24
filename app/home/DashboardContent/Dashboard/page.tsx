import { Project, Clients, Tasks } from "../../page"; // Import the interface you made in the Home file
import { useEffect, useState } from "react";
import { supabase } from "@/app/createClient";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

interface DashboardProps {
  projects: Project[] | null;
  clients: Clients[] | null;
  tasks: Tasks[] | null;
}

interface UserProfile {
  username: string;
}

export default function Dashboard({
  projects,
  clients,
  tasks,
}: DashboardProps) {
  const { user, loading } = useUser();
  const [username, setUsername] = useState<string>("");
  const [clientsData, setClientsData] = useState<Clients[] | null>(null);
  const [tasksData, setTasksData] = useState<Tasks[] | null>(null);
  const [projectsData, setProjectsData] = useState<Project[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      // 2. Fetch User Profile with typed response
      if (user?.id) {
        const { data: profile, error: profileError } = await supabase
          .from("users")
          .select("username")
          .eq("id", user.id)
          .single();
        if (profile) setUsername((profile as UserProfile).username);
        if (profileError)
          console.error("Error fetching profile:", profileError.message);
        const { data: projectsData, error: projectsError } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });
        if (projectsData) setProjectsData(projectsData as Project[]);
        if (projectsError)
          console.error("Error fetching projects:", projectsError.message);
        const { data: clientsData, error: clientsError } = await supabase
          .from("clients")
          .select("*")
          .order("created_at", { ascending: false });
        if (clientsData) setClientsData(clientsData as Clients[]);
        if (clientsError)
          console.error("Error fetching clients:", clientsError.message);
        const { data: tasksData, error: tasksError } = await supabase
          .from("tasks")
          .select("*")
          .order("created_at", { ascending: false });
        if (tasksData) setTasksData(tasksData as Tasks[]);
        if (tasksError)
          console.error("Error fetching tasks:", tasksError.message);
      }
    };
    fetchData();
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  return (
    <div>
      {/* display the current date: Tuesday, February 17 2026 */}
      <p className="text-xl font-semibold">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="text-3xl font-extrabold">Welcome back, {username}!</h1>
      <p className="text-lg text-gray-500">
        Here are your projects and insights for today.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          <p className="text-3xl font-extrabold">
            {projects ? projects.length : "Loading..."}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Clients</h2>
          <p className="text-3xl font-extrabold">
            {clientsData ? clientsData.length : "Loading..."}
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Tasks</h2>
          <p className="text-3xl font-extrabold">
            {tasksData ? tasksData.length : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}
