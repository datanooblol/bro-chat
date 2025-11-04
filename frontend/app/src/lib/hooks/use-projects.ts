'use client'
import { useState, useEffect } from 'react'
import { projectsApi } from '../api/projects'

interface Project {
  project_id: string
  name: string
  description: string
  created_at: string
  updated_at: string
  file_count: number
  session_count: number
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  const fetchProjects = async () => {
    setLoading(true)
    try {
      const response = await projectsApi.list()
      setProjects(response.projects)
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const createProject = async (name: string, description?: string) => {
    try {
      await projectsApi.create({ name, description })
      await fetchProjects() // Refresh list
    } catch (error) {
      throw error
    }
  }

  const deleteProject = async (id: string) => {
    try {
      await projectsApi.delete(id)
      await fetchProjects() // Refresh list
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    loading,
    fetchProjects,
    createProject,
    deleteProject
  }
}