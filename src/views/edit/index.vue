<template>
  <div class="bg">
    <home-header></home-header>
    <div class="type-page">
      <div class="edit-title">
        <h1>编辑个人信息</h1>
      </div>
      <el-form :model="userInfo" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="apiData.u_name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="apiData.u_mail"></el-input>
        </el-form-item>
        <el-form-item label="省市">
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
        <el-form-item label="学校">
          <school
            @list="getSchoolList"
            :school="apiData.u_school"
            :schools="schoolList"
            @change="setSchool"
          ></school>
        </el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="info" plain @click="cancel">取消</el-button>
      </el-form>
    </div>
    <home-footer></home-footer>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import "index";
</style>
