import { ProjectCard } from '../../molecules/ProjectCard'
import { Text } from '../../atoms'

interface Project {
  project_id: string
  name: string
  description: string
  created_at: string
  updated_at: string
  file_count: number
  session_count: number
}

interface ProjectGridProps {
  projects: Project[]
  onDeleteProject: (id: string) => void
  loading: boolean
}

export function ProjectGrid({ projects, onDeleteProject, loading }: ProjectGridProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <Text className="text-gray-500">Loading projects...</Text>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 space-y-4">
        <Text className="text-xl text-gray-500">No projects yet</Text>
        <Text className="text-gray-400">Create your first project to get started</Text>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {projects.map((project) => (
        <ProjectCard
          key={project.project_id}
          name={project.name}
          description={project.description}
          fileCount={project.file_count}
          sessionCount={project.session_count}
          onDelete={() => onDeleteProject(project.project_id)}
        />
      ))}
    </div>
  )
}