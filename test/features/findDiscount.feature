Feature: Find Discount

Scenario: As a user I want to go to the 'Trending Now Offers' page and select the 6th discount in the list
  Given I am on the studentbeans homepage
  And I click on "Trending Now"
  When I select the sixth discount in the list
  Then I should be taken to that discount to view more information

