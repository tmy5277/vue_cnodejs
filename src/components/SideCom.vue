<template>
	<div class="sideUser" v-loading='loading'>
		<div>
			<router-link :to='{name:"User", params:{loginname:userInfo.loginname}}'>
				<img :src='userInfo.avatar_url'>
			</router-link>
			<span>{{userInfo.loginname}}</span>
		</div>
		<p>
			<icon name='score' scale= '4'></icon>
			{{userInfo.score}}
		</p>
		<p>
			<icon name='github' scale= '4'></icon>
			https://github.com/{{userInfo.githubUsername}}
		</p>
	</div>
</template>


<script>
export default{
	data(){
		return{
			userInfo:{
				avatar_url: '',
                loginname: 'temp',
			},
			loading:true,
			userName:'',
		};
	},
	watch:{
		userName(val){
				this.$http({
					url: `https://cnodejs.org/api/v1/user/${val}`,
					method: 'get',
				}).then((res)=>{
					this.userInfo = res.data.data;
				}).catch((err)=>{
					console.log('SideCom.vue:',err);	
				});
			},

		userInfo(val){
			if (val) {
				this.loading =false;
			}
		},
	}

}
	
</script>

<style>
.sideUser {
    width: 20%;
    height: 20rem;
    background: #E5E9F2;
    border: 1px solid #ddd;
    word-break: break-all;
    font-size: 21px;
    padding: 2rem;
}

.sideUser div {
    display: flex;
    align-items: flex-end;
    margin-bottom: 2rem;
}

.sideUser div span {
    font-size: 30px;
    margin-left: 1rem;
    color: black;
}

.sideUser p {
    display: flex;
    align-items: center;
    color: #475669;
}

.sideUser p svg {
    margin-right: 1rem;
}

.sideUser img {
    width: 6rem;
    height: 6rem;
}
</style>