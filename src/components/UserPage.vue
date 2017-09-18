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


    </div>

  
    <div class="for" v-for='item in items'>
        <router-link :to='{name: "User", params:{name: item.author.loginname}}'>
            <img :src='item.author.avatar_url' :title='item.author.loginname'>
        </router-link>
        <div class="content">
            <span class="tab">{{item.tab}}</span>
            <router-link :to='{name:"Article",params:{id:item.id}}'>
            {{item.title}}
            </router-link>
            <div class="stuff">
                <span>回复：{{item.reply_count}}</span>
                <span>创建时间：{{item.create_at}}</span>
            </div>
        </div>
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

        },
        created(){

        },
        beforeRouterUpdate(to,from,next){

        },
        watch:{
            userInfo(val){
                if (val) {
                    this.loading = false;
                }
            };
        },
    }
</script>

<style>
    
</style>