Feature: US GX2-187 | TS: ✅OrangeHRM | PIM | Editar perfil de empleado
	
	TC_GX2-211 @TS_GX2-188 @AutoDeployed @BDD @DeployedInQA @Feature @L2 @OrangeHRM @PIM @Profile
	Scenario Outline: US GX2-187 | TS GX2-188 | TC1:  Verificar que editar la informacion personal del empleado funcione como se espera
		Given el administrador está registrado en el sistema exitosamente
		And abre el VPD del empleado para editar
		When el admin inserta nuevos valores validos en los campos del form como "<firstName>" , "<MiddleName", "<lastName>", "<NickName>", "<EmployeeID>", "<Nationality>", "<DateofBirth>" y "<Gender>"
		And hace click en el botón "Save"
		Then debe aparecer un Log Message indicando "Success, Succesfully Saved"
		And se mantiene en la página del perfil del empleado 
		And la información del empleado es actualizada en la Tabla del "Employee List"
		Examples:
			|firstName|MiddleName|lastName|NickName|EmployeeID|Nationality|DateofBirth|Gender|LogMessage|
			|D|Del|C|Milin|1234567890|Venezuelan|1980-06-10|Female|"Success, Succesfully Saved"|
			|A|Mar|Garciaaaaaaaaaaaaaaaaaaaaaaaaa|Garchi|1|Venezuelan|1982-06-11|Female|"Success, Succesfully Saved"|
			|Rafaelllllllllllllllllllllllll||Mejias|Pichi|1234567890|Venezuelan|1982-06-11|Male|"Success, Succesfully Saved"|
			|Deniel|Dani|1234567|Cocoooooooooooooooooooooooooooooooo|1|Argentinian|1982-06-11|Male|"Success, Succesfully Saved"|

	@TC_GX2-212 @TS_GX2-188 @AutoDeployed @BDD @DeployedInQA @Feature @L2 @OrangeHRM @PIM @Profile
	Scenario Outline: US GX2-187 #@| TS GX2-188 | TC2:  Verificar que editar imagen de perfil del empleado funcione corretamente
		When: el admin ingresa en la imagen del perfil del empleado
		And: carga una nueva imagen de perfil en el UploadInput
		And: hace click en el botón "Save" 
		Then: debe aparecer un Log Message indicando "Success, Succesfully Saved"
		And: debe visualizarse la nueva imagen de perfil en todas las vistas del empleado.
		Examples:
			|imagen|up to|LogMessage|
			|.jpg|1MB|"Success, Succesfully Saved"|
			|.png|1MB|"Success, Succesfully Saved"|
			|.jpg|1MB|"Success, Succesfully Saved"|
