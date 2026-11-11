import { createClient } from '@supabase/supabase-js'
import type { DataService } from './contracts'
const unavailable = () => Promise.reject(new Error('Integração Supabase pendente: valide o contrato de tabelas e configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.'))
export const supabaseService: DataService = { getTerritories: unavailable, getIndicators: unavailable, getObservations: unavailable, getSources: unavailable, getEnergySeries: unavailable, getTerritoryGeoJSON: unavailable }
export const supabaseClient = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY ? createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY) : null
