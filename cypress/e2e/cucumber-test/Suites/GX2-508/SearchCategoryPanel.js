const { Given } = require("@badeball/cypress-cucumber-preprocessor")

context("✅OrangeHRM | Side-Panel | Filter for a Category Section by Search Bar",()=>{

    Given("admin is logged in",()=>{

    })

    describe("509 | TC1: Check finding a category in panel when the search bar text is matching a category",()=>{
        
        When("admin enters a text into the Search Bar input as {string}",(searchText)=>{

        })
        Then("the panel should only display the matching category as {string}",(categoryText)=>{

        })
        And("the category should have the same endpoint as {string}",(endpoint)=>{

        })

    })

    describe('509 | TC2:  Check Not finding categories when search bar text is NOT matching categories', () => {
        
        When("admin enters a text that it's not matching into the Search Bar input as {string}",(searchText)=>{

        })
        Then("the panel should NOT display any category because the input text is not matching",()=>{

        })
    });
})













