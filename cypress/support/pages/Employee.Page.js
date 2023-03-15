class Employee{
    get = {
        EmployeeFirstNameInput: ()=> cy.get('input[class$="orangehrm-firstname"]'),
        EmployeeMiddleNameInput: ()=> cy.get('input[class$="orangehrm-middlename"]'),
        EmployeeLastNameInput: ()=> cy.get('input[class$="orangehrm-lastname"]'),
        EmployeeProfilePicture: ()=> cy.get("div[class='orangehrm-edit-employee-imagesection']"),
        PersonalDetailsSaveButton: ()=>  cy.get("button[class$='orangehrm-left-space']").eq(0),
        SuccessToastMessage: ()=>  cy.get("p[class$='oxd-toast-content-text']").eq(1),
        EmployeeFirstAndLastName: ()=> cy.get('.orangehrm-edit-employee-name > .oxd-text'),
        EmployeeId: ()=> cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input'),  // si pueden abotener este elemento de otra manera mas cheta AVISEN!!
        EmployeeProfileImage: () => cy.get('.employee-image'),
        EmployeeChangeImageButton: () => cy.get('input[class="oxd-file-input"]'),
        EmployeeSaveProfileImageButton: () => cy.get('button[type="submit"]')
        // oxd-toast-content-text

    }

    clickSavePersonalDetails(){
        this.get.PersonalDetailsSaveButton().click()
    }

    clickEmployeeProfileImage(){
        this.get.EmployeeProfileImage().click( {force: true})
    }

    clickSaveProfileImage(){
        this.get.EmployeeSaveProfileImageButton().click()
    }

}

export const employee = new Employee; 