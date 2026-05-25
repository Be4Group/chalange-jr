# Exemplos de arquitetura (frontend)

Estes arquivos são **referência**, não fazem parte da aplicação.

O candidato deve:

1. Criar a estrutura real em `app/`, `components/`, `hooks/` e `lib/`
2. Implementar rotas, UI, integração com API e validações
3. Não importar diretamente de `examples/` — copie o padrão e desenvolva

## Estrutura esperada (você cria)

```
app/
  clients/
    page.tsx              ← listagem
    new/page.tsx          ← cadastro
    [id]/edit/page.tsx    ← edição
components/
  layout/AppHeader.tsx
  clients/
    ClientFilters.tsx
    ClientTable.tsx
    ClientForm.tsx
    ConfirmDeleteDialog.tsx
    StatusBadge.tsx
hooks/
  useClients.ts
  useClientForm.ts
lib/
  types.ts
  api.ts
```
