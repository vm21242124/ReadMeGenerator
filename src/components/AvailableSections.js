import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs

export const availableSections = [
    {
      id: 1,
      title: 'Project Title',
      content: '# Project Title\n\nA brief description of what this project does and who it\'s for\n\n'
    },
    {
      id: 2,
      title: 'API Reference',
      content: `## API Reference
  
  #### Get all items
  
  \`\`\`http
    GET /api/items
  \`\`\`
  
  | Parameter | Type     | Description                |
  | :-------- | :------- | :------------------------- |
  | \`api_key\` | \`string\` | **Required**. Your API key |
  
  #### Get item
  
  \`\`\`http
    GET /api/items/\${id}
  \`\`\`
  
  | Parameter | Type     | Description                       |
  | :-------- | :------- | :-------------------------------- |
  | \`id\`      | \`string\` | **Required**. Id of item to fetch |
  
  #### add(num1, num2)
  
  Takes two numbers and returns the sum.
  `
    },
    {
      id: 3,
      title: 'Appendix',
      content: '## Appendix\n\nAny additional information goes here\n\n'
    },
    {
      id: 4,
      title: 'Authors',
      content: '## Authors\n\n- [@octokatherine](https://www.github.com/octokatherine)\n\n'
    },
    {
      id: 5,
      title: 'Color Reference',
      content: `## Color Reference
  
  | Color             | Hex                                                                |
  | ----------------- | ------------------------------------------------------------------ |
  | Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
  | Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
  | Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
  | Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |\n\n`
    },
    {
      id: 6,
      title: 'Badges',
      content: `## Badges
  
  Add badges from somewhere like: [shields.io](https://shields.io/)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
  [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)\n\n`
    },
    {
      id: 7,
      title: 'Demo',
      content: '## Demo\n\nInsert gif or link to demo\n\n'
    },
    {
      id: 8,
      title: 'Deployment',
      content: `## Deployment
  
  To deploy this project run
  
  \`\`\`bash
    npm run deploy
  \`\`\`\n\n`
    },
    {
      id: 9,
      title: 'Contributing',
      content: `## Contributing
  
  Contributions are always welcome!
  
  See \`contributing.md\` for ways to get started.
  
  Please adhere to this project's \`code of conduct\`.\n\n`
    },
    {
      id: 10,
      title: 'Documentation',
      content: '## Documentation\n\n[Documentation](https://linktodocumentation)\n\n'
    },
    {
      id: 11,
      title: 'FAQ',
      content: `## FAQ
  
  #### Question 1
  
  Answer 1
  
  #### Question 2
  
  Answer 2\n\n`
    },
    {
      id: 12,
      title: 'Environment Variables',
      content: `## Environment Variables
  
  To run this project, you will need to add the following environment variables to your .env file
  
  \`API_KEY\`
  
  \`ANOTHER_API_KEY\`\n\n`
    },
    {
      id: 13,
      title: 'Features',
      content: `## Features
  
  - Light/dark mode toggle
  - Live previews
  - Fullscreen mode
  - Cross platform\n\n`
    },
    {
      id: 14,
      title: 'Github Profile - About Me',
      content: '## 🚀 About Me\nI\'m a full stack developer...\n\n'
    },
    {
      id: 15,
      title: 'Feedback',
      content: '## Feedback\n\nIf you have any feedback, please reach out to us at fake@fake.com\n\n'
    },
    {
      id: 16,
      title: 'Github Profile - Links',
      content: `## 🔗 Links
  [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vm2124.vercel.app)
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/vinodmali01/)
  [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vm2124)\n\n`
    },
    {
      id: 17,
      title: 'Github Profile - Introduction',
      content: '## Hi, I\'m vm2124! 👋\n\n'
    },
    {
      id: 18,
      title: 'Github Profile - Skills',
      content: '## 🛠 Skills\nJavascript, HTML, CSS...\n\n'
    },
    {
      id: 19,
      title: 'Installation',
      content: `## Installation
  
  Install my-project with npm
  
  \`\`\`bash
    npm install my-project
    cd my-project
  \`\`\`\n\n`
    },
    {
      id: 20,
      title: 'License',
      content: '[MIT](https://choosealicense.com/licenses/mit/)\n\n'
    },
    {
      id: 21,
      title: 'Logo',
      content: '![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)\n\n'
    },
    {
      id: 22,
      title: 'Lessons',
      content: `## Lessons Learned
  
  What did you learn while building this project? What challenges did you face and how did you overcome them?\n\n`
    },
    {
      id: 23,
      title: 'Optimizations',
      content: `## Optimizations
  
  What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility\n\n`
    },
    {
      id: 24,
      title: 'Related',
      content: `## Related
  
  Here are some related projects
  
  [Awesome README](https://github.com/matiassingers/awesome-readme)\n\n`
    },
    {
      id: 25,
      title: 'Run Locally',
      content: `## Run Locally
  
  Clone the project
  
  \`\`\`bash
    git clone https://link-to-project
  \`\`\`
  
  Go to the project directory
  
  \`\`\`bash
    cd my-project
  \`\`\`
  
  Install dependencies
  
  \`\`\`bash
    npm install
  \`\`\`
  
  Start the server
  
  \`\`\`bash
    npm run start
  \`\`\`\n\n`
    },
    {
      id: 26,
      title: 'Roadmap',
      content: `## Roadmap
  
  - Additional browser support
  - Add more integrations\n\n`
    },
    {
      id: 27,
      title: 'Screenshots',
      content: '## Screenshots\n\n![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)\n\n'
    },
    {
      id: 28,
      title: 'Tech',
      content: `## Tech Stack
  
  **Client:** React, Redux, TailwindCSS
  
  **Server:** Node, Express\n\n`
    },
    {
      id: 29,
      title: 'Support',
      content: '## Support\n\nFor support, email fake@fake.com or join our Slack channel.\n\n'
    },
    {
      id: 30,
      title: 'Running Tests',
      content: `## Running Tests
  
  To run tests, run the following command
  
  \`\`\`bash
    npm run test
  \`\`\`\n\n`
    },
    {
      id: 31,
      title: 'Usage/Examples',
      content: `## Usage/Examples
  
  \`\`\`javascript
  import Component from 'my-project'
  
  function App() {
    return <Component />
  }
  \`\`\`\n\n`
    },
    {
      id: 32,
      title: 'Used By',
      content: `## Used By
  
  This project is used by the following companies:
  
  - Company 1
  - Company 2\n\n`
    }
  ];
  

  export const selectedSections = [
  {
    id: uuidv4(),
    title: 'Project Title',
    content: '# Project Title\n\nA brief description of what this project does and who it\'s for\n\n'
  },
  {
    id: uuidv4(),
     title: 'Github Profile - Introduction',
      content: '## Hi, I\'m vm2124! 👋\n\n'
  }
];