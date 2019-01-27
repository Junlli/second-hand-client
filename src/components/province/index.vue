<template>
  <el-select v-model="val" placeholder="请选择省份" @change="getCityList" class="select">
    <el-option
      v-for="item in provinces"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    >
    </el-option>
  </el-select>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import "index";
</style>
