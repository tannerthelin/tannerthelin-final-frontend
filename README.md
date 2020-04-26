# :space_invader: Video Game Logger - Frontend
The frontend for my **GraphQL server with JavaScript (Node.js)**. Allows the user to store a database of the video games they've recently played, the system they played on, and the date they completed it. :video_game:

<br/>

## How to use

### 1. Clone the repo for the backend and get it running
Go clone [this repository](https://github.com/tannerthelin/Game-Logger-GraphQL) and follow the instructions to get it started.

### 2. Clone this repository and install package modules
Run these commands:
```
git clone https://github.com/tannerthelin/tannerthelin-final-frontend.git
npm install
```

## 3. Serve the frontend
```
npm run serve
```
Then, navigate to [http://localhost:8080/ ](http://localhost:8080/ ) and if you've started the backend correctly, the frontend should be pulling the GraphQL game data.


<br/>

## Project Specifications
### GraphQL
1. **GraphQL: Get All Games:** On the homepage (titled *"GraphQL: Get ALl"*), the component is pulling in all of the game data from my GraphQL server and organizing them into cards.
2. **GraphQL: Get One Game:** Copy one of the game IDs from the *"Get All"* page and then click on the *"Get One Game"* tab. Paste the id to retrieve that game.
3. **GraphQL: Search Games:** Head to the *"Search Games"* tab and mess around with the search functionality there.
4. **GraphQL: Create a Game:** Click on the *"Edit GraphQL"* tab and fill out the "Create a New Game" form. Click the "Create Game" button and then head back to the *Search* page. Refresh the page and you should see the game you just created.
5. **GraphQL: Update a Game:** Copy any game's ID and then go back to the *"Edit GraphQL"* page. Paste the id into the "Update a Game's Title" form and then in the next field, write the new title you want for that game. Click "Update Game" and then head back to the *Search* page to see your results. You may have to refresh for your changes to appear.
6. **GraphQL: Delete a Game:** Finally, copy one more ID and head back to the *"Edit GraphQL"* page. Paste it into the "Delete an Item" form and click the "Delete Game" button to confirm. Head back to the *Search* page and then refresh your browser. If you search for the game you deleted, it won't be there. Because you deleted it.  

<br/>

### Rest API
1. **Rest API: Get Data:** Head to the *"Rest API"* tab and click the `Get Data` button. It should populate a list of all of the games from the local store. 
2. **Rest API: Create a Game:** Open the *"Create a Game"* panel and fill out the form to create a new game. It should instantly appear on the list.
3. **Rest API: Delete a Game:** Click the delete icon on any of the games to delete them from the local database.
3. **Rest API: Update a Game:** Open the *"Update a Game"* panel, and then click the little "edit" icon next to any of the games. The game data should populate the *"Update a Game"* panel, and you can make changes and then press the `Update` button to confirm.
