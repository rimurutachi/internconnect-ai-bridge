export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      activity_log: {
        Row: {
          action: string
          created_at: string | null
          description: string | null
          entity_id: string | null
          entity_type: string
          id: string
          internship_id: string | null
          metadata: Json | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string | null
          description?: string | null
          entity_id?: string | null
          entity_type: string
          id?: string
          internship_id?: string | null
          metadata?: Json | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string | null
          description?: string | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          internship_id?: string | null
          metadata?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_log_internship_id_fkey"
            columns: ["internship_id"]
            isOneToOne: false
            referencedRelation: "internships"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: []
      }
      collaboration_sessions: {
        Row: {
          cursor_position: number | null
          document_id: string | null
          id: string
          is_active: boolean | null
          last_seen: string | null
          selection_range: Json | null
          user_color: string | null
          user_id: string | null
        }
        Insert: {
          cursor_position?: number | null
          document_id?: string | null
          id?: string
          is_active?: boolean | null
          last_seen?: string | null
          selection_range?: Json | null
          user_color?: string | null
          user_id?: string | null
        }
        Update: {
          cursor_position?: number | null
          document_id?: string | null
          id?: string
          is_active?: boolean | null
          last_seen?: string | null
          selection_range?: Json | null
          user_color?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collaboration_sessions_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collaboration_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          address: string | null
          code: string | null
          contact_info: Json | null
          created_at: string | null
          id: string
          industry: string | null
          is_verified: boolean | null
          name: string
        }
        Insert: {
          address?: string | null
          code?: string | null
          contact_info?: Json | null
          created_at?: string | null
          id?: string
          industry?: string | null
          is_verified?: boolean | null
          name: string
        }
        Update: {
          address?: string | null
          code?: string | null
          contact_info?: Json | null
          created_at?: string | null
          id?: string
          industry?: string | null
          is_verified?: boolean | null
          name?: string
        }
        Relationships: []
      }
      conversation_participants: {
        Row: {
          conversation_id: string
          id: string
          is_active: boolean | null
          joined_at: string | null
          last_read_at: string | null
          role: string | null
          user_id: string
        }
        Insert: {
          conversation_id: string
          id?: string
          is_active?: boolean | null
          joined_at?: string | null
          last_read_at?: string | null
          role?: string | null
          user_id: string
        }
        Update: {
          conversation_id?: string
          id?: string
          is_active?: boolean | null
          joined_at?: string | null
          last_read_at?: string | null
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_participants_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          internship_id: string | null
          last_message_at: string | null
          metadata: Json | null
          name: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          internship_id?: string | null
          last_message_at?: string | null
          metadata?: Json | null
          name?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          internship_id?: string | null
          last_message_at?: string | null
          metadata?: Json | null
          name?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_internship_id_fkey"
            columns: ["internship_id"]
            isOneToOne: false
            referencedRelation: "internships"
            referencedColumns: ["id"]
          },
        ]
      }
      document_approvals: {
        Row: {
          approved_at: string | null
          approver_id: string | null
          comments: string | null
          created_at: string | null
          id: string
          stage_name: string
          status: Database["public"]["Enums"]["approval_status"] | null
          workflow_id: string | null
        }
        Insert: {
          approved_at?: string | null
          approver_id?: string | null
          comments?: string | null
          created_at?: string | null
          id?: string
          stage_name: string
          status?: Database["public"]["Enums"]["approval_status"] | null
          workflow_id?: string | null
        }
        Update: {
          approved_at?: string | null
          approver_id?: string | null
          comments?: string | null
          created_at?: string | null
          id?: string
          stage_name?: string
          status?: Database["public"]["Enums"]["approval_status"] | null
          workflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_approvals_approver_id_fkey"
            columns: ["approver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_approvals_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "document_workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      document_changes: {
        Row: {
          attributes: Json | null
          content: string | null
          document_id: string | null
          id: string
          operation_type: string | null
          position: number | null
          synced: boolean | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          attributes?: Json | null
          content?: string | null
          document_id?: string | null
          id?: string
          operation_type?: string | null
          position?: number | null
          synced?: boolean | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          attributes?: Json | null
          content?: string | null
          document_id?: string | null
          id?: string
          operation_type?: string | null
          position?: number | null
          synced?: boolean | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_changes_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_changes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      document_comments: {
        Row: {
          content: string
          created_at: string | null
          document_id: string | null
          id: string
          is_resolved: boolean | null
          parent_comment_id: string | null
          position_data: Json | null
          resolved_at: string | null
          resolved_by: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          document_id?: string | null
          id?: string
          is_resolved?: boolean | null
          parent_comment_id?: string | null
          position_data?: Json | null
          resolved_at?: string | null
          resolved_by?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          document_id?: string | null
          id?: string
          is_resolved?: boolean | null
          parent_comment_id?: string | null
          position_data?: Json | null
          resolved_at?: string | null
          resolved_by?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_comments_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "document_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_comments_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      document_templates: {
        Row: {
          category: string | null
          created_at: string | null
          created_by: string | null
          default_content: Json | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          structure: Json
          university_id: string | null
          update_policy: string | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          default_content?: Json | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          structure: Json
          university_id?: string | null
          update_policy?: string | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          default_content?: Json | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          structure?: Json
          university_id?: string | null
          update_policy?: string | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      document_versions: {
        Row: {
          change_type: string | null
          changed_by: string | null
          changes_summary: string | null
          content: Json
          created_at: string | null
          diff_data: Json | null
          document_id: string | null
          id: string
          version: string
        }
        Insert: {
          change_type?: string | null
          changed_by?: string | null
          changes_summary?: string | null
          content: Json
          created_at?: string | null
          diff_data?: Json | null
          document_id?: string | null
          id?: string
          version: string
        }
        Update: {
          change_type?: string | null
          changed_by?: string | null
          changes_summary?: string | null
          content?: Json
          created_at?: string | null
          diff_data?: Json | null
          document_id?: string | null
          id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_versions_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_versions_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      document_workflows: {
        Row: {
          completed_at: string | null
          current_stage: string | null
          document_id: string | null
          id: string
          metadata: Json | null
          started_at: string | null
          status: Database["public"]["Enums"]["workflow_status"] | null
          workflow_definition: Json
        }
        Insert: {
          completed_at?: string | null
          current_stage?: string | null
          document_id?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["workflow_status"] | null
          workflow_definition: Json
        }
        Update: {
          completed_at?: string | null
          current_stage?: string | null
          document_id?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["workflow_status"] | null
          workflow_definition?: Json
        }
        Relationships: [
          {
            foreignKeyName: "document_workflows_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          content: Json | null
          created_at: string | null
          file_size: number | null
          file_type: string | null
          file_url: string | null
          id: string
          internship_id: string | null
          is_template: boolean | null
          metadata: Json | null
          owner_id: string | null
          parent_version_id: string | null
          published_at: string | null
          status: Database["public"]["Enums"]["document_status"] | null
          template_id: string | null
          title: string
          type: Database["public"]["Enums"]["document_type"]
          updated_at: string | null
          version: string | null
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          internship_id?: string | null
          is_template?: boolean | null
          metadata?: Json | null
          owner_id?: string | null
          parent_version_id?: string | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          template_id?: string | null
          title: string
          type: Database["public"]["Enums"]["document_type"]
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          internship_id?: string | null
          is_template?: boolean | null
          metadata?: Json | null
          owner_id?: string | null
          parent_version_id?: string | null
          published_at?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          template_id?: string | null
          title?: string
          type?: Database["public"]["Enums"]["document_type"]
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_parent_version_id_fkey"
            columns: ["parent_version_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      evaluations: {
        Row: {
          bias_check_passed: boolean | null
          confidence_score: number | null
          created_at: string | null
          feedback_text: string
          final_grade: number | null
          id: string
          internship_id: string
          lit_features: Json | null
          processed_at: string | null
          rating_communication: number | null
          rating_overall: number | null
          rating_technical: number | null
          rating_work_ethic: number | null
          recommended_grade: number | null
          sentiment_scores: Json | null
          status: string | null
          submitted_at: string | null
          supervisor_id: string
          updated_at: string | null
        }
        Insert: {
          bias_check_passed?: boolean | null
          confidence_score?: number | null
          created_at?: string | null
          feedback_text: string
          final_grade?: number | null
          id?: string
          internship_id: string
          lit_features?: Json | null
          processed_at?: string | null
          rating_communication?: number | null
          rating_overall?: number | null
          rating_technical?: number | null
          rating_work_ethic?: number | null
          recommended_grade?: number | null
          sentiment_scores?: Json | null
          status?: string | null
          submitted_at?: string | null
          supervisor_id: string
          updated_at?: string | null
        }
        Update: {
          bias_check_passed?: boolean | null
          confidence_score?: number | null
          created_at?: string | null
          feedback_text?: string
          final_grade?: number | null
          id?: string
          internship_id?: string
          lit_features?: Json | null
          processed_at?: string | null
          rating_communication?: number | null
          rating_overall?: number | null
          rating_technical?: number | null
          rating_work_ethic?: number | null
          recommended_grade?: number | null
          sentiment_scores?: Json | null
          status?: string | null
          submitted_at?: string | null
          supervisor_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "evaluations_internship_id_fkey"
            columns: ["internship_id"]
            isOneToOne: false
            referencedRelation: "internships"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "evaluations_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      internships: {
        Row: {
          advisor_id: string
          company_id: string
          created_at: string | null
          department: string | null
          end_date: string
          id: string
          metadata: Json | null
          position: string
          requirements: Json | null
          start_date: string
          status: string | null
          student_id: string
          supervisor_id: string | null
          updated_at: string | null
        }
        Insert: {
          advisor_id: string
          company_id: string
          created_at?: string | null
          department?: string | null
          end_date: string
          id?: string
          metadata?: Json | null
          position: string
          requirements?: Json | null
          start_date: string
          status?: string | null
          student_id: string
          supervisor_id?: string | null
          updated_at?: string | null
        }
        Update: {
          advisor_id?: string
          company_id?: string
          created_at?: string | null
          department?: string | null
          end_date?: string
          id?: string
          metadata?: Json | null
          position?: string
          requirements?: Json | null
          start_date?: string
          status?: string | null
          student_id?: string
          supervisor_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "internships_advisor_id_fkey"
            columns: ["advisor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "internships_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "internships_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "internships_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string | null
          deleted_at: string | null
          edited_at: string | null
          file_url: string | null
          id: string
          is_deleted: boolean | null
          is_edited: boolean | null
          message_type: string | null
          metadata: Json | null
          sender_id: string
          updated_at: string | null
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string | null
          deleted_at?: string | null
          edited_at?: string | null
          file_url?: string | null
          id?: string
          is_deleted?: boolean | null
          is_edited?: boolean | null
          message_type?: string | null
          metadata?: Json | null
          sender_id: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string | null
          deleted_at?: string | null
          edited_at?: string | null
          file_url?: string | null
          id?: string
          is_deleted?: boolean | null
          is_edited?: boolean | null
          message_type?: string | null
          metadata?: Json | null
          sender_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          read_at: string | null
          reference_id: string | null
          reference_type: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          read_at?: string | null
          reference_id?: string | null
          reference_type?: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          read_at?: string | null
          reference_id?: string | null
          reference_type?: string | null
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      typing_indicators: {
        Row: {
          conversation_id: string
          id: string
          started_at: string | null
          user_id: string
        }
        Insert: {
          conversation_id: string
          id?: string
          started_at?: string | null
          user_id: string
        }
        Update: {
          conversation_id?: string
          id?: string
          started_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "typing_indicators_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "typing_indicators_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      universities: {
        Row: {
          address: string | null
          code: string | null
          contact_info: Json | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          address?: string | null
          code?: string | null
          contact_info?: Json | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          address?: string | null
          code?: string | null
          contact_info?: Json | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          company_id: string | null
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          profile_data: Json | null
          role: Database["public"]["Enums"]["user_role"]
          university_id: string | null
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          profile_data?: Json | null
          role: Database["public"]["Enums"]["user_role"]
          university_id?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          profile_data?: Json | null
          role?: Database["public"]["Enums"]["user_role"]
          university_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_users_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_users_university"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      approval_status: "pending" | "approved" | "rejected" | "skipped"
      document_status:
        | "draft"
        | "in_review"
        | "approved"
        | "published"
        | "archived"
        | "rejected"
      document_type:
        | "evaluation"
        | "agreement"
        | "report"
        | "form"
        | "certificate"
        | "memorandum"
        | "other"
      internship_status: "pending" | "active" | "completed" | "cancelled"
      notification_type:
        | "message"
        | "evaluation_submitted"
        | "evaluation_approved"
        | "internship_created"
        | "internship_updated"
        | "document_shared"
        | "comment_added"
        | "mention"
        | "system"
      user_role: "student" | "advisor" | "supervisor" | "admin"
      workflow_status: "pending" | "in_progress" | "completed" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      approval_status: ["pending", "approved", "rejected", "skipped"],
      document_status: [
        "draft",
        "in_review",
        "approved",
        "published",
        "archived",
        "rejected",
      ],
      document_type: [
        "evaluation",
        "agreement",
        "report",
        "form",
        "certificate",
        "memorandum",
        "other",
      ],
      internship_status: ["pending", "active", "completed", "cancelled"],
      notification_type: [
        "message",
        "evaluation_submitted",
        "evaluation_approved",
        "internship_created",
        "internship_updated",
        "document_shared",
        "comment_added",
        "mention",
        "system",
      ],
      user_role: ["student", "advisor", "supervisor", "admin"],
      workflow_status: ["pending", "in_progress", "completed", "cancelled"],
    },
  },
} as const
