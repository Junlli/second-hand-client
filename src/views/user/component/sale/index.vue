<template>
  <div class="sale">
    <div class="unsale" style="display: none">
      <span class="unsale-letter">您还没有发布商品呢！您可以</span>
      <router-link to="/release">
        <Button type="success">发布商品</Button>
      </router-link>
    </div>
    <div class="order">
      <Tabs type="card">
        <TabPane label="正在出售">
          <Table highlight-row ref="currentRowTable" :columns="columns1" :data="data1"></Table>
        </TabPane>
        <TabPane label="下架商品">
          <Table highlight-row ref="currentRowTable" :columns="columns2" :data="data2"></Table>
        </TabPane>
        <TabPane label="未发货">
          <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data3"></Table>
        </TabPane>
        <TabPane label="已发货">
          <Table highlight-row ref="currentRowTable" :columns="columns4" :data="data4"></Table>
        </TabPane>
        <TabPane label="成功的订单">
          <Table highlight-row ref="currentRowTable" :columns="columns5" :data="data5"></Table>
        </TabPane>
        <TabPane label="关闭的订单">
          <Table highlight-row ref="currentRowTable" :columns="columns6" :data="data6"></Table>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss">
  @import "index";
</style>
