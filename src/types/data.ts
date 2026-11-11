export type Dimension = 'Demográfica' | 'Econômica' | 'Social' | 'Habitacional' | 'Urbana' | 'Energética' | 'Socioenergética'
export type Classification = 'Dado observado' | 'Indicador derivado' | 'Proxy/estimativa'
export type Scale = 'Bairro' | 'Estado'
export interface Territory { id: string; name: string; ibgeCode?: string; type: string; parentTerritoryId?: string }
export interface Source { id: string; institution: string; title: string; url: string; accessedAt: string }
export interface Indicator { id: string; name: string; description: string; dimension: Dimension; unit: string; methodology: string; classification: Classification; scale: Scale; limitations: string }
export interface Observation { id: string; territoryId: string; indicatorId: string; sourceId: string; year: number; value: number; status?: 'available' | 'pending' }
export interface ObservationFilter { territoryIds?: string[]; indicatorIds?: string[]; dimensions?: Dimension[]; year?: number }
export interface EnergyPoint { year: number; consumo: number; consumidores: number }
export interface ComparisonRow { indicator: Indicator; left?: Observation; right?: Observation; absoluteDifference?: number; percentDifference?: number; comparable: boolean; reason?: string }
