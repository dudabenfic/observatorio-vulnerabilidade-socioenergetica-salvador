# Contrato de integração com backend

## Princípios

O frontend não presume tabelas nem colunas físicas. O adapter em `src/services/supabase.ts` deve ser implementado depois que a equipe de dados homologar o contrato. Não exponha chaves `service_role`; use apenas a chave anônima pública e políticas RLS adequadas.

## Entidades esperadas

```ts
type Territory = { id: string; name: string; ibgeCode?: string; type: string; parentTerritoryId?: string }
type Indicator = { id: string; name: string; description: string; dimension: Dimension; unit: string; methodology: string; classification: 'Dado observado' | 'Indicador derivado' | 'Proxy/estimativa'; scale: 'Bairro' | 'Estado'; limitations: string }
type Observation = { id: string; territoryId: string; indicatorId: string; sourceId: string; year: number; value: number }
type Source = { id: string; institution: string; title: string; url: string; accessedAt: string }
```

Exemplo de observação (demonstrativo):

```json
{"id":"obs-demo-1","territoryId":"beiru","indicatorId":"pop","sourceId":"ibge","year":2022,"value":42180}
```

## Operações necessárias

- `getTerritories()` retorna os territórios e suas relações de pertencimento.
- `getIndicators()` retorna unidade, dimensão, tipo, metodologia, escala e limitações.
- `getObservations({ territoryIds, indicatorIds, dimensions, year })` retorna somente medidas compatíveis com o filtro; a resposta precisa preservar fonte e ano.
- `getEnergySeries()` retorna séries da Bahia, sem replicá-las em bairros.
- `getTerritoryGeoJSON(territoryId)` retorna `null` quando não houver geometria validada; quando houver, inclua CRS, fonte, ano e compatibilidade territorial documentados.
- `getSources()` retorna URLs oficiais, instituição e data de acesso.

## Regras de qualidade

1. Nunca misture períodos, unidades, escalas ou definições no mesmo comparativo.
2. Indique se o item é observado, derivado ou proxy/estimativa. Fórmulas de derivados são obrigatórias.
3. Indicadores IPEA devem manter a escala efetivamente publicada. Dados EPE da Bahia permanecem estaduais.
4. Ausências devem chegar como dados indisponíveis, nunca como zero.
5. Para listas extensas, aceite paginação (`page`, `pageSize`) e devolva metadados de total.

## Substituição dos mocks

1. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
2. Defina `VITE_DATA_MODE=supabase`.
3. Implemente as operações do contrato no adapter, mapeando os nomes reais de tabela/coluna.
4. Valide filtros, estados vazios, erros de RLS e resultados com a equipe de dados.
5. Remova o modo demonstrativo somente depois da validação de rastreabilidade de todas as observações exibidas.
