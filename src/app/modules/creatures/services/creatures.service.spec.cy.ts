import { TestBed } from '@angular/core/testing';

import { CreaturesService } from './creatures.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { lastValueFrom } from 'rxjs';

// describe('CreaturesService', () => {
//   let service: CreaturesService;


//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule ],
//   })
//   .compileComponents();
//     service = TestBed.inject(CreaturesService);
//   });

//   it('should be created', async () => {
//     let result = await lastValueFrom(service.getAllCreatures());
//     result.slice(0, 10).forEach((creature) => {
//       cy.visit('/criaturas')
//       cy.wait(3000)
//       cy.contains(creature.name).click()
//       cy.wait(3000)
//       cy.get(creature.name).should('exist');
//     });
//   });
// });

describe('check category routes', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/inicio')
  });
  // const siteRoutes: ISiteRoutes[] = [
  //   { headerName: 'Criaturas', url: '/criaturas' },
  //   { headerName: 'Personagens', url: '/personagens' },
  //   { headerName: 'Guildas', url: '/guildas' },
  //   { headerName: 'Mundos', url: '/mundos' },
  // ];
  // siteRoutes.forEach((route) => {
  //   it('clicking "type" navigates to a new url', () => {
  //     cy.visit('/inicio')

  //     cy.contains('Categorias').click()
  //     cy.contains(route.headerName).click()

  //     // Should be on a new URL which
  //     // includes '/commands/actions'
  //     cy.wait(3000)
  //     cy.url().should('include', route.url)
  //   })
  // });
})
