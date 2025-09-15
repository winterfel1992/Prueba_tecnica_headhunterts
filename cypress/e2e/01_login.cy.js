describe('Login con usuario inexistente', () => {
  it('Debe mostrar error', () => {
    cy.visit('/');
    cy.get('#email').type('noexiste@mail.com');
    cy.get('#password').type('clave123');
    cy.get('button[type="submit"]').click();
    cy.contains('Usuario no encontrado').should('be.visible');
    cy.screenshot('evidencias/login_error');
  });
});