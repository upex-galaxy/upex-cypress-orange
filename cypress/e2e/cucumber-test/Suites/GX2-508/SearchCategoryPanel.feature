Feature: ✅OrangeHRM | Side-Panel | Filter for a Category Section by Search Bar

	Background:
		#@PREC_GX2-518
		Given admin is logged in

	#GX2-508
	@TC_GX2-516 @TS_GX2-509 @Gherkin
	Scenario Outline: 509 | TC1: Check finding a category in panel when the search bar text is matching a category
		When admin enters a text into the Search Bar input as '<searchText>'
		Then the panel should only display the matching category as '<categoryText>'
		And the category should have the same endpoint as '<endpoint>'
		Examples:
		    | searchText  | categoryText | endpoint                                    |
		    | Ad          | Admin        | admin/viewSystemUsers                       |
		    | ment         | Recruitment  | recruitment/viewCandidates                  |
		    | Dashboard   | Dashboard    | dashboard/index                             |
		    | PIM         | PIM          | pim/viewEmployeeList                        |
		    | Leave       | Leave        | leave/viewLeaveList                         |
		    | Time        | Time         | time/viewEmployeeTimesheet                  |
		    | My Info     | My Info      | pim/viewPersonalDetails/empNumber/7         |
		    | Performance | Performance  | performance/searchEvaluatePerformanceReview |
		    | Directory   | Directory    | directory/viewDirectory                     |
		    | Maintenance | Maintenance  | maintenance/purgeEmployee                   |
		    | Buzz        | Buzz         | buzz/viewBuzz                               |
	
	#GX2-508
	@TC_GX2-517 @TS_GX2-509 @Gherkin
	Scenario Outline: 509 | TC2:  Check Not finding categories when search bar text is NOT matching categories
		When admin enters a text that it's not matching into the Search Bar input as '<searchText>'
		Then the panel should NOT display any category because the input text is not matching
		Examples:
		    | searchText |
		    | AdminX     |
		    | My  Info   |
		    | xDirectory |
		    | 123        |
		    | 0          |
		    | ""         |
