// function to generate markdown for README
function generateMarkdown(response) {
  return `
  
# ${response.name}

# Table of Content
-[description](#description)
-[challenges] (#challenges)
-[future development] (#future)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[credits](#credits)
-[contribution](#contribution)
-[tests](#tests)
-[username](#username)
-[repo](#repo)
-[questions](#questions)

   
##Description:  ${response.description}

##Challenges: ${response.challenges}

##Future Ideas: ${response.future}

##Installation:  ${response.installation}
   
##Usage:  ${response.usage}
   
##licenses: ${response.licenses}

##credits: ${response.credits}
  
##contribution:  ${response.contributions}
  
##test:  ${response.test}

##username: ${response.username}
  
##profile:  ${response.profile}

##questions: If you have any questions about this project, please contact me at ${response.questions}
`;

}

export {generateMarkdown};


