import { mockService } from './mock'
import { supabaseService } from './supabase'
export const dataMode = import.meta.env.VITE_DATA_MODE ?? 'mock'
export const dataService = dataMode === 'supabase' ? supabaseService : mockService
