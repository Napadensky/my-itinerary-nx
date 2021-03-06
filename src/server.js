const cityRouter = require('./routers/city.router');
const app = require('./config');

app.use('/cities', cityRouter)
app.use( (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({message:'Something broke!', ERROR:err.message});
});


app.listen(app.get('port'))
console.log(`===== host http://localhost:${app.get('port')} ======`);
console.log(process.env.NODE_ENV);