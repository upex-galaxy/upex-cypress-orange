import { login } from '@pages/PIM/GX3-2571-Login.Page';
import { removeLogs } from '@helper/RemoveLogs';
import { newEmployee } from '@pages/PIM/GX3-2571-Employee.Page';
import * as json from '@data/employeeData.json';
import { faker } from '@faker-js/faker';

removeLogs();
const { username, password } = Cypress.env('AdminUser');

describe('GX3-2571 | [Automation] OrangeHRM | PIM | Add a new employee', () => {
	beforeEach(() => {
		cy.session('login', () => {
			cy.visit('/');
			cy.url().should('contain', json.endPoint.orangehrmlive);
			login.userLogin(username, password);
		});
		cy.visit(json.endPoint.addEmployee);
		cy.url().should('contain', json.endPoint.addEmployee);
	});

	it('GX3-2571 | TC1: Validate adding an employee without credentials successfully', () => {
		newEmployee.unploadProfilePhoto();
		newEmployee.inputFirstName().type(json.firstName);
		newEmployee.inputMiddleName().type(json.middleName);
		newEmployee.inputLastName().type(json.lastName);
		newEmployee.inputId().last().type(faker.random.numeric(2));
		newEmployee.clickSaveButton();

		cy.wait(9000); //ver como no agregar el wait
		newEmployee.verifySuccessMessageIsDisplayed('Sucess, Succesfully Saved');
		cy.url().should('contain', json.endPoint.viewPersonalDetails);
		newEmployee.employeeFullname().should('have.text', `${json.firstName} ${json.lastName}`);

		newEmployee.clickEmployeeList();
		newEmployee.searchEmployee(`${json.firstName} ${json.lastName}`);
		cy.contains(`${json.firstName} ${json.middleName}`).should('exist');
	});

	it('GX3-2571 | TC2: Validate adding an employee with credentials', () => {
		newEmployee.unploadProfilePhoto();
		newEmployee.inputFirstName().type(json.employeeInfo.firstName);
		newEmployee.inputMiddleName().type(json.employeeInfo.middleName);
		newEmployee.inputLastName().type(json.employeeInfo.lastName);
		newEmployee.inputId().last().type(faker.random.numeric(3));
		newEmployee.clickSwitch();
		newEmployee.inputUsername().first().type(json.employeeCredentials.username);
		newEmployee.inputPassword().first().type(json.employeeCredentials.password);
		newEmployee.inputPassword().last().type(json.employeeCredentials.password);
		newEmployee.clickSaveButton();

		newEmployee.verifySuccessMessageIsDisplayed('Sucess, Succesfully Saved');

		cy.url().should('contain', json.endPoint.addEmployee);

		cy.wait(5000); //Igual
		cy.visit(json.endPoint.viewSystemUsers);
		newEmployee.searchEmployeeInAdmin(json.employeeCredentials.username);
		cy.contains(`${json.employeeCredentials.username}`).should('exist');
	});

	it('GX3-2571 | TC3: Validate not being able to add an employee', () => {
		newEmployee.unploadProfilePhoto();
		newEmployee.inputFirstName().type(json.firstName);
		newEmployee.inputMiddleName().type(json.middleName);
		newEmployee.inputLastName().type(json.lastName);
		newEmployee.inputId().last().type(faker.random.numeric(1));
		newEmployee.clickSwitch();
		newEmployee.inputUsername().first().type(json.invalidCredentials.username);
		newEmployee.inputPassword().first().type(json.invalidCredentials.password);
		newEmployee.inputPassword().last().type(json.invalidCredentials.confirmPassword);

		newEmployee.clickSaveButton();

		cy.url().should('not.contain', json.endPoint.viewPersonalDetails);
		newEmployee.errorMessageText().first().should('have.text', 'Should be at least 5 characters');
		newEmployee.errorMessageText().eq(1).should('have.text', 'Should have at least 7 characters');
		newEmployee.errorMessageText().last().should('have.text', 'Passwords do not match');
	});
});
