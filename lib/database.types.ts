export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: string
          created_at: string
          title: string
          area: string
          company: string
          link: string
          seniority: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          area: string
          company: string
          link: string
          seniority: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          area?: string
          company?: string
          link?: string
          seniority?: string
        }
      }
    }
  }
}

