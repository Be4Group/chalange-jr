# Frontend — Desafio CRUD de Clientes

Base em **Next.js (App Router)** + **Tailwind CSS** para o candidato implementar a integração com a API.

## Estrutura

```
src/
  app/clients/          # Listagem, cadastro e edição
  components/clients/   # UI reutilizável (tabela, filtros, formulário)
  hooks/                # useClients, useClientForm (com TODOs)
  lib/                  # Tipos e cliente HTTP (api.ts pronto)
```

## O que já está pronto

- Layout, header e rotas (`/clients`, `/clients/new`, `/clients/:id/edit`)
- Componentes de listagem, filtros, tabela, formulário e confirmação de exclusão
- Cliente HTTP em `src/lib/api.ts`
- Validações básicas no formulário (`useClientForm`)

## O que o candidato deve implementar

Ver comentários `TODO` em:

- `src/hooks/useClients.ts`
- `src/hooks/useClientForm.ts`

## Como rodar

```bash
cp .env.example .env.local
npm install
npm run dev
```

Acesse [http://localhost:3001](http://localhost:3001).
