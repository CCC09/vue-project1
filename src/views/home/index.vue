<template>
  <el-container class="wrapper">
    <el-aside :width="isCollapse?'64px':'200px'">
      <div class="logo" :class="{miniLogo:isCollapse}"></div>
      <el-menu
        :default-active="$route.path"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition='false'
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/public">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span class="el-icon-s-fold" @click="toggleMenu"></span>
        <span>传智播客黑马</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="../../assets/images/avatar.jpg" alt />
            用户ccc
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-toilet-paper">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  .el-aside {
    background-color: #002033;
  }
  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .el-icon-s-fold {
      margin-right: 10px;
      font-size: 24px;
      vertical-align: middle;
    }
    .el-dropdown {
      float: right;
      .el-dropdown-link {
        font-weight: bold;
        img {
          width: 36px;
          vertical-align: middle;
        }
      }
    }
  }
}
.logo {
  width: 100%;
  height: 60px;
  background: url(../../assets/images/logo_admin.png) no-repeat center / 140px;
}
.miniLogo {
    background-image: url(../../assets/images/logo_admin_01.png);
    background-size: 36px
}
.el-menu {
    border-right: 0
}
</style>
