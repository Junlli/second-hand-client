<template>
  <div class="box">
    <div class="bg"></div>
    <div class="register-box">
      <p class="register-title">注册校乐购</p>
      <div class="error-msg" v-show="isError">{{errorMsg}}</div>
      <el-form :model="apiData">
        <el-form-item>
          <svg class="register-form-account" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
          <el-input v-model="apiData.u_account" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <svg class="register-form-account" aria-hidden="true">
            <use xlink:href="#icon-mima1"></use>
          </svg>
          <el-input v-model="apiData.u_password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <svg class="register-form-account" aria-hidden="true">
            <use xlink:href="#icon-mima1"></use>
          </svg>
          <el-input v-model="apiData.u_confirmpwd" placeholder="确认密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <svg class="register-form-account" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
          <el-input v-model="apiData.u_name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <svg class="register-form-account" aria-hidden="true">
            <use xlink:href="#icon-youxiang"></use>
          </svg>
          <el-input v-model="apiData.u_mail" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <province
          :province="apiData.u_province"
          :provinces="provinceList"
          @change="setCityList"
          style="width:130px"
          >
          </province>
          <el-select
            v-model="apiData.u_city"
            style="width:130px"
            placeholder="请选择城市"
            class="selectCity">
          <el-option
          v-for="item in cityList"
          :value="item"
          :key="item"
          :label="item"
          >
          </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <svg class="register-form-account" aria-hidden="true">
            <use xlink:href="#icon-xuexiao"></use>
          </svg>
          <school
          @list="getSchoolList"
          :school="apiData.u_school"
          :schools="schoolList"
          @change="setSchool"
          ></school>
        </el-form-item>
      </el-form>
      <router-link to="login" class="login">登录</router-link>
      <router-link to="/" class="home">返回首页</router-link>
      <button class="register-button" @click="register">注册</button>
      <el-dialog
        title="注册成功！"
        :visible.sync="centerDialogVisible"
        :show-close="false"
        width="30%"
        center>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="toLogin">登录</el-button>
          <el-button type="primary" @click="toHome">返回首页</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="sass">
  @import 'index.scss'
</style>
