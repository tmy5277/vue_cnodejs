<template>
    <div class="userDiv">
        <div class="profile" v-loading='loading'>
            <div>
                <img src="userInfo.avatar_url" :title='userInfo.loginname'>
                <span>{{userInfo.loginname}}</span>
            </div>
            <p>
                <icon name='score' scale='4'></icon>
                <span>积分：</span>{{userInfo.score}}
            </p>
            <p>
                <icon name='github' scale='4'></icon>
                <span>Github：</span>http://github.com/{{userInfo.githubUsername}}
            </p>
            <p>
                <icon name='score' scale='4'></icon>
                <span>注册时间：</span>{{createTime(userInfo.create_at)}}
            </p>
        </div>
    
        <div class="replies" v-loading='loading'>
            <p>最近参与的话题</p>
            <template v-for='(item,index) of userInfo.recent_replies'>
                <div v-if="index<5 && item">
                    <img src="item.author.avatar_url" :title='item.author.loginname'>
                    <router-link :to='{name:"Article", params:{id:item.id}}'>
                        <p class="userTitle">{{item.title}}</p>
                    </router-link>
                </div>
            </template>
        </div>

        <div class="topics" v-loading='loading'>
            <p>最近创建的话题</p>
            <template v-for='(item,index) of userInfo.recent_topics'>
                <div v-if="index<5 && item">
                    <img src="item.author.avatar_url" :title='item.author.loginname'>
                    <router-link :to='{name:"Article", params:{id:item.id}}'>
                        <p class="userTitle">{{item.title}}</p>
                    </router-link>
                </div>
            </template>
        </div>
  </div>
</template>


<script>
    export default {
        data(){
            return{
                userInfo:{
                    create_at:'2017-09-18',//预设默认值：因为Vue会在一系列的初试化过程中调用此数据多次，而此时还有axios还没有执行到。如果没有默认值的话，会因为dealCommentTime中的方法保错：  0 of undefined....
                },
                loading :true,
            };
        },
        methods:{
            createTime(time){
                return String(time).match(/.{10}/)[0].replace(/.{2}/,'').replace(/.[T]/,' ');
            },
            getData(){
                this.$http({
                    url: `https://cnodejs.org/api/v1${this.$router.path}`,
                    method: 'get',
                }).then((res) =>{
                this.userInfo =res.data.data;
                }).catch((res)=>{
                    console.log('UserPage.vue: ', res);
                });
            },
        },
        created(){
            this.getData();
        },
        beforeRouterUpdate(to,from,next){
             this.$http({
                    url: `https://cnodejs.org/api/v1${to.path}`,
                    method: 'get',
                }).then((res) =>{
                this.userInfo =res.data.data;
                }).catch((res)=>{
                    console.log('UserPag.vue: ', res);
                });
                next();
        },
        watch:{
            userInfo(val){
                if (val) {
                    this.loading = false;
                }
            },
        },
    }
</script>

<style>
.userDiv{
    padding: 0;
    box-sizing: border-box;
    border: none;
}
.profile{
    padding: 1rem;
    background: #EFF2F7;
    border-radius: 0.3rem;
}
.profile div{
    margin-bottom: 1.5rem;
}
.profile div span{
    font-size: 25px;
    color: black;
    margin-left: 1rem;
}
.profile p{
    display: flex;
    align-items: center;
    color: grey;
    margin: 0.5rem 0;
}
.profile p span{
    color: black;
    margin: 0 0.5rem;
}
.profile svg{
    color: black;
    margin: 0.2rem;
}

.replies{
    background: #E5E9F2;
    padding: 1rem;
    border-radius: 0.3rem;
}
.topics{
    background: #d3dce6;
    padding: 1rem;
    border-radius: 0.3rem;
}
.replies>p
.topics>p
{
    margin-bottom:2rem;
    color: black;
}
.replies div,
.topics div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border-bottom: 2px solid #C0CCDA;
    padding-bottom: 1rem;
}
.recentTopics div {
    border-bottom: 2px solid #99A9BF;
}
.userTitle {
    font-size: 25px;
}
.replies img
.topics img
{
   width: 5rem;
   height: 5rem;
   margin-right: 1rem;
}

</style>