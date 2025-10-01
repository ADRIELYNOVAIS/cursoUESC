import { faker } from '@faker-js/faker';

describe('teste de cadastro', () => {
  it('deve realizar cadastro com dados aleatórios', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    cy.visit('https://barrigareact.wcaquino.me');
    cy.get(':nth-child(2) > .nav-link').click();

    // Nome
    cy.get('.jumbotron > :nth-child(1) > .form-control').type(nome);
    // Email
    cy.get('.input-group > .form-control').type(email);
    // Senha
    cy.get(':nth-child(3) > .form-control').type(senha);

    cy.get('.btn').click();

    cy.url().should('contain', '/login');
  });
});
