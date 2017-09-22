<template>
    <div class="articleDiv" v-loading='loading'>
            <span class="marginSpan">发布于：{{createTime}}</span>
            <router-link :to='{name:"User",params:{loginname:article.author.loginname}}'>
                作者：{{article.author.loginname}}
            </router-link>
            <span class="marginSpan">
                浏览量：{{article.visit_count}}
            </span>
            <span>来自：{{article.tab}}</span>
            <h3>{{article.title}}</h3>
            <div id="content" v-html="article.content"></div>
            <div class="replies">
                <div class="replyDiv" v-for='reply in article.replies' :key='reply.length'>
                    <router-link :to='{name:"User",params:{loginname:reply.author.loginname}}'>
                        <img :src="reply.author.avatar_url">
                    </router-link>
                    <div class="replyContent">
                        <div class="replyInfo">
                            <span class="replyAuthor">{{reply.author.loginname}}</span>
                            <span class="replyTime">{{repliesTime(reply.create_at)}}</span>
                            <span v-if="reply.ups.length>0" class="thumbsUp">
                                <icon name='thumbs-up' scale='2'></icon>
                                <span>{{reply.ups.length}}</span>
                            </span>
                        </div>
                        <p v-html='reply.content'></p>
                    </div>   
                </div>
            </div>
    </div>
</template>


<script>
    export default {
        data(){
            return{
                article:{
                    title: '',
                    author: {
                        loginname: 'temp',
                    },
                    visit_count: '',
                    tab: '',
                    content: '',
                    create_at: '2017-09-200000',
                    replies: '',
                },
                loading :true,
            };
        },
        computed:{
            createTime(){
                return String(this.article.create_at).match(/.{10}/)[0];
            },
        },
        methods:{
            repliesTime(time){
                return String(time).match(/.{10}/)[0].replace(/.{2}/,'').replace(/.[T]/,' ');
            },
        },
        created(){
                this.$http({
                    url: `https://cnodejs.org/api/v1${this.$route.path}`,
                    method: 'get',
                }).then((res) =>{
                this.article =res.data.data;
                this.$parent.authorName = this.article.author.loginname;
                // console.log(this.$parent.authorName);
                }).catch((err)=>{
                    console.log('AritlePage.vue: ', err);
                });
        },
        watch:{
            article(val){
                if (val) {
                    this.loading = false;
                }
            },
        },
    }
</script>

<style>
#content img{
    max-width: 100%;
    max-height: 100%;
}
.replyDiv{
    display: flex;
    box-sizing: border-box;
    border-bottom: 2px solid #c0ccda;
    width: 100%;
    margin: 0.5rem auto;
    padding: 0.5rem 0;
}

@import url('../assets/markdown-github.css');

.marginSpan{
    margin: 0 0.5rem;
}

.articleDiv span:first-child{
    margin-left: 0;
}
.articleDiv {
    width: 60%;
    border: 1px solid #ddd;
    font-size: 20px;
    padding: 2rem;
    background: #F9FAFC;
}
.articleDiv span,
.articleDiv a {
    font-size: 17px;
    color: #8492A6;
}
#content {
    margin: 2rem auto;
    padding: 2rem 2rem;
    border: 1px solid #ddd;
    line-height: 1.6;
    padding-bottom: 1rem;
    background: #EFF2F7;
}
.articleDiv a {
    color: black;
    text-decoration: none;
}
.replies{
    display: flex;
    flex-direction: column;
}

.replies img {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
}

.replyContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    justify-content: space-around;
}

.replyDIv p {
    color: black;
}

.replyInfo {
    width: 100%;
}

.replyDiv .replyAuthor {
    color: #475669;
    font-size: 20px;
}
.thumbsUp {
    float: right;
}
</style>