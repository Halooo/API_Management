<template>
	<div>
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
	</div>
</template>
<style>
</style>
<script type="text/babel">
	export default{
		data(){
			return {
				articles: []
			}
		},
		created: () => {
			this.$http({
				method: 'get',
				url: 'https://api.douban.com/v2/movie/top250?count=10'
			}).then(function (res) {
				return res.json();
			}).then(function(response) {
					this.articles = response.data.subjects
				}, function(response) {
					console.log(response)
				}
			)
			;
		}
	}
</script>
