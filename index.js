const express = require( 'express')
const bodyParser = require('body-parser');

const app = express();
app.use(express.static( __dirname+'/public'));
app.use(express.static( __dirname+'/node_modules'));

// app.use( bodyParser.urlencoded( {extened:true})) ;
// app.use((req,res,next)=>{
// 	res.set('Access-Control-Allow-Origin','*');
// 	res.set('Access-Control-Allow-Methods','GET, POST, PUT')
// 	res.set('Access-Control-Allow-Headers','content-type')
// 	next();
// });
//
// let user = {"08fca83ef14ea236f99594e7cab62dc5":"obama"};
// let content = [];
// app.get('/hello', (req,res)=>{
// 	res.send('hello');
// });
// let good = (msg)=>{
// 	return {
// 		err:0,
// 		msg:msg
// 	};
// };
// let bad = (msg,type)=>{
// 	return {
// 		err:type||1,
// 		msg:msg
// 	};
// };
// app.use( (req,res,next)=>{
// 	console.log(req.body);
// 	next();
// });
// app.get('/user',(req,res)=>{
// 	res.json(user);
// });
// app.post('/user', (req,res)=>{
// 	user[ req.body.face_token ] = req.body.nickname ;
// 	res.json(user);
// });
// app.post('/msg',( req,res)=>{
// 	content.push({
// 		nickname:req.body.nickname,
// 		msg:req.body.msg
// 	})
// 	res.json(content);
// });
// app.get('/msg', (req,res)=>{
// 	res.json(content);
// });
let port = 8080;
console.log("lisening on "+port);
app.listen(8080);
