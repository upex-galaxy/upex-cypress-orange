class Employee{
    get = {
        EmployeeFirstNameInput: ()=> cy.get('input[class$="orangehrm-firstname"]'),
        EmployeeMiddleNameInput: ()=> cy.get('input[class$="orangehrm-middlename"]'),
        EmployeeLastNameInput: ()=> cy.get('input[class$="orangehrm-lastname"]'),
        EmployeeProfilePicture: ()=> cy.get("div[class='orangehrm-edit-employee-imagesection']"),
        PersonalDetailsSaveButton: ()=>  cy.get("button[class$='orangehrm-left-space']").eq(0),
        SuccessToastMessage: ()=>  cy.get("p[class$='oxd-toast-content-text']").eq(1),
        EmployeeFirstAndLastName: ()=> cy.get('.orangehrm-edit-employee-name > .oxd-text')
        //orangehrm-edit-employee-name
        // oxd-toast-content-text

    }

    clickSavePersonalDetails(){
        this.get.PersonalDetailsSaveButton().click()
    }

}

export const employee = new Employee; 