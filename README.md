# Observatório de Vulnerabilidade Socioenergética de Salvador

Frontend React para consulta e comparação responsável de indicadores sociais, habitacionais, urbanos e energéticos de Beiru/Tancredo Neves e Pernambués. O projeto está em **modo demonstrativo**: todos os números mostrados na interface são fictícios e não devem ser interpretados como dados oficiais.

## Tecnologias

React, TypeScript, Vite, React Router, Recharts, Leaflet/React Leaflet (estrutura pronta), Lucide, Supabase JS, Vitest e Testing Library.

## Rodar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

Comandos disponíveis: `npm run lint`, `npm run typecheck`, `npm test` e `npm run build`.

## Rotas

| Rota | Função |
| --- | --- |
| `/` | Visão geral e cartões territoriais |
| `/comparativo` | Gráficos, tabela e regra de comparabilidade |
| `/mapa` | Estrutura preparada para GeoJSON oficial |
| `/energia` | Série de contexto na escala Bahia |
| `/metodologia` | Catálogo, classificações e fontes |

## Modos de dados

`VITE_DATA_MODE=mock` (padrão) usa dados isolados em `src/services/mock.ts`, todos explicitamente demonstrativos. `VITE_DATA_MODE=supabase` habilita o adapter de integração e exige `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`. O adapter falha de forma controlada enquanto o contrato de tabelas não estiver validado. Nunca use `service_role` no frontend.

## Estrutura

```
src/
  app/          rotas e interface
  services/     contratos, mocks e adapter Supabase
  types/        contratos de dados
  styles/       design tokens e responsividade
  test/         configuração de testes
```

## Deploy

O app é uma SPA Vite e pode ser publicado na Vercel com `npm run build` como comando de build e `dist` como diretório de saída. Configure as variáveis de ambiente no painel da Vercel e crie um rewrite para `index.html` caso o provedor não faça fallback de SPA automaticamente.

## Limitações atuais

- Não há geometria oficial validada; o mapa não desenha áreas fictícias.
- Valores, fórmulas e disponibilidade definitiva de indicadores aguardam a etapa de dados.
- Energia é apresentada apenas como contexto estadual da Bahia.

Veja [o contrato de integração](docs/BACKEND_INTEGRATION.md) antes de conectar o banco.
