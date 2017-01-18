/**
 * Created by haos on 16/01/2017.
 */
var router = require('koa-router')();
var koaBody = require('koa-body')();

router.post('/', koaBody, function *(next) {
	console.log("context:\n",this.request.body);
	this.body = {
		"status": "success",
		"data": {
			"agent_id": "agent@example.com",
			"created": "2016-12-22T20:54:30.480Z",
			"private_ip_address": "173.241.44.4",
			"session_id": "e6ca8705-0a0e-4a05-9c0a-42b946b8997b"
		}
	}
});
router.get('/', function *(next) {
	console.log("context:\n",this);
	this.body = {
		"status": "success",
		"data": {
			"session_id": "e6ca8705-0a0e-4a05-9c0a-42b946b8997b",
			"token_id": "furry-snake",
			"state": "new",
			"url": "https://.../sessions/:session_id/tokens/:token_id"
		}
	}
});

module.exports = router;
