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

### Listagem (`/clients`)
- [x] ClientListPage + ClientFilters + ClientTable
- [ ] useClients: loading, erro, lista (integração API)
- [x] Confirmação antes de excluir (ConfirmDeleteDialog)

### Formulário (`/clients/new`, `/clients/:id/edit`)
- [x] ClientForm + páginas create/edit
- [x] Validações: obrigatórios, email válido (estrutura pronta)
- [ ] Feedback sucesso/erro via API real
- [ ] useClientForm: create, update, load por id

## O que será avaliado além do funcionamento
- Código na camada certa
- Tratamento de erros da API no front
- README com como rodar