
interface ISiteRoutes {
  headerName: string;
  url: string;
}

// cypress/integration/creatures.spec.ts

describe('Teste de consulta de dados do endpoint', () => {
  it('Deve consultar o endpoint e verificar a propriedade name dos 10 primeiros itens dentro de creature_list', () => {
    cy.request('https://api.tibiadata.com/v4/creatures')
      .then((response) => {
        expect(response.status).to.eq(200) // Verifica se o status da resposta é 200
        expect(response.body.creatures.creature_list).to.be.an('array') // Verifica se creature_list é um array

        const firstTenCreatures = response.body.creatures.creature_list.slice(0, 10)

        // Verifica se cada item dos 10 primeiros itens de creature_list possui a propriedade 'name'
        firstTenCreatures.forEach((creature) => {
          // expect(creature).to.have.property('name')
          // expect(creature.name).to.be.a('string')
          cy.visit('/criaturas')
          cy.wait(500)
          cy.contains(creature.name).click()
          cy.wait(500)
          cy.contains(creature.name).should('exist');
        })
      })
  })
})



// describe('Creatures', () => {
//   it('should display creatures fetched from service', () => {
//     cy.intercept('GET', 'https://api.tibiadata.com/v4/creatures').as('getCreatures');

//     cy.visit('/criaturas');

//     cy.wait('@getCreatures').then(() => {
//       cy.get('.creature').should('have.length', 2);
//     });
//   });
// });


// describe('check category routes', () => {
//   const siteRoutes: ISiteRoutes[] = [
//     { headerName: 'Criaturas', url: '/criaturas' },
//     { headerName: 'Personagens', url: '/personagens' },
//     { headerName: 'Guildas', url: '/guildas' },
//     { headerName: 'Mundos', url: '/mundos' },
//   ];
//   siteRoutes.forEach((route) => {
//     it('clicking "type" navigates to a new url', () => {
//       cy.visit('/inicio')

//       cy.contains('Categorias').click()
//       cy.contains(route.headerName).click()

//       // Should be on a new URL which
//       // includes '/commands/actions'
//       cy.wait(3000)
//       cy.url().should('include', route.url)
//     })
//   });
// })
