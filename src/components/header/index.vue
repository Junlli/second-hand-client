<template>
  <div class="header">
    <div class="w">
      <h1>
        <a href="javascript:void(0)" class="logo">校乐购</a>
      </h1>
      <router-link to="/">
        <div class="home">首页</div>
      </router-link>
      <div class="school">
        <span class="location iconfont">&#xe61f;</span>
        <span>{{ u_school }}</span>
        <a class="change" @click="modal = true">[切换]</a>
        <Modal
          title="请输入学校名称"
          v-model="modal"
          class-name="vertical-center-modal">
          <school
            @list="getSchoolList"
            :school="changeSchoolName"
            :schools="schoolList"
            @change="setSchool"
          ></school>
          <div slot="footer">
            <button
              type="button"
              class="ivu-btn ivu-btn-text ivu-btn-large"
              @click="cancel"
            >
              <span>取消</span>
            </button>
            <button
              type="button"
              class="ivu-btn ivu-btn-primary ivu-btn-large"
              @click="changeSchool"
            >
              <span>确定</span>
            </button>
          </div>
        </Modal>
      </div>
      <el-button type="info" class="release" @click="handleRelease">发布商品</el-button>
      <Modal v-model="login" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>您还未登录</span>
        </p>
        <div class="toLogin">
          <Button type="primary" @click="handleLogin">请先登录</Button>
        </div>
        <div slot="footer">
        </div>
      </Modal>
      <ul class="login-box" v-if="userInfo.u_avatar">
        <li>
          <a class="headpic-link" @click="toUser">
            <img class="headpic" :src="$SERVER.FILEURL + userInfo.u_avatar">
          </a>
        </li>
        <li>
          <a class="quit" @click="handleQuit()">退出</a>
        </li>
      </ul>
      <ul class="unLogin" v-if="!userInfo.u_avatar">
        <router-link to="/login">
          <a class="login">登录</a>
        </router-link>
        <router-link to="/register">
          <a class="register">注册</a>
        </router-link>
      </ul>
      <div class="search">
        <input
          type="text"
          placeholder="搜索"
          class="search-filed"
          v-model="searchKey"
        >
        <button class="search-btn" @click="searchResult">搜索</button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import "index";
</style>
