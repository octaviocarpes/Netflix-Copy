# Frontend-Engineer-Test
ilegra's Software Engineer test.

#### To run the project locally:
`cd netflix-test && yarn install && yarn start`

#### Documentation:

<p>
The stack used to this test is:
  <ul>
    <li>Vue.js</li>
    <li>Vuex</li>
    <li>Vue Router</li>
    <li>Sass</li>
    <li>ESLint</li>
    <li>Jest</li>
  </ul>
The challenge: create a Netflix clone making the users data persistent and creating a metrics page to view all the metrics data gathered.

Also there is some requirements to pass the test, 90% of the test is based into front-end skills and the another 10% is based on devops engineering. 

These are the requirements to pass in the exam:
  <ul>
    <li>Use Vue, Angular or React;</li>
    <li>Use Graphql in one endpoint;</li>
    <li>Have at least one controller with LODASH and functiona programming;</li>
    <li>Create and manage all the data structures in memory, which means it need to be persistent;</li>
    <li>Tests, unit and E2E;</li>
    <li>Deployment with Docker;</li>
    <li>CI with jenkins;</li>
  </ul>

To keep the data saved locally i used a lib called `local-storage` and created a "Schema" for storing the users and movies data.
This schema is what persists the data. 
</p>
