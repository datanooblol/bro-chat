import { api } from './index'

interface Project {
  project_id: string
  name: string
  description: string
  created_at: string
  updated_at: string
  file_count: number
  session_count: number
}

interface ProjectsResponse {
  projects: Project[]
}

interface ProjectFile {
  file_id: string
  project_id: string
  filename: string
  size: number
  status: string
  source: string
  selected: boolean
  created_at: string
  updated_at: string
}

interface ProjectFilesResponse {
  files: ProjectFile[]
}

interface ProjectSession {
  session_id: string
  project_id: string
  name: string
  created_at: string
  updated_at: string
}

interface ProjectSessionsResponse {
  sessions: ProjectSession[]
}

export const projectsApi = {
  list: (): Promise<ProjectsResponse> => 
    api.get('/projects/'),

  get: (id: string): Promise<Project> => 
    api.get(`/projects/${id}`),

  getFiles: (id: string): Promise<ProjectFilesResponse> =>
    api.get(`/projects/${id}/files`),

  getSessions: (id: string): Promise<ProjectSessionsResponse> =>
    api.get(`/projects/${id}/sessions`),

  create: (data: { name: string; description?: string }) =>
    api.post('/projects/', data),

  update: (id: string, data: { name?: string; description?: string }) =>
    api.put(`/projects/${id}`, data),

  delete: (id: string) => 
    api.delete(`/projects/${id}`)
}