import { Faker, faker } from "@faker-js/faker";

describe('Create Issue'), () =>{
    const issue = {
        title: 'issue-${faker.datatype.uuid()',
        description: faker.random.words(3),
        project: {
            name: 'project-${faker.datatype.uuid()}',
            description: faker.random.words(5)
        }
    }
}

beforeEach (()=> {
cy.login ()
cy.gui_createProject (issue.project)
})

    it ('Sucessfully', () =>{
    cy.gui_createProject(issue)

    cy.get('.issue')
    })




