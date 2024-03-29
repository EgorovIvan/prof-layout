const express = require('express');
const fs = require('fs');
const app = express();
const cart = require('./cartRouter');
const cors = require('cors');
const corsOptions ={
	origin:'*',
credentials:true,
	optionSuccessStatus:200,
}

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);
app.use(cors(corsOptions));

app.get('/api/products', cors(corsOptions), (req, res) => {
	fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
		if(err){
			res.sendStatus(404, JSON.stringify({result:0, text: err}));
		} else {
			res.send(data);
		}
	})
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));