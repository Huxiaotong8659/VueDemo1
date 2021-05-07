<template>
    <div id="Library">
        <el-container>
            <el-aside width="200px">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" 
                @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">图书类型</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">文学</el-menu-item>
                        <el-menu-item index="1-2">医学</el-menu-item>
                        <el-menu-item index="1-3">小说</el-menu-item>
                        <el-menu-item index="1-4">其他</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-5">
                        <span slot="title">编程类</span>
                        <el-menu-item index="1-5-1">前端</el-menu-item>
                        <el-menu-item index="1-5-1">后端</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                        <span slot="title">新图书信息汇入</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">图书信息更改</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">书籍挂失处理</span>
                </el-menu-item>
            </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>