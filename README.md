# JavaScript: Password Generator

## Description

The purpose of this project is to add functionallity to an exisiting web application.  Code will be added so that pushing a "generate" button prompts the user to answer questions about their password requirements.  These requirements will include password length and required characters such as lower-case, upper-case, numbers, and special.  A password will then be displayed on the screen according to the user's needs.

## Steps Taken

1.  Created four arrays to contain requirement variables:
* Lower
* Upper
* Number
* Special

2. Added a getRandomInt function.

3. Created primary function to prompt questions and generate a password.  Questions have their inputs verified, to confirm valididity.  It is also confirmed that at least one requirement is selected.  Once this is done, all selected requirement arrays are added to a master arrary.  This is used in the next function to generate a password.  It pulls a random character from the master array for each character, over the length of the password.

4. Linked functions to writePassword(), allowing the generate button to trigger the generatePassword function and for the final password to be displayed on the screen.

## Picture of Website

![Picture of Horiseon Webpage](./Assets/Images/03-javascript-working-project.png)