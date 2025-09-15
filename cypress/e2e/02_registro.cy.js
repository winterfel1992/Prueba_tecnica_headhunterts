import datos from '../fixtures/datos.json';

describe('Registro automático', () => {
  it('Registra usuario Caficultor', () => {
    cy.visit('/registro');
    cy.get('#nombre').type('Usuario QA');
    cy.get('#email').type('nuevoqa@mail.com');
    cy.get('#password').type('clave123');
    cy.get('#sector').select(datos.sectores[0]);
    cy.get('button[type="submit"]').click();
    cy.contains('Registro exitoso').should('be.visible');
    cy.screenshot('evidencias/registro_exitoso');
  });
});