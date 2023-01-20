class personalDetail{
    inputs = {
        "firstNameInput":()=> cy.get('input[name="firstName"]'),
        "middleNameInput":()=> cy.get('input[name="middleName"]'),
        "lastNameInput":()=> cy.get('input[name="lastName"]'),
        "birthDate":()=> cy.get('input[placeholder="yyyy-mm-dd"]').eq(1),
        "nationality":()=> cy.get('[class*="select-text-input"]').first
    }

    typeFirstName(firstName){
        this.inputs.firstNameInput().type(firstName)
    }
    typeLastName(lastName){
        this.inputs.lastNameInput().type(lastName)
    }
    typeBirthDate(birthDate){
        this.inputs.birthDate().type(birthDate)
    }
    selectNationality(){
        this.inputs.nationality().click();
    }
}

export const PersonalDetail = new personalDetail();