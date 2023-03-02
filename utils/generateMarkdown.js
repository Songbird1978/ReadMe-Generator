//importing moment.js for date in license - install npm i moment.js

import moment from 'moment';

//function to create the badges for the license

function createLicenseBadge(license) {

  if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } 
  if (license == "creative commons") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if (license == "apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } 
  
  return "";
}


// function to generate markdown for README and links to all areas of the project
function generateMarkdown(response) {

  return `
  
# ${response.name}

${createLicenseBadge(response.license)}

# Table of Content <br>
-[Description](#Description) <br>
-[Challenges](#Challenges)<br>
-[FutureDevelopment](#Future)<br>
-[Installation](#Installation)<br>
-[Usage](#Usage)<br>
-[Licenses](#Licenses)<br>
-[Credits](#Credits)<br>
-[Contribution](#Contribution)<br>
-[Tests](#Tests)<br>
-[Username](#Username)<br>
-[Repo](#Repo)<br>
-[Questions](#Questions)<br>

   
## Description:<br> 

${response.description}<br>

## Challenges:<br> 

${response.challenges}<br>

## Future Ideas:<br> 

${response.future}<br>

## Installation:<br>  

${response.installation}
   
## Usage: <br> 

${response.usage}
   
## Licenses:<br> 

This application is licensed under : ${response.licenses}

Copyright ${moment().format("YYYY")} ${response.fullName}

Licensed under the ${response.licenses} (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

${createLicenseBadge(response.license)}  

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


## Credits:<br> 

${response.credits}
  
## Contribution: <br> 

${response.contributions}
  
## Tests:<br> 

${response.tests}

## Username:<br> 

${response.username}<br> 
  
## Profile: <br> 

${response.profile}<br> 

## Questions:<br> 

If you have any questions about this project, please contact me at ${response.questions}.
`;

}

export { generateMarkdown };



