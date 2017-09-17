<template>
  <div class="loading" v-loading='loading'>
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
    return {
      items:[],
      limit:0,
      loading:true,
    }
  },
  methods:{
    getdata(){
        this.limit+=10;
        this.$http({
            url: 'https://cnodejs.org/api/v1/topics',
            method: 'get',
            params:{
                page:1,
                limit:this.limit,
                mdrender:'false',
            },
        }).then((res) =>{
            this.items =res.data.data;
        }).catch((res)=>{
            console.log('main.vue: ', res);
        });
    },
    scrollLoad() {        //向下滚屏加载
            const sumH = document.body.scrollHeight;
            const viewH = document.documentElement.clientHeight;
            const scrollH = document.body.scrollTop;
            if (viewH + scrollH === sumH) {
                this.getData();
            }
        },
    },
    
    mounted() {     //个人理解为页面渲染后调用的钩子函数
        window.addEventListener('scroll', this.scrollLoad);
    },
    created(){
        this.getData();
    },

    watch: {
        content(val) {
            if (val) {
                this.loading = false;
            }
        },
    },
}
</script>

<style>
.loading {
    width: 60%;
    background: #F9FAFC;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    padding: 2rem;
    min-height: 40rem;
}

a {
    text-decoration: none;
}

.for {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.5rem 0;
    border-bottom: 2px solid #C0CCDA;
    padding-bottom: 1rem;
}

.for img {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
}
.content a {
    color: black;
    font-size: 25px;
}

.content a:visited {
    color: grey;
}

.stuff {
    font-size: 17px;
    margin-top: 1rem;
    color: #8492A6;
}

.stuff span:first-child {
    margin-right: 2rem;
}
.tab{
    color: #555;
    font-size: 17px;
    margin-top: 1rem;
    margin-right: 2rem;
}
</style>
