import datos from '../fixtures/datos.json';

describe('Evaluaciones y descarga de resultados', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#email').type(datos.usuarioTest.email);
    cy.get('#password').type(datos.usuarioTest.password);
    cy.get('button[type="submit"]').click();
  });

  it('Crea 3 evaluaciones y descarga PDF', () => {
    for (let i = 1; i <= 3; i++) {
      cy.get('#nuevaEvaluacion').click();
      cy.get('#respuesta1').click(); // Ajusta según tu selector real
      cy.get('#guardarEvaluacion').click();

      // Capturar la URL del PDF desde el botón
      cy.get('#descargarPDF') // Ajusta el selector si es diferente
        .should('have.attr', 'href')
        .then((url) => {
          cy.downloadFile(url, 'resultados', `evaluacion_${i}.pdf`);
        });

      cy.screenshot(`evidencias/evaluacion_${i}`);
    }
  });
});