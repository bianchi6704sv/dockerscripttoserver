const Koa = require('koa')

const app = new Koa()

app.use((ctx) => {
					ctx.body = '<h1>Este é o servidor</h1>'
				 })
				 
app.listen(3000)