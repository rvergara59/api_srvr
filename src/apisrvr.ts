// -----------------------------------------
// Basic API server using NodeJS and Express
// Author: Rene Vinicio Vergara Araque
// Language: TypeScript
// -----------------------------------------
import express, {Request,Response,Application} from 'express';

// ------------------------------------------------------------
// Mock data for testing
// ------------------------------------------------------------
type DType = {
	country: string;
	city: string;
};

const data : DType[] = [ {country:'United States', city:'Washington'},
						 {country:'Mexico', city:'Mexico'},
						 {country:'France', city:'Paris'},
						 {country:'England', city:'London'}
					   ];

// -------------------------------------------------------------
//  Initialize the server
// -------------------------------------------------------------
const app:Application = express();
const PORT = process.env.PORT || 3000;

// -------------------------------------------------------------
// Main entry point, URL must be tailored to application requirements
// -------------------------------------------------------------
app.get('/',(req:Request, resp:Response): void  => {
  // Process main page
  resp.status(200).send('Main page loaded'); 
});

// -------------------------------------------------------------
// Process API Cals here
// -------------------------------------------------------------
app.get('/data',(req:Request, resp:Response): void  => {
  // Process GET requests here...
  console.log('Body ' + req.query);
  resp.status(200).send('Data requested to API -> ' + JSON.stringify(data)); 
});

app.post('/data', (req:Request, resp:Response): void => {
  // Process POST requests here...
  console.log('Post query' + JSON.stringify(req.query));
  resp.status(2send('Post response is on the way...(maybe...)\n' + 
  	        JSON.stringify(req.query));
});

// -------------------------------------------------------------
// Catch all requests
// -------------------------------------------------------------
app.get('*', (req:Request, resp:Response): void =>{
  // GET not recognized
  resp.status(404).send('Page not found!!!');
})

app.post('*', (req:Request, resp:Response): void =>{
  // POST not recognized
  resp.status(404).send('POST not allowed for requested endpoint!!!');
})

// --------------------------------------------------------------
// Start API Server
// --------------------------------------------------------------
app.listen(PORT, ():void => {
	console.log('Basic API Server listening on Port:'+PORT+
				'\nTypeScript Version'+
		        "\nPress Ctrl-C to exit");
});
