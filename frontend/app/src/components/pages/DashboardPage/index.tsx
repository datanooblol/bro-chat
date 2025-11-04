'use client'
import { useProjects } from '../../../lib/hooks/use-projects'
import { AppLayout } from '../../templates/AppLayout'
import { PageHeader } from '../../organisms/PageHeader'
import { ProjectGrid } from '../../organisms/ProjectGrid'

export function DashboardPage() {
  const { projects, loading, createProject, deleteProject } = useProjects()

  return (
    <AppLayout>
      <div className="space-y-8">
        <PageHeader
          title="Your Projects"
          onCreateProject={createProject}
          loading={loading}
        />
        
        <ProjectGrid
          projects={projects}
          onDeleteProject={deleteProject}
          loading={loading}
        />
      </div>
    </AppLayout>
  )
}