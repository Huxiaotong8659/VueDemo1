<template>
    <div id="headerBook">
        <div id="headerTitle">
            <span>
                {{message}} 
            </span>    
        </div>
        <div id="headerFunction">
            <router-link to="/login"><el-button>系统登录</el-button></router-link>
            <router-link to="/work"><el-button>工作中心</el-button></router-link>
            <router-link to="/book"><el-button>图书信息</el-button></router-link>
            <router-link to="/main"><el-button>个人信息</el-button></router-link>
            <router-link to="/cnnode"><el-button>node论坛</el-button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"headerBook",
    data(){
        return{
            message:"江西软件大学-新型图书管理系统"
        }
    }
}
</script>

<style>
    /* #headerBook{
        background-color: blueviolet;
    } */
    #headerTitle{
        /* background-color: chocolate; */
        width:400px;
        height:60px;
        color:whitesmoke;
        font-size:24px;
        font-weight:bloder;
        line-height:60px;
        display:inline-block;
    }
    #headerFunction{
        float:right;
        height:60px;
        display:inline-block;
    }
    #headerFunction > .el-button{
        display: inline-block;
        background-color: thistle;
        margin-top: 8px;
        border-color:thistle;
    }
</style>