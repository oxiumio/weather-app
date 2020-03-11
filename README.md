
## Available Scripts

In the project directory, you can run:

### `npm run client`
Runs the React on http://localhost:3000<br />

### `npm run server`
Runs Express server on http://localhost:4000<br />

### `npm run dev`
Concurrently runs React and Express apps<br />
React requests are proxied to Express server port<br />

### `npm start`
Runs Express app serving build/index.html<br />

### Attention!
Proper functionality requires .env file with `REACT_APP_DARK_SKY_API`<br />
and `REACT_APP_GCP_API` (make sure GCP key has access to Geocoding API )