<template>
	<div id="app">
		<nav>
			<NavTop></NavTop>
			<NavSide></NavSide>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
import Hello from './components/Hello';
import NavTop from './components/common/nav-top.vue';
import NavSide from './components/common/nav-side.vue';

export default {
  name: 'app',
  components: {
    Hello,
    NavTop,
    NavSide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
