# Arquitetura do desafio

## Objetivo
Siga esta estrutura. Não crie lógica em lugares errados.

## Estrutura do repositório

```
/backend
/frontend
README.md
.env.example
```

## Backend — checklist por endpoint

### POST /clients
- [x] Controller em `clients.controller.ts`
- [x] Validação no DTO
- [ ] Service: email e documento únicos
- [x] Repository: create

### GET /clients
- [x] Query: nome?, email?, status?, page?, limit?
- [x] Repository: findMany com filtros
- [ ] Service: delegar ao repository

### GET /clients/:id
- [ ] Service: NotFoundException

### PUT /clients/:id
- [ ] Service: se INACTIVE → erro
- [x] Repository: update

### DELETE /clients/:id
- [ ] Service: update status INACTIVE (não delete físico)
- [x] Repository: softDelete

## Frontend — checklist

> Referência de arquitetura em `frontend/examples/` (arquivos `.example` — não são rotas reais).

### Rotas (candidato cria em `app/`)
- [ ] `app/clients/page.tsx` — listagem
- [ ] `app/clients/new/page.tsx` — cadastro
- [ ] `app/clients/[id]/edit/page.tsx` — edição

### Listagem
- [ ] AppHeader + ClientFilters + ClientTable
- [ ] useClients: loading, erro, lista, filtros
- [ ] ConfirmDeleteDialog antes de excluir

### Formulário
- [ ] ClientForm (create e edit)
- [ ] Validações: obrigatórios, email válido, telefone, documento
- [ ] useClientForm: create, update, load por id
- [ ] Feedback sucesso/erro + loading nas requests

### Infra front
- [ ] `lib/types.ts` e `lib/api.ts`

## O que será avaliado além do funcionamento
- Código na camada certa
- Tratamento de erros da API no front
- README com como rodar