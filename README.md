

### `Dependencies/Libraries used `

[React JS(UI)](https://reactjs.org/docs/getting-started.html),
[axios( http API Calls)](https://www.npmjs.com/package/axios),
[Redux( satate management)](https://redux.js.org/introduction/getting-started),
[Bootstrap3.7](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js), <br>
[jQuery3.3](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js),
[Fontawsome](https://fontawesome.com/v4.7.0/icons/), 
[Materialize](https://materializecss.com/getting-started.html),
[reactRouter](https://www.npmjs.com/package/react-router-dom)
[npm](https://www.npmjs.com/)
[auth0](https://auth0.com/docs)


### `Steps to create Project & add all dependencies in Ubntu18.04>`

`Install nodejs npm ` <br>
From the step by step Guide described here [Installation of Node JS on Window](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/)


`Install nodejs npm npx` <br>
sudo apt update<br>
sudo apt install nodejs npm<br>
sudo apt install npm<br>

Download full codebase with public & src folder<br>

using terminal cd to ReactApp then run npm start<br>
open http://localhost:3000/ to run app again.

shortcut way is just download whole project install npm >go inside project directory > npm start

`Libraries & framework` <br>

npm install axios<br>
npm install --save react-router-dom<br>
npm install redux react-redux<br>
npm install auth0<br>
npm install jquery --save

The following cdns are included in index.html via scipt/links
[Bootstrap3.7](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js),
[jQuery3.3](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js),
[Fontawsome](https://fontawesome.com/v4.7.0/icons/), 
[MaterializeCSS/Js](https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css)<br>

replace src folder in react-app with my src folder to get code & resources<br>


## `Auth0 Authorization Credentials`

Impemented User Sign in page(Authorizartion via integrating .[auth0](https://auth0.com/docs) )
Auth0 provides authentication and authorization as a service to make application secure


`email -testdhirensapp@react.com`<br>
`password-  123456789@Dps`


### Features

1. Impemented User Sign in page(Authorizartion via .auth0 )Auth0 provides authentication and authorization as a service to make application secure.
2. Implemented  Routing mechanism- Navigation to different pages
3. Navigation bar
4. Home page with tab swithing & progressbar
5. List of cards- in Cards tab
6. Used mock API calls for actions like Update, Delete, Add, View details- https://jsonplaceholder.typicode.com/
7. Implemented Redux store for central state mananagement on C.U.R.D operations
8. Implemented React portal usage
9. Delete action- icon on top left of each card
10. Edit action- icon on top right of each card
11. Add action: bottom right of Home window
12. Implemented Modals on all actions.
13. Implemented Pagination for lazy loading with throttling
13. Search action with -ve handling
14. Bi-directional Sort action- beside page title
15. Card Details page when clicked on image
16. View full size action
17. Loader effect for async transitions 
18. Full Responsiveness compatiblity with mobile
19. Left sliding menu for mobile

20. Post list page with animation clicking on any post opens Post Details fetched via API call
21. My Portfolio 



### `Priviews`

Login page

![Screenshot from 2019-05-11 16-47-08](https://user-images.githubusercontent.com/32532380/57568986-8b7a7a00-740c-11e9-852b-a7858d5882d0.png)

Navication menu for Desktop & Mobile slider menu, Todo App at home location
![pjimage](https://user-images.githubusercontent.com/32532380/123931713-65c6db00-d9ae-11eb-9686-d8eeb94d7b6b.jpg)


Fully Responsived Cards component for desktop, mobile, ipad viewports. Real time data from placeholder API
![pjimage (2)](https://user-images.githubusercontent.com/32532380/123932119-c1916400-d9ae-11eb-9ddb-c5dff30d2676.jpg)


Loader as fallback UI, Sort Cards in Ascending, Descending, Back to original list
![pjimage (3)](https://user-images.githubusercontent.com/32532380/123932296-ee457b80-d9ae-11eb-9598-589d242b2781.jpg)


Edit card details, Delete card
![pjimage (4)](https://user-images.githubusercontent.com/32532380/123932523-2947af00-d9af-11eb-8fcb-a670ff6cedeb.jpg)

Search card,  Add new card
![pjimage (5)](https://user-images.githubusercontent.com/32532380/123932787-657b0f80-d9af-11eb-9cb5-2a567472095c.jpg)


Responsive Card Details
![pjimage (6)](https://user-images.githubusercontent.com/32532380/123932885-80e61a80-d9af-11eb-8704-2e6d9ec726c8.jpg)

Actions view ful size
![Screenshot from 2019-05-11 16-38-16](https://user-images.githubusercontent.com/32532380/57569106-d21ca400-740d-11e9-9b62-a2c37fab68e6.png)


Auto Pagination on scroll
<img width="958" alt="Screenshot 2021-06-30 133049" src="https://user-images.githubusercontent.com/32532380/123933250-d0c4e180-d9af-11eb-813f-c02d96b5df5e.png">



Post list Responsive layouts
![pjimage (7)](https://user-images.githubusercontent.com/32532380/123933405-fce06280-d9af-11eb-88da-46e2070607cf.jpg)


Post Details
<img width="251" alt="Screenshot 2021-06-30 133621" src="https://user-images.githubusercontent.com/32532380/123933564-213c3f00-d9b0-11eb-9a03-91bc2af2b29e.png">

Contact- CV- Portfolio 
![pjimage (8)](https://user-images.githubusercontent.com/32532380/123933671-37e29600-d9b0-11eb-9d29-33d4fb1aa86f.jpg)





