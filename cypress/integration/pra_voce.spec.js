/// <reference types="cypress" />

const { mapValues } = require("cypress/types/lodash");

describe("Should access home page", () => {
    before(() => {
        cy.visit("https://www.vr.com.br/")
    })

    it('access PRA VOCÊ', () => {
        cy.title().should('be.equal', 'VR Benefícios - Vale Refeição, Vale Alimentação e Transporte');
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_closePrivacyTerm').click();
        cy.get('.vr-menu-trigger--open > .vr-menu-trigger__icon > path').click();
        cy.get(':nth-child(3) > .vr-main-navigation__link').click();
    })

    it('access Onde usar meu cartão VR', () => {
        cy.title().should('be.equal', 'VR Benefícios - Onde aceita VR');
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_closePrivacyTerm').click();
        cy.get('.vr-hero__actions > .vr-button--negative').click();
        cy.get('.mfp-close').should('be.enabled'); //aqui o sistema verifica se o botão "X" do frame do mapa está habilitado,
        //para que o mesmo exista, o mapa deve estar aberto
        cy.get('[id=map]').dblclick(); //aqui é a ação de duplo click no mapa, caso o mapa não estiver aberto a ação não funciona


        // Possibilidade de testar o cenário do mapa, caso o mesmo não esteja aberto em tela o cypress retorna erro na ação dblclick
        // cy.get('.mfp-close').should('be.enabled');
        // cy.get('.mfp-close').click();
        // cy.get('[id=map]').dblclick();

    })

})