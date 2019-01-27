<template>
  <el-select
    v-model="val"
    filterable
    remote
    placeholder="学校"
    :remote-method="getSchoolList"
    :loading="schoolLoading"
    @change="setVal"
    >
    <el-option
      v-for="item in schools"
      :key="item.id"
      :label="item.name"
      :value="item.name"
    >
    </el-option>
  </el-select>
</template>

<script src="./index.js"></script>
