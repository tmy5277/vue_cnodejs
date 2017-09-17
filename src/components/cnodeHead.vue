<template>
  <div class='head'>
    <router-link to = '/'>
      <img src="../assets/cnodejs.svg" title="cnodejs.svg">
    </router-link>
    <el-button type='text' @click='showDialog=true'>关于</el-button>
    <el-dialog title='Vue.js通过API重构CnodeJS社区' v-model='showDialog' size='tiny'>
      <div class="dialogDiv">
        <span>
          <strong>作者：&nbsp;&nbsp;</strong>
        </span>
        <a href="https://github.com/tmy5277" target="_blank">tmy</a>
        <br>
        <span>
          <strong>源码：&nbsp;&nbsp;</strong>
        </span>
        <a href="https://github.com/tmy5277/vue_cnodejs" target="_blank">GitHub</a>
        <br>
        <span><strong>API：</strong></span>
        <a href="https://cnodejs.org/api">CNode：Node.js专业中文社区-API文档</a>
        <br>
        <br>
        <span><strong>技术栈：</strong></span>
        <ul>
          <li>Vue.js</li>
          <li>Vue-router</li>
          <li>Axios</li>
          <li>Element-UI</li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showDialog:false,
    }
  }
}
</script>

<style>
@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-default/index.css");
.head
{
    background: #324057;
    height: 3.6rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.head img {
    width: 10rem;
    height: 3.5rem;
    margin-left: 10rem;
}
.head>button {
    display: inline-block;
    float: right;
    line-height: 3.6rem;
    margin-right: 10rem;
    font-weight: bold;
    font-size: 20px;
    color: white;
    letter-spacing: 2px;
    padding-top: 0.2rem;
}

.head .dialogDiv {
    font-size: 17px;
}

.head ul {
    margin-left: 1rem;
}

.head a {
    text-decoration: none;
    color: #58B7FF;
}

.head .star {
    font-weight: bold;
    color: #1D8CE0;
    font-size: 20px;
}

</style>
