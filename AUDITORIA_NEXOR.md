# Auditoria NEXOR

**Aplicado:** tabelas exclusivas no Supabase, RLS com acesso por lista de usuários, login Supabase Auth, linguagem de clientes e compromissos. Dados da Lena preservados.

**Pendente para uso:** incluir UID do(s) usuário(s) NEXOR em `nexor_agenda_2026_members`, configurar chave publicável do Supabase no ambiente, instalar dependências e validar fluxo de ponta a ponta.

**Evoluções sugeridas:** pagamentos mensais de contrato separados do valor por compromisso; alertas de publicação; blocos específicos para edição de vídeos; notificações de vencimento; contratos/briefings por cliente; status de conteúdo (roteiro, gravação, edição, aprovação, publicado); detecção de conflito por intervalo e não só hora inicial; horário recorrente sem quantidade fixa; calendário compartilhado por equipe.

**Segurança:** o Supabase também apontou 27 tabelas de outros sistemas com RLS desabilitado; não foram modificadas para evitar bloquear esses projetos.
