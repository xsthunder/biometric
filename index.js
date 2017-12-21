const express = require( 'express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.static( __dirname+'/public'));
app.use(express.static( __dirname+'/node_modules'));
app.use( bodyParser.urlencoded( {extened:true})) ;
let user = [];
let content = [];
app.get('/hello', (req,res)=>{
	res.send('hello');
});
let good = (msg)=>{
	return {
		err:0,
		msg:msg
	};
};
let bad = (msg,type)=>{
	return {
		err:type||1,
		msg:msg
	};
};
app.use( (req,res,next)=>{
	console.log(req.body);
	next();
});
app.post('/login', (req,res)=>{
	let ans = user.find( o => o.face_token === req.body.face_token );
	console.log(ans);
	if( !ans ){
		res.json(bad("user not found", 2));
	}
	else res.json(good("welcome " + ans.nickname));
});
app.post('/add-user', (req,res)=>{
	user.push( {
		nickname:req.body.nickname,
		face_token:req.body.face_token
	});
	res.json(good(`user ${req.body.nickname} added`));
});
app.post('/msg',( req,res)=>{
	content.push({
		nickname:req.body.nickname,
		msg:req.body.msg
	})
	res.json(good("message added"));
});
app.get('/msg', (req,res)=>{
	res.json(content);
});
let port = 8080;
console.log("lisening on "+port);
app.listen(8080);
