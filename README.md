Prueba Técnica QA Automatizada con Cypress
Este proyecto contiene la automatización E2E de los escenarios definidos en la prueba técnica de QA para el sistema de bioseguridad de Godoy Córdoba.

estructura del proyecto 
prueba-qa-cypress/
├── cypress/
│   ├── e2e/               # Casos de prueba automatizados
│   ├── fixtures/          # Datos parametrizados
│   ├── support/           # Comandos reutilizables
├── evidencias/            # Capturas de pantalla generadas
├── resultados/            # PDFs descargados de evaluaciones
├── cypress.config.js      # Configuración de Cypress
├── package.json           # Dependencias del proyecto
└── README.md              # Documentación del proyecto

instalacion del proyecto 
npm install
npx cypress open
npx cypress run

Escenarios cubiertos
Login con usuario inexistente Valida mensaje de error al intentar ingresar con credenciales inválidas.

Registro automático de usuario Registra un nuevo usuario con sector “Caficultor” si el login falla.

Gestión en módulo Admin Crea sectores, temas, subtemas y preguntas desde el panel administrativo.

Evaluaciones y descarga de resultados Ejecuta tres evaluaciones con respuestas distintas y descarga los PDFs generados.

Evidencias y resultados
Las capturas de pantalla se guardan automáticamente en la carpeta /evidencias.

Los archivos PDF descargados se almacenan en /resultados.

