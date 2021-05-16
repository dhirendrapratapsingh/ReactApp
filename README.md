

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

`shortcut way is just download whole project install npm >go inside project directory > npm start`

`Install nodejs npm npx` <br>
sudo apt update<br>
sudo apt install nodejs npm<br>
sudo apt install npm<br>

npm install -g npx<br>
npx create-react-app [react-app/YourAppName]<br>
cd react-app<br>
npm start<br>

Then open http://localhost:3000/ to see your app.<br>
stop ctrl+c to add dependencies

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

npm start<br>
open http://localhost:3000/ to run app again.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `Auth0 Authorization Credentials`

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
6. mock API used calls for actions- https://jsonplaceholder.typicode.com/
7. Implemented Redux store for central state mananagement on C.U.R.D operations
8. Implemented React portal usage
9. Delete action- icon on top left of each card
10. Edit action- icon on top right of each card
11. Add action: bottom right of Home window
12. Implemented Modals on all actions.
13. Search action with -ve handling
14. Bi-directional Sort action- beside page title
15. Card Details page when clicked on image
16. View full size action
17. Loader effect for async transitions 
18. Full Responsiveness compatiblity with mobile
19. Left sliding menu for mobile

20. Post list page with animation clicking on any post opens Post Details fetched via API call

21. My Portfolio 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `Priviews`

<!-- <img src="src/screenshots/image1.png" width="700px"> -->


<!-- ![Screenshot from 2019-05-02 12-00-39](https://user-images.githubusercontent.com/32532380/57061135-78afc900-6cd9-11e9-94a4-7a6f26850beb.png)

![Screenshot from 2019-05-02 12-01-43](https://user-images.githubusercontent.com/32532380/57061137-78afc900-6cd9-11e9-8445-17115cd68e3e.png)

![Screenshot from 2019-05-02 12-01-59](https://user-images.githubusercontent.com/32532380/57061138-79485f80-6cd9-11e9-84a9-c33e09e9a8cd.png)

![Screenshot from 2019-05-02 12-02-20](https://user-images.githubusercontent.com/32532380/57061139-79485f80-6cd9-11e9-8f0b-451366024f1f.png)

![Screenshot from 2019-05-02 12-02-43](https://user-images.githubusercontent.com/32532380/57061140-79485f80-6cd9-11e9-8f41-594cac0b4f43.png)

![Screenshot from 2019-05-02 12-44-47](https://user-images.githubusercontent.com/32532380/57061141-79e0f600-6cd9-11e9-80f1-a8bbc8a8eed7.png)

![Screenshot from 2019-05-02 12-52-55](https://user-images.githubusercontent.com/32532380/57061143-79e0f600-6cd9-11e9-9e5c-f8b53a221a7c.png)

 -->
Login page

![Screenshot from 2019-05-11 16-47-08](https://user-images.githubusercontent.com/32532380/57568986-8b7a7a00-740c-11e9-852b-a7858d5882d0.png)

Home Bill details tabs & Delivery status progress

![Screenshot from 2019-05-11 16-24-39](https://user-images.githubusercontent.com/32532380/57569005-f4fa8880-740c-11e9-85e3-2f55c80fda98.png)
![Screenshot from 2019-05-11 16-25-08](https://user-images.githubusercontent.com/32532380/57569006-f4fa8880-740c-11e9-879a-eba74207f441.png)
![Screenshot from 2019-05-11 16-26-41](https://user-images.githubusercontent.com/32532380/57569008-f4fa8880-740c-11e9-94cc-ba416571bba0.png)

sliding Menu for mobile phones
![Screenshot from 2019-05-11 16-39-16](https://user-images.githubusercontent.com/32532380/57569147-54a56380-740e-11e9-83b2-12ee10bd694b.png)


Cards
![Screenshot from 2019-05-11 16-28-06](https://user-images.githubusercontent.com/32532380/57569023-26735400-740d-11e9-83d2-4668cbe6e4fe.png)

Sort Cards in Ascending, Descending, Back to original list

![Screenshot from 2019-05-11 16-28-06](https://user-images.githubusercontent.com/32532380/57569033-4e62b780-740d-11e9-88b4-f427a40e320e.png)

Search card
![Screenshot from 2019-05-11 16-28-42](https://user-images.githubusercontent.com/32532380/57569038-5c183d00-740d-11e9-8b5b-9d30b89872f2.png)

Edit carddetails
![Screenshot from 2019-05-11 16-29-20](https://user-images.githubusercontent.com/32532380/57569068-73efc100-740d-11e9-9e56-7e8d8888561a.png)

Delete card
![Screenshot from 2019-05-11 16-29-37](https://user-images.githubusercontent.com/32532380/57569083-85d16400-740d-11e9-9328-11896006e778.png)

Add new card
![Screenshot from 2019-05-11 16-30-21](https://user-images.githubusercontent.com/32532380/57569087-9550ad00-740d-11e9-926f-c2920fb0ee3d.png)

Ipad/ Mobile layouts
![Screenshot from 2019-05-11 16-31-54](https://user-images.githubusercontent.com/32532380/57569091-ab5e6d80-740d-11e9-85e7-8db9d0ef1fd3.png)
![Screenshot from 2019-05-11 16-34-54](https://user-images.githubusercontent.com/32532380/57569092-ab5e6d80-740d-11e9-879f-0430f2389abe.png)

Card Details
![Screenshot from 2019-05-11 16-37-23](https://user-images.githubusercontent.com/32532380/57569098-bc0ee380-740d-11e9-9e17-28cdce3bdcad.png)

Actions view ful size
![Screenshot from 2019-05-11 16-38-16](https://user-images.githubusercontent.com/32532380/57569106-d21ca400-740d-11e9-9b62-a2c37fab68e6.png)

Loader
![Screenshot from 2019-05-11 16-43-32](https://user-images.githubusercontent.com/32532380/57569116-e95b9180-740d-11e9-8dec-19ec77ae3def.png)

Auto Pagination on scroll
![Screenshot from 2019-05-11 16-44-58](https://user-images.githubusercontent.com/32532380/57569135-1c058a00-740e-11e9-8674-c0b5d95f3d4f.png)


Negative search handling
![Screenshot from 2019-05-11 16-43-19](https://user-images.githubusercontent.com/32532380/57569123-02644280-740e-11e9-82b6-3de5754e55f2.png)


Post list Responsive layouts
![Screenshot from 2019-05-11 16-36-41](https://user-images.githubusercontent.com/32532380/57569156-828aa800-740e-11e9-9783-84af5a465e60.png)
![Screenshot from 2019-05-11 16-39-23](https://user-images.githubusercontent.com/32532380/57569157-828aa800-740e-11e9-9648-18e5557c7941.png)

Post Details
![Screenshot from 2019-05-11 16-40-26](https://user-images.githubusercontent.com/32532380/57569160-92a28780-740e-11e9-9710-3b8029af85c5.png)

Contact- CV/Portfolio 
![Screenshot from 2019-05-11 16-40-09](https://user-images.githubusercontent.com/32532380/57569172-ae0d9280-740e-11e9-8c5d-38374f6a6e75.png)






