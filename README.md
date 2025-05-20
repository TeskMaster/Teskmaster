# Teskmaster - Sistema de Gerenciamento de Eventos

Teskmaster é uma aplicação web pensada para facilitar o planejamento e a execução de eventos acadêmicos, corporativos ou sociais, com foco em uma experiência segura, responsiva e intuitiva.

## 🎯 Objetivo

Desenvolver uma plataforma acessível por navegadores modernos para:
- Criar e gerenciar eventos
- Organizar participantes
- Emitir certificados automaticamente
- Enviar convites
- Fornecer visualizações intuitivas de agenda

## 👥 Equipe

| Nome            | Papel             |
|-----------------|-------------------|
| Miguel Lobo     | Scrum Master       |
| Vitor Matias    | Dev Front-End      |
| Arthur Ribeiro  | Dev Front-End      |
| João Gomes      | Dev Back-End       |
| Marcos Túlio    | Dev Back-End       |
| Marcus Vinícius | Full Stack Dev     |

## 🛠️ Tecnologias Utilizadas

- **Back-end:** Java, Spring Boot, JPA
- **Front-end:** HTML, CSS, JavaScript
- **Banco de Dados:** (a definir, exemplo: MySQL)
- **Gerenciamento:** Trello (Kanban), reuniões semanais

## Frontend Beta - Initial Structure

### Overview
This is a beta version of the Teskmaster frontend, providing a basic structure built with HTML, CSS, and JavaScript. The primary goal of this beta is to offer a visual starting point for the application and to demonstrate core page navigation and layout.

### Files Created
The following main files have been created for this beta:
-   `index.html`: The main landing page, offering options to "Login" or "Register" (currently placeholder navigation).
-   `dashboard.html`: A mock dashboard page where users would typically view their events and have an option to create new ones.
-   `event-details.html`: A placeholder page intended to display detailed information about a specific event. Content is currently static.
-   `create-event.html`: A page containing a form to create new events. Includes basic client-side validation (e.g., checking for empty required fields).
-   `style.css`: Provides basic styling to ensure a clean, presentable, and responsive layout across the HTML pages.
-   `script.js`: Contains client-side JavaScript for basic interactions, such as form validation for `create-event.html`. It also includes comments and placeholders for future dynamic content loading and API integration.

### How to Run
To view this frontend beta:
1.  Ensure all the HTML, CSS, and JS files (`index.html`, `dashboard.html`, `event-details.html`, `create-event.html`, `style.css`, `script.js`) are in the same directory.
2.  Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Edge, Safari).

No build steps, server configurations, or backend deployments are required to view this beta version of the frontend. It runs directly in the browser.

### Implemented Beta Features
-   **Basic Page Structure:** HTML files for key functionalities (landing, dashboard, event details, event creation) are in place.
-   **Navigation:** Hyperlinks connect the pages, allowing for a basic navigational flow.
-   **Responsive Design:** Basic CSS media queries are implemented in `style.css` to adapt the layout for different screen sizes, aiming for usability on both desktop and mobile devices.
-   **Client-Side Validation:** The "Create Event" form in `create-event.html` includes JavaScript to check for empty required fields (title and date) before (mock) submission.
-   **Code Comments:** All files (HTML, CSS, JS) are commented to explain their structure, purpose, and identify areas for future development, including API integration points.
