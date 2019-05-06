# Frontend-Engineer-Test
ilegra's Software Engineer test.

#### To run the project locally:
`cd netflix-test && yarn install && yarn start`

#### To build for production
`yarn build`

#### To access the production site
<a href="http://34.74.246.167:9000/">http://34.74.246.167:9000/</a>

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
    <li>Cypress</li>
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
    <li>CI with Jenkins;</li>
  </ul>

#### CI and Hosting
In this project the continuous integration was made with a Jenkins, hosted on a Google Cloud Platform (GCP) Compute Engine, and the Github webhook. The application, front-end, is also in a GCP Compute Engine, running in NGINX server on a Docker container.

#### Data persistency
To keep the data saved locally i used a lib called `local-storage` and created a "Schema" for storing the users and movies data.
This schema is what persists the data. Also i created a `Storage`, which is the feature in charge of saving new users, and their sessions, and storing the metrics.

#### Metrics
The metrics are managed by two types of files, the `metrics.service` and the `metrics.controller`, the `metrics.service` is responsible for telling the `Storage` to store the necessary metric data, while the `metrics.controller` is responsible to ask the `Storage` for data and manipulate it as necessary, something like retrieving the movie with most views.

#### API Data
To create an experience similar to a Netflix app, i used the Youtube Data API v3 to get the trailers and movies that the users can see throughout the app.

#### State Management and Data Flow
The state management was made with Vuex, the whole data flow begins in the requests made by the components and, when the response arrive, the data is then passed to the Vuex, making it flow through only one direction.

#### Good things!
While doing this test i have learned a lot of new things, i have never used the `localStorage`, except for saving a user token or something like that, as so much that i had used in this project, it was kinda messy but i tried to organize it in some way i would not get so lost. 

Continuous Integration with Jenkins and Github, after some time i managed to make the deployment automatic, when there is a commit in the master branch the webhook i created notify the Jenkins so it can start the deployment job.
Realizing that i am capable of creating an webapp like this.

#### Pain points
Throughout the project creation i saw myself refactoring the code a lot of times, i think it was because of the project complexity, time and not thinking in the right way before start coding.

Very few unit tests, the only tests i created were snapshot tests for the components, so i think i've should dedicated more time for the tests.

The E2E tests were failing and i hadn't figured out why. Hope someone can help me in this part.

And last but not least, the data persistency, as the app grew i found myself getting tangled while trying to sotre and retrieve the data from the `localStorage`, this made me create a lot of bad functions while making those get and save operations.
</p>
