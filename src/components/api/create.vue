<template>
	<div>
		<div class="m-middle">
			<div>
				<el-row>
					<el-col :span="8" class="form-label"><div class="grid-content"># API Name</div></el-col>
					<el-col :span="16">
						<div class="grid-content">
							<el-input type="text" placeholder="Please enter API Name" v-model="apiDetail.name"></el-input>
						</div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># API description</div></el-col>
					<el-col :span="16">
						<el-input type="textarea" autosize maxlength="200" placeholder="Please enter API description" v-model="apiDetail.descr"></el-input>
						<div class="char_num">/200</div>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8" class="form-label"><div class=""># Creator</div></el-col>
					<el-col :span="16">
						<el-input type="text" disabled="disabled" v-model="apiDetail.creator"></el-input>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8" class="form-label"><div class=""># Last Time Edited</div></el-col>
					<el-col :span="16">
						<el-input type="text" disabled="disabled" v-model="apiDetail.modify_time"></el-input>
					</el-col>
				</el-row>
				<!--<el-row :gutter="20">-->
				<!--<div class=""># Project</div>-->
				<!--<el-col :span="16">-->
				<!--<el-input type="text" disabled="disabled"></el-input>-->
				<!--</div>-->
				<!--</div>-->
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># URL</div></el-col>
					<el-col :span="16">

						<el-input type="text" placeholder="Please Enter URL" v-model="apiDetail.url"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># Request Method</div></el-col>
					<el-col :span="16">

						<el-select placeholder="Request Type" v-model="apiDetail.method">
							<el-option value="get">GET</el-option>
							<el-option value="post">POST</el-option>
							<el-option value="put">PUT</el-option>
							<el-option value="delete">DELETE</el-option>
						</el-select>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># finised</div></el-col>
					<el-col :span="16">
						<el-select placeholder="Select" v-model="apiDetail.finish">
							<el-option value="0">No</el-option>
							<el-option value="1">Yes</el-option>
						</el-select>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># Request Params</div>
						<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					</el-col>
					<el-col :span="16"  >
						<el-input type="text" placeholder="Key" v-model="apiDetail.reqparam.key"></el-input>
						<el-select placeholder="Type" v-model="apiDetail.reqparam.type">
							<el-option>Variable Type</el-option>
							<el-option value="String">String</el-option>
							<el-option value="Number">Number</el-option>
							<el-option value="Boolean">Boolean</el-option>
							<el-option value="Object">Object</el-option>
							<el-option value="Array">Array</el-option>
						</el-select>
						<el-input type="text" placeholder="description" v-model="apiDetail.reqparam.descr"></el-input>
						<el-select placeholder="Required?" v-model="apiDetail.reqparam.required">
							<el-option value="0">Optional</el-option>
							<el-option value="1">Required</el-option>
						</el-select>

					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># Request Example</div>
						<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					</el-col>
					<el-col :span="16">
						<el-input type="textarea" autosize placeholder="Please enter request example" v-model="apiDetail.reqeg"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># Response Params</div>
						<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					</el-col>
					<el-col :span="16"  >
						<el-input type="text" placeholder="Key" ></el-input>
						<el-select placeholder="Type" >
							<el-option>Variable Type</el-option>
							<el-option value="String">String</el-option>
							<el-option value="Number">Number</el-option>
							<el-option value="Boolean">Boolean</el-option>
							<el-option value="Object">Object</el-option>
							<el-option value="Array">Array</el-option>
							<el-option value="Null">Null</el-option>
						</el-select>
						<el-input type="text" placeholder="description" ></el-input>

					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># Response Example<span style="font-size: 12px;font-weight: normal;"><br>(checked one will be the one returned)</span></div>
						<a href="javascript:void(0)" class="add_new btn btn_sm btn_success" >New</a>
					</el-col>
					<el-col :span="16"  >
						<el-input ></el-input>
						<el-input type="textarea" autosize placeholder="Please enter response example"  @blur="formatResExample($index)"></el-input>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8" class="form-label"><div class=""># Notes: </div></el-col>
					<el-col :span="16"  >
						<el-input type="textarea" autosize id="remark" placeholder="Please enter additional notes" style="height: 300px;" ></el-input>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>
<style>
	.el-row {
		margin-bottom: 20px;
		&:last-child {
		margin-bottom: 0;
		}
	}
	.el-col {
		border-radius: 4px;
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #d3dce6;
	}
	.bg-purple-light {
		background: #e5e9f2;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.form-label {
		text-align: right;
		padding-right: 25px;
	}
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
