# 03 JavaScript: Password Generator

## Your Task

This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## My Work
* By click the button to generate a password:
  * Ask user to inter the length of password
    * If the value is not a valid number(not a umber or length of the password is leass than 8 or more than 126, show a message to user as you can see bellow:
     ![The Password Generator application displays a red button to "Generate Password".](./Assets/error-1.png)
  
  * After choosing a valid length, it ask user to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    * if user does not confirm any criteria, it shows the user a message to at least confirm one criteria. as you can see bellow:
  
    ![The Password Generator application displays a red button to "Generate Password".](./Assets/error-2.png)

  *  WHEN the user answer each prompt, a password is generated that matches the selected criteria
  *  The password  displayed the page as you can see bellow:
  
   ![The Password Generator application displays a red button to "Generate Password".](./Assets/password-generator.png)
  

*  GitHub repository name: Password-Generator-March-31
*  The URL to the website is: https://saghar-b.github.io/Password-Generator-March-31/
*  The URL of the GitHub repository : https://github.com/saghar-b/Password-Generator-March-31
