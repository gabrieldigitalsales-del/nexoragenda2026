# Banco NEXOR Agenda

Implantado diretamente no Supabase `upihgyqkcyqjqvclujpm`.

Tabelas exclusivas: `nexor_agenda_2026_clients`, `nexor_agenda_2026_events`, `nexor_agenda_2026_settings`, `nexor_agenda_2026_tasks`, `nexor_agenda_2026_members`, `nexor_agenda_2026_access`, `nexor_agenda_2026_sessions` e `nexor_agenda_2026_login_attempts`.

Função Edge ativa: `nexor-agenda-2026-api`. Acesso com senha validada no backend; as tabelas possuem RLS e as credenciais service_role nunca vão para o frontend.

Não execute SQL de criação da agenda antiga. Não edite tabelas `lena_neuro_2026_*`.
