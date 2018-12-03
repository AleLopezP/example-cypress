// js teorico

// funciones

// funciones nombradas o declaradas
//function suma(x, y) {
//    return x + y;
//}

// funciones flecha
//const suma = (x, y) => x + y;
    
// objetos - objetos lierales
/*const casillero1 = {
    alejandra: [1, 2, 3, 4],
    tivi: '3324324323',
    mimetodo(){
        console.log('mio');
        //return 10;
    }
};

console.log(casillero1.mimetodo());
*/
// cadena literal - cadena - string
// const mitexto = 'texto';
// array literal - array // puede contener cualquier tipo de valor
// const lista = [1, {}, function a() {}, true, [1, 2, 3]];
/*
const suma = (x, y) => x + y;

describe('Test Numbers', () => {
    it('sum simple', () => {
        expect(suma(2, 3)).to.equal(5); // asercion - assert's
    });
    it('suma grande', () => {
        expect([1,2,3]).includes(4);
    });
    it('sum mas grande', () => {
        expect(suma(20000, 300000)).to.equal(320000); // asercion - assert's
    });
});
*/

describe('Test Agente Compra', () => {
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
        cy.get('.c-button--disabled').click();*/
    });
});




/*describe('Test Agente Compra', () => {
    it('Paquete Simple', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
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
});*/

/*describe('Test Agente3', () => {
    it('Paquete Premium', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
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
});*/

/*describe('Test Agente2', () => {
    it('Paquete Destacado', () => {
        cy.visit('https://pre.urbania.pe');
        cy.get('#lnkLogin').click({ force: true });
        cy.get('#email').type('maria.guevara@ecodigital.pe');
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
});*/
