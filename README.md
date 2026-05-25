# Desafio Técnico Fullstack JR — CRUD de Clientes

Repositório do desafio técnico para avaliação de desenvolvimento fullstack (NestJS + Next.js + PostgreSQL).

## Estrutura do repositório

```
/backend   → API REST (NestJS + Prisma)
/frontend  → Interface web (Next.js)
arquitetura.md → Checklist e guia de camadas
```

## Tecnologias

| Camada    | Stack                          |
|-----------|--------------------------------|
| Backend   | NestJS, Prisma, PostgreSQL     |
| Frontend  | Next.js 16, React 19, Tailwind |
| Banco     | PostgreSQL                     |

## Pré-requisitos

- Node.js 20+
- PostgreSQL (local ou Prisma Postgres / Docker)
- npm

## Como rodar o projeto

### 1. Backend

```bash
cd backend
cp .env.example .env
# Edite DATABASE_URL no .env
npm install
npx prisma migrate dev
npm run start:dev
```

API disponível em `http://localhost:3000`.

Endpoints:

| Método | Rota              | Descrição              |
|--------|-------------------|------------------------|
| POST   | `/clients`        | Criar cliente          |
| GET    | `/clients`        | Listar (filtros/página)|
| GET    | `/clients/:id`    | Buscar por ID          |
| PUT    | `/clients/:id`    | Atualizar              |
| DELETE | `/clients/:id`    | Exclusão lógica        |

### 2. Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Interface em `http://localhost:3001`.

## Variáveis de ambiente

Copie os exemplos e ajuste conforme seu ambiente:

| Arquivo              | Variáveis principais                          |
|----------------------|-----------------------------------------------|
| `backend/.env.example` | `DATABASE_URL`, `PORT`, `CORS_ORIGIN`       |
| `frontend/.env.example` | `NEXT_PUBLIC_API_URL`                      |

## O que o candidato deve implementar

### Backend (`backend/src/modules/clients/clients.service.ts`)

- [ ] `create` — email e documento únicos
- [ ] `findAll` — listagem com filtros e paginação
- [ ] `findOne` — busca por ID
- [ ] `update` — bloquear edição se INACTIVE
- [ ] `remove` — soft delete (status INACTIVE)

O **repository**, **controller**, **DTOs** e **schema Prisma** já estão prontos.

### Frontend (`frontend/src/hooks/`)

- [ ] `useClients` — integrar listagem e exclusão
- [ ] `useClientForm` — integrar create/update e load na edição

Componentes, rotas e cliente HTTP (`lib/api.ts`) já estão prontos.

Consulte também o checklist em [arquitetura.md](./arquitetura.md).

## Regras de negócio

1. **Email único** — retornar `409 Conflict` se duplicado
2. **Documento único** — retornar `409 Conflict` se duplicado
3. **Cliente inativo não pode ser editado** — retornar `403 Forbidden`
4. **Exclusão lógica** — `DELETE` altera status para `INACTIVE` (não remove do banco)

## Entrega (candidato)

1. Fork deste repositório
2. Branch: `feature/seu-nome`
3. Commits organizados
4. Pull Request com: solução, tecnologias, decisões técnicas e como executar

## O que será avaliado

- Organização e camadas corretas
- Modelagem e regras de negócio no backend
- Componentização e integração com API no frontend
- UX: loading, feedback de erro/sucesso
- README e clareza do código
