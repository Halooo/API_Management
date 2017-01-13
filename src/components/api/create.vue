<template>
	<div>
		<div class="m-middle">
			<div class="detail">
				<div class="item">
					<p class="title"># API Name</p>
					<div class="main_form">
						<span class="iconfont required">&#xe600;</span>
						<input type="text" placeholder="Please enter API Name" v-modal="apiDetail.name"></input>
					</div>
				</div>
				<div class="item">
					<p class="title"># API description</p>
					<div class="main_form">
						<textarea maxlength="200" placeholder="Please enter API description" v-modal="apiDetail.descr"></textarea>
						<div class="char_num">/200</div>
					</div>
				</div>
				<div class="item" >
					<p class="title"># Creator</p>
					<div class="main_form">
						<input type="text" disabled="disabled" v-modal="apiDetail.creator"></input>
					</div>
				</div>
				<div class="item" >
					<p class="title"># Last Time Edited</p>
					<div class="main_form">
						<input type="text" disabled="disabled" v-modal="apiDetail.modify_time"></input>
					</div>
				</div>
				<!--<div class="item" >-->
				<!--<p class="title"># Project</p>-->
				<!--<div class="main_form">-->
				<!--<input type="text" disabled="disabled"></input>-->
				<!--</div>-->
				<!--</div>-->
				<div class="item">
					<p class="title"># URL</p>
					<div class="main_form">
						<span class="iconfont required">&#xe600;</span>
						<input type="text" placeholder="Please Enter URL" v-modal="apiDetail.url"></input>
					</div>
				</div>
				<div class="item">
					<p class="title"># Request Method</p>
					<div class="main_form">
						<span class="iconfont required">&#xe600;</span>
						<select v-modal="apiDetail.method">
							<option value="get">GET</option>
							<option value="post">POST</option>
							<option value="put">PUT</option>
							<option value="delete">DELETE</option>
						</select>
					</div>
				</div>
				<div class="item">
					<p class="title"># finised</p>
					<div class="main_form">
						<select v-modal="apiDetail.finish">
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</div>
				</div>
				<div class="item">
					<p class="title"># Request Params</p>
					<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >Add One</a>
					<div class="main_form full_width"  >
						<input type="text" placeholder="Key" v-modal="apiDetail.reqparam.key">
						<select v-modal="apiDetail.reqparam.type">
							<option>Variable Type</option>
							<option value="String">String</option>
							<option value="Number">Number</option>
							<option value="Boolean">Boolean</option>
							<option value="Object">Object</option>
							<option value="Array">Array</option>
						</select>
						<input type="text" placeholder="description" v-modal="apiDetail.reqparam.descr">
						<select v-modal="apiDetail.reqparam.required">
							<option value="0">Optional</option>
							<option value="1">Required</option>
						</select>
						<span class="iconfont del" >&#xe607;</span>
					</div>
				</div>
				<div class="item">
					<p class="title"># Request Example</p>
					<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					<div class="main_form full_width"  >
						<textarea placeholder="Please enter request example" v-modal="apiDetail.reqeg"></textarea>
						<span class="iconfont del" >&#xe607;</span>
					</div>
				</div>
				<div class="item">
					<p class="title"># Return</p>
					<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					<div class="main_form full_width"  >
						<input type="text" placeholder="Key" >
						<select >
							<option>Variable Type</option>
							<option value="String">String</option>
							<option value="Number">Number</option>
							<option value="Boolean">Boolean</option>
							<option value="Object">Object</option>
							<option value="Array">Array</option>
							<option value="Null">Null</option>
						</select>
						<input type="text" placeholder="description" >
						<span class="iconfont del" >&#xe607;</span>
					</div>
				</div>
				<div class="item">
					<p class="title"># Response Example<span style="font-size: 12px;font-weight: normal;">(checked one will be the one returned)</span></p>
					<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					<div class="main_form full_width"  >
						<input type="checkbox"  >
						<textarea placeholder="Please enter response example"  @blur="formatResExample($index)"></textarea>
						<span class="iconfont del" >&#xe607;</span>
					</div>
				</div>
				<div class="item">
					<p class="title"># Notes: </p>
					<div class="main_form default_char">
						<textarea id="remark" placeholder="Please enter additional notes" style="height: 300px;" ></textarea>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
</style>
<script type="text/babel">
	export default{
		name: 'api',
		data(){
			return{
				apiDetail: {
					name: '',
					descr: '',
					creator: 'hao',
					modify_time: '',
					url: '',
					method: 'get',
					finish: 0,
					urlparam: '',
					reqparam: [],
					// reqparam: {
					// 	key: '',
					// 	type: '',
					// 	descr: '',
					// 	required: 0
					// },
					reqeg: '',
					resparam: [],
					// resparam: {
					// 	key: '',
					// 	type: '',
					// 	descr: '',
					// },
					reseg: []
				},
			}
		},
		components:{

		}
	}
</script>
