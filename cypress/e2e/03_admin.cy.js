import datos from '../fixtures/datos.json';

describe('Admin: creación de datos', () => {
  beforeEach(() => {
    cy.visit('/Admin');
    cy.get('#email').type(datos.usuarioAdmin.email);
    cy.get('#password').type(datos.usuarioAdmin.password);
    cy.get('button[type="submit"]').click();
  });

  it('Crea sectores, temas, subtemas y preguntas', () => {
    datos.sectores.forEach(sector => {
      cy.get('#nuevoSector').type(sector);
      cy.get('#guardarSector').click();
      cy.contains(sector).should('be.visible');
    });
    // Repetir lógica para temas, subtemas y preguntas
    cy.screenshot('evidencias/admin_datos_creados');
  });
});