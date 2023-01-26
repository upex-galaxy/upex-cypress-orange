class personalDetail{
    inputs = {
        employeeName:()=> cy.get('[class*=employee-name] h6'),
        firstNameInput:()=> cy.get('input[name="firstName"]'),
        middleNameInput:()=> cy.get('input[name="middleName"]'),
        lastNameInput:()=> cy.get('input[name="lastName"]'),
        birthDate:()=> cy.get('input[placeholder="yyyy-mm-dd"]').eq(1),
        nationalityDropDown:()=> cy.get('[class="oxd-select-text--after"] i').first(),
        nationalityOptions:()=> cy.get('[role="listbox"]').children(),
        genderInput:()=> cy.get('[class*="gender-grouped-field"]').children(),
        submit:()=> cy.get('[type="submit"]').first(),
        employeeImage:()=> cy.get('[class*="image-wrapper"]'),
        uploadImage:()=> cy.get('[type="file"]'),
        uploadButton:()=> cy.get('[role="none"]').eq(1),
        imgContainer:()=> cy.get('[class$="imagesection"] [alt="profile picture"]')
    }

    typeFirstName(firstName){
        this.inputs.firstNameInput().clear().type(firstName)
    }
    clearMiddleName(){
        this.inputs.middleNameInput().clear()
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
        this.inputs.nationalityOptions().eq(option).click().then((text)=>{
            const assertion = text.text()
            expect(text).to.have.text(assertion)
        })
    }
    selectGender(){
        const gender = Math.floor(Math.random()*(3-1))
        this.inputs.genderInput().eq(gender).click({force:true}).then((text)=>{
            const assertion = text.text()
            expect(text).to.have.text(assertion)
        })
    }
    clickSubmit(){
        this.inputs.submit().click()
    }
    clickImage(){
        this.inputs.employeeImage().click()
    }
    actualizeImage(){
        this.inputs.uploadButton().click()
        this.inputs.uploadImage().selectFile('cypress/fixtures/images/upexlogo.png',{force:true})
    }
}

export const PersonalDetail = new personalDetail();