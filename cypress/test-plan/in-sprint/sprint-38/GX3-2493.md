```
Feature: Delete Post

    Background:
      Given that the admin user is logged in
      And the admin user is located in the "Buzz" section

    Scenario 1: the admin tries to delete a post
      Given that the admin user clicks in the three dots menu
      When the admin clicks on "Delete Post"
      Then a pop up should be displayed
      And the admin be able to click on "Yes, Delete" button
      Or admin be able to click on "No, Cancel" button

    Scenario 2: the admin delete a post
      Given that the admin is in the pop up
      When the admin clicks on "Yes, Delete" button
      Then a friendly message should be displayed as a success action: "Successfully Deleted"
      And the post should not be visible

    Scenario 3: the admin cancel deleting post
      Given that the admin is on the pop up
      When the admin clicks on "No, Cancel" button
      Then the pop up should close
      And the post should still be visible
```
