class Employee{
    get = {
        EmployeeFirstNameInput: ()=> cy.get('input[class$="orangehrm-firstname"]'),
        EmployeeMiddleNameInput: ()=> cy.get('input[class$="orangehrm-middlename"]'),
        EmployeeLastNameInput: ()=> cy.get('input[class$="orangehrm-lastname"]'),
        EmployeeProfilePicture: ()=> cy.get("div[class='orangehrm-edit-employee-imagesection']"),
        PersonalDetailsSaveButton: ()=>  cy.get("button[class$='orangehrm-left-space']").eq(0)  
    }

    clickSavePersonalDetails(){
        this.get.PersonalDetailsSaveButton().click()
    }

}

export const employee = new Employee; 