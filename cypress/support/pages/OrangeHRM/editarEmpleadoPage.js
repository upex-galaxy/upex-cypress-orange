class personalDetail{
    inputs = {
        employeeName:()=> cy.get('[class*=employee-name] h6'),
        firstNameInput:()=> cy.get('input[name="firstName"]'),
        middleNameInput:()=> cy.get('input[name="middleName"]'),
        lastNameInput:()=> cy.get('input[name="lastName"]'),
        birthDate:()=> cy.get('input[placeholder="yyyy-mm-dd"]').eq(1),
        nationalityDropDown:()=> cy.get('[class="oxd-select-text--after"] i').first(),
        nationalityOptions:()=> cy.get('[role="listbox"]').children(),
        gender:()=> cy.get('[class*="gender-grouped-field"]').children(),
        submit:()=> cy.get('[type="submit"]').first()
    }

    typeFirstName(firstName){
        this.inputs.firstNameInput().clear().type(firstName)
    }
    typeLastName(lastName){
        this.inputs.lastNameInput().clear().type(lastName)
    }
    typeBirthDate(birthDate){
        this.inputs.birthDate().clear().type(birthDate).click()
    }
    selectNationality(){
        const option = Math.floor(Math.random()*(194-1))
        this.inputs.nationalityDropDown().click({force:true})
        this.inputs.nationalityOptions().eq(option).click()
    }
    selectGender(){
        const gender = Math.floor(Math.random()*(2-1))
        this.inputs.gender().eq(gender).click({force:true})
    }
    clickSubmit(){
        this.inputs.submit().click()
    }
}

export const PersonalDetail = new personalDetail();