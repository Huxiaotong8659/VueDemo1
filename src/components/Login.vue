<template>
  <div id="LoginSpace">
            <el-card class="box-card" id="loginCard">
            <div slot="header" class="clearfix">
                <span>系统登录</span>
                <el-button style="float: right; padding: 3px 0" type="text">忘记密码？</el-button>
            </div>
            <div id="loginContent">
                <el-input v-model="user.name" clearable></el-input>
                <el-input v-model="user.password" clearable show-password></el-input>
                <el-button id="loginSystem" @click.native="loginSystem">登录</el-button>
            </div>
            </el-card>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:"LoginSpace",
    data(){
        return{
            user:{
                username:"",
                password:"",
            },
        }  
    },
    methods:{
        loginSystem(){
            Axios.get('http://localhost:3000/login',{
                params:this.user
            }).then(function(response){
                alert(response.data.username)
                alert(response.data.password)
            })
        }
    }
}
</script>

<style>
    #loginCard{
        width:400px;
        margin:0 auto;
        margin-top: 100px;
    }
    #loginContent{
        text-align: center;
    }
    #loginContent > *{
        margin-top: 5px;
    }
    #loginSystem{
        background-color:lightblue;
        color:white;
        width:150px;
        display: inline-block;
    }
</style>