// -----------------------------------------
// Basic API server using NodeJS and Express
// Author: Rene Vinicio Vergara Araque
// Language: TypeScript
// -----------------------------------------
import express, {Request,Response,Application} from 'express';

const app:Application = express();
const PORT = process.env.PORT || 3000;

// Main entry point, URL must be tailored to application requirements
app.get('/',(req:Request, resp:Response): void  => {
	// Get request processed here...
  resp.send('Main page loaded'); 
});

app.post('/', (req:Request, resp:Response): void => {
	// Post request processed here...
	resp.send('Post response is on the way...(maybe...)')
});

app.listen(PORT, ():void => {
	console.log('Basic API Server listening on Port:'+PORT+
				'\nTypeScript Version'+
		        "\nPress Ctrl-C to exit");
});
