describe('Test Agente Compra individual', () => {
    it('Paquete Simple ', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Simple').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});


describe('Test Agente Compra individual', () => {
    it('Paquete Destacado', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Destacado').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});

describe('Test Agente Compra individual', () => {
    it('Paquete Premium', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Premium').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});


describe('Test Agente Compra Grupal', () => {
    it('Paquete 10 Avisos', () => {
        cy.visit('https://dev.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Simple').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});


describe('Test Agente2', () => {
    it('Paquete Destacado', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Destacado').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});

describe('Test Agente3', () => {
    it('Paquete Premium', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Premium').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});

/*describe('Test Agente Compra', () => {
    it('Publicación PN', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Persona Natural')
            .click({ force: true });
        cy.get('.e-post-add').click();
        cy.get('.premium > :nth-child(1) > .o-packagesItem__a-buttonContinue').click();
        cy.get('#wrapSelectTypeOfOperation > .u-prettySelect')
            .contains('Venta')
            .click({ force: true });

        /*cy.get('.c-agent-container > .c-button').click();
        cy.get('.c-agent-price-button > .c-button').click();
        cy.get('#btn_1-Aviso-Simple').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});*/



/*
describe('Test Agente Tarifas', () => {
    it('Paquete 10 Avisos WEB', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_10-Avisos').click();
        cy.get('#btn_10-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});*/
/*
describe('Test Agente Tarifas', () => {
    it('Paquete 10 Avisos + 6 Impresos', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_10-Avisos').click();
        cy.get('#btn_10-Avisos-\+-6-Impresos').click();
        cy.get('btn_10-Avisos-+-6-Impresos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});*/

/*
describe('Test Agente Tarifas', () => {
    it('Paquete 25 Avisos WEB', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_25-Avisos').click();
        cy.get('#btn_25-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});

describe('Test Agente Tarifas', () => {
    it('Paquete 60 Avisos WEB', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_60-Avisos').click();
        cy.get('#btn_60-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});

describe('Test Agente Tarifas', () => {
    it('Paquete 60 Avisos WEB', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_100-Avisos').click();
        cy.get('#btn_100-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});*/

/*describe('Test Agente Tarifas', () => {
    it('Paquete 10 Avisos WEB - PE', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_10-Avisos').click();
        cy.get('#btn_10-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get(':nth-child(3) > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#lkbRegresar').click();
    });
});

describe('Test Agente Tarifas', () => {
    it('Paquete 25 Avisos WEB - PE', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_25-Avisos').click();
        cy.get('#btn_25-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get(':nth-child(3) > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#lkbRegresar').click();
    });
});

describe('Test Agente Tarifas', () => {
    it('Paquete 60 Avisos WEB - PE', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_60-Avisos').click();
        cy.get('#btn_60-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get(':nth-child(3) > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#lkbRegresar').click();
    });
});

describe('Test Agente Tarifas', () => {
    it('Paquete 100 Avisos WEB - PE', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Agente')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_100-Avisos').click();
        cy.get('#btn_100-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get(':nth-child(3) > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#lkbRegresar').click();
    });
});*/
/*
describe('Test Empresa Tarifas', () => {
    it('Paquete web', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Empresa')
            .click({ force: true });
        cy.get('.c-agent-container > .c-button').click();
        cy.get('#btn_100-Avisos').click();
        cy.get('#btn_100-Avisos').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get(':nth-child(3) > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#lkbRegresar').click();
    });
});*/

/*describe('Test Posting Empresa', () => {
    it('Tipo Residencial', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('ale12168@gmail.com');
        cy.get('#clave').type('123456*');
        cy.get('.login').click();
        cy.get('.b-submenu-items.b-submenu-items--login')
            .contains('Empresa')
            .click({ force: true });
        cy.get('.bgd-proyectos > a').click();
        cy.get('#delete-ads').click();
        cy.get('.sc-iAyFgw > .sc-jWBwVP > .sc-brqgnP > :nth-child(1) > .sc-cMljjf > .sc-iRbamj').type('Manantiales Real Boot');
        cy.get(':nth-child(1) > .sc-iAyFgw > .sc-jWBwVP > .sc-brqgnP > :nth-child(2) > .sc-cMljjf > .sc-Rmtcm > .sc-csuQGl').type('Residencial');

        cy.get('#btn_1-Aviso-Simple').click();
        cy.get('#btn_30-días').click();
        cy.get('.type-voucher > :nth-child(1) > .pretty-input').click();
        cy.get('.alignCenter > .c-input-radio > .pretty-input').click();
        cy.get('.pay-card > .c-button').click();
        cy.get('#btnPas').click();
        cy.get('.c-button--disabled').click();
    });
});*/