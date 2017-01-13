/**
 * Created by haos on 13/01/2017.
 */

var router = require('koa-router')();
router.get('/', async function (ctx, next) {
	// ctx.state = {
	// 	title: 'koa2 title'
	// };
	// await ctx.render('index', {
	// });
	console.log("context:\n",ctx);
});
module.exports = router;

