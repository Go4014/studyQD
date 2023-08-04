<template>
  <div>
    <h3>App 根组件</h3>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="getInfo">主要按钮</el-button>
      <el-button type="success" @click="getUsers">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <hr />
    <router-link to="/home">Home</router-link>&nbsp;
    <router-link to="/movie">Movie</router-link>

    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
  methods: {
    // 测试 GET 请求
    async getInfo() {
      const { data: res } = await this.$http.get('/api/get', {
        params: { name: 'zs', age: 20 },
      })
      console.log(res)
    },
    // 获取用户列表的数据
    async getUsers() {
      const { data: res } = await this.$http.get('/api/users')
      console.log(res)
    },
  },
}
</script>

<style lang="less" scoped></style>
