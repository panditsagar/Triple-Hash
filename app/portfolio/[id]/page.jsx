import { projects } from "../projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
    return projects.map((p) => ({
        id: p.id.toString(),
    }));
}

export default async function ProjectDetailPage({ params }) {
    const { id } = await params;
    const projectId = parseInt(id);
    const project = projects.find((p) => p.id === projectId);

    return <ProjectDetailClient project={project} />;
}