class Employee{
    get = {
        EmployeeFirstNameInput: ()=> cy.get('input[class$="orangehrm-firstname"]'),
        EmployeeMiddleNameInput: ()=> cy.get('input[class$="orangehrm-middlename"]'),
        EmployeeLastNameInput: ()=> cy.get('input[class$="orangehrm-lastname"]'),
        EmployeeProfilePicture: ()=> cy.get("div[class='orangehrm-edit-employee-imagesection']"),
        PersonalDetailsSaveButton: ()=>  cy.get("button[class$='orangehrm-left-space']").eq(0),
        SuccessToastMessage: ()=>  cy.get("p[class$='oxd-toast-content-text']").eq(1),
        EmployeeFirstAndLastName: ()=> cy.get('.orangehrm-edit-employee-name > .oxd-text'),
        EmployeeId: ()=> cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > input')
        //orangehrm-edit-employee-name
        // oxd-toast-content-text

    }

    clickSavePersonalDetails(){
        this.get.PersonalDetailsSaveButton().click()
    }

}

export const employee = new Employee; 