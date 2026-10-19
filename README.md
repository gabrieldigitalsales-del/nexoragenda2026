# NEXOR Agenda

Agenda de clientes da NEXOR Digital, com Supabase exclusivo, acesso apenas por senha e identidade visual NEXOR.

## Iniciar

```bash
npm install
npm run dev
```

Abra o endereço fornecido pelo Vite e informe a senha configurada no servidor.

## Segurança e dados

- A senha não está no navegador ou nos arquivos frontend; é validada pela função Supabase `nexor-agenda-2026-api`.
- Sessões expiram em 12 horas e são guardadas em sessionStorage do navegador; sair revoga a sessão.
- Seis tentativas incorretas por IP em quinze minutos suspendem temporariamente novas tentativas daquele IP.
- Dados nas tabelas exclusivas `nexor_agenda_2026_*`; o navegador nunca recebe a service_role key.
- Não execute os scripts SQL originais da agenda clínica sobre o banco: eles não fazem parte desta implantação.

## Pontos a evoluir

- O cadastro mantém nomes internos de campos `patient_*` por compatibilidade; a interface mostra **cliente**.
- Recorrências e conflitos devem ser testados antes do uso diário e alertas de postagem ainda não são automatizados.
- Senha curta e compartilhada é menos segura que acessos individuais; recomenda-se trocá-la por uma frase-senha forte.
