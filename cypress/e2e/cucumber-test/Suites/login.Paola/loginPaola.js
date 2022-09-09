import { Given,When,And,Then}from "cypress-cucumber-preprocessor/steps";


Given("A user enters to the login page",()=>{

    cy.visit("https://www.saucedemo.com/")

})
When("A user enters username {string}",(username)=>{

    cy-get("#user-name").type(username)
})

And(" A user enters password {string}",(password)=>{

    cy.get("#password").type(password)
    
})

And("A user clicks on the login button",()=>{

    cy.get("#login-button").click()
})

Then("A user will be logged in ",()=>{

    cy.url().should("contain","inventory.html")
})
