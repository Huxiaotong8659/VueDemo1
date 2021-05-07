<template>
  <div id="bookInform">
    <el-container>
          <el-aside width="200px">
            <!-- <el-row class="tac"> -->
              <!-- <el-col :span="12"> -->
              <!-- <h5>默认颜色</h5> -->
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户信息管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">读者信息</el-menu-item>
                  <el-menu-item index="1-2">已还书籍</el-menu-item>
                  <el-menu-item index="1-3">未还书籍</el-menu-item>
                  <el-menu-item index="1-4">更改密码</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">图书借阅信息</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">卡信息管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
              </el-menu-item>
              </el-menu>
        <!-- </el-col> -->
      
          </el-aside>
          <el-container>
            <el-header style="text-align: right; font-size: 16px;color = white">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>图书借阅情况</span>
            </el-header>
            <el-main>
              <el-table :data="tableData" style="width: 100%" height="250px">
                <el-table-column prop="date" label="图书借阅日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="140"></el-table-column>
                <el-table-column prop="address" label="图书名称"></el-table-column>
              </el-table>
            </el-main>
          </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "SpringBoot",
        },
        {
          date: "2016-03-12",
          name: "王小虎",
          address: "web前端开发",
        },
        {
          date: "2018-05-03",
          name: "王小虎",
          address: "web前端开发模块",
        },
        {
          date: "2020-05-02",
          name: "王小虎",
          address: "项目工程与管理模块",
        },
        {
          date: "2020-05-04",
          name: "王小虎",
          address: "高等数学",
        },
        {
          date: "2020-05-06",
          name: "王小虎",
          address: "Linux系统及其基础",
        },
        {
          date: "2020-05-03",
          name: "王小虎",
          address: "大学英语",
        },
        // {
        //   date: "2020-05-03",
        //   name: "王五",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2020-05-03",
        //   name: "王五",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2020-05-03",
        //   name: "王五",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2020-05-03",
        //   name: "王五",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
      ],
    };
  },
};
</script>

<style>
  .el-aside{
    height:330px;
  }
  #MainForm > .el-main{
    /* height:270px; */
    float:right;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>