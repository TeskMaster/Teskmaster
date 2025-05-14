# Especificação de Requisitos – Teskmaster (Arquitetura com Microserviços)

## ✅ Requisitos Funcionais

- **RF01:** Login e autenticação de usuários via token JWT (`auth-service`)
- **RF02:** CRUD de eventos com visualização por calendário (`event-service`)
- **RF03:** Cadastro, edição e exclusão de participantes vinculados a eventos (`participant-service`)
- **RF04:** Envio de convites personalizados por e-mail (`notification-service`)
- **RF05:** Temporizador regressivo até o início do evento (`timer-service`)
- **RF06:** Emissão automática de certificados ao final do evento (`certificate-service`)
- **RF07:** Remanejamento visual de datas dos eventos via front-end
- **RF08:** Comunicação entre microserviços via API Gateway

## ⚙️ Requisitos Não Funcionais

- **RNF01:** Compatibilidade com navegadores modernos (Chrome, Firefox, Edge)
- **RNF02:** Proteção de dados com HTTPS, autenticação segura e tokens JWT
- **RNF03:** Interface responsiva para diferentes tamanhos de tela
- **RNF04:** Arquitetura escalável e modular, com serviços independentes
- **RNF05:** Tolerância a falhas em microserviços (fallbacks e retries)
- **RNF06:** Orquestração e deploy com Docker e Docker Compose
