import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          phone?: string
          role: 'admin' | 'influencer' | 'customer'
          tier?: string
          status: 'active' | 'pending' | 'suspended'
          kyc_status: 'pending' | 'approved' | 'rejected'
          total_points: number
          balance_points: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          phone?: string
          role?: 'admin' | 'influencer' | 'customer'
          tier?: string
          status?: 'active' | 'pending' | 'suspended'
          kyc_status?: 'pending' | 'approved' | 'rejected'
          total_points?: number
          balance_points?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          phone?: string
          role?: 'admin' | 'influencer' | 'customer'
          tier?: string
          status?: 'active' | 'pending' | 'suspended'
          kyc_status?: 'pending' | 'approved' | 'rejected'
          total_points?: number
          balance_points?: number
          created_at?: string
          updated_at?: string
        }
      }
      qr_codes: {
        Row: {
          id: string
          code: string
          points_value: number
          status: 'active' | 'used' | 'expired'
          created_by: string
          used_by?: string
          used_at?: string
          created_at: string
          expires_at?: string
        }
        Insert: {
          id?: string
          code: string
          points_value: number
          status?: 'active' | 'used' | 'expired'
          created_by: string
          used_by?: string
          used_at?: string
          created_at?: string
          expires_at?: string
        }
        Update: {
          id?: string
          code?: string
          points_value?: number
          status?: 'active' | 'used' | 'expired'
          created_by?: string
          used_by?: string
          used_at?: string
          created_at?: string
          expires_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          type: 'earn' | 'redeem' | 'bonus'
          points: number
          description: string
          reference_id?: string
          status: 'completed' | 'pending' | 'failed'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'earn' | 'redeem' | 'bonus'
          points: number
          description: string
          reference_id?: string
          status?: 'completed' | 'pending' | 'failed'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'earn' | 'redeem' | 'bonus'
          points?: number
          description?: string
          reference_id?: string
          status?: 'completed' | 'pending' | 'failed'
          created_at?: string
        }
      }
      redemption_requests: {
        Row: {
          id: string
          user_id: string
          points: number
          reward_type: string
          reward_details: string
          status: 'pending' | 'approved' | 'rejected' | 'completed'
          admin_notes?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          points: number
          reward_type: string
          reward_details: string
          status?: 'pending' | 'approved' | 'rejected' | 'completed'
          admin_notes?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          points?: number
          reward_type?: string
          reward_details?: string
          status?: 'pending' | 'approved' | 'rejected' | 'completed'
          admin_notes?: string
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          category: string
          points_required: number
          image_url?: string
          status: 'active' | 'inactive'
          stock_quantity?: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          category: string
          points_required: number
          image_url?: string
          status?: 'active' | 'inactive'
          stock_quantity?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          category?: string
          points_required?: number
          image_url?: string
          status?: 'active' | 'inactive'
          stock_quantity?: number
          created_at?: string
        }
      }
    }
  }
}