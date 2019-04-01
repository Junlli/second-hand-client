import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      commodityInfo: '',
      u_id: '',
      buyer: '',
      columns1: [],
      data1: [],
      columns2: [],
      data2: [],
      columns3: [],
      data3: [],
      columns4: [],
      data4: [],
      columns5: [],
      data5: [],
      columns6: [],
      data6: [],
      modal: false,
      orderInfo: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    remove1 (index) {
      this.data1.splice(index, 1)
    },
    remove2 (index) {
      this.data2.splice(index, 1)
    },
    getCommodity () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { u_id: this.u_id }
      })
    },
    // 获取订单详情
    getOrderInfo (orderInfo) {
      this.modal = true
      this.orderInfo = orderInfo
      console.log(this.orderInfo)
    },
    getUserInfo () {
      this.u_id = this.userInfo._id
      this.getCommodity()
      this.getOnSale()
      this.getOffSale()
      this.getUnSend()
    },
    // 正在出售
    getOnSale () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { u_id: this.u_id, c_state: 1 }
      }).then(data => {
        this.data1 = data.data.list
        for (let i = 0; i < this.data1.length; i++) {
          this.columns1 = [
            {
              title: '商品名称',
              align: 'center',
              width: 270,
              render: (h, params) => {
                return h('div', [
                  h('img', {
                    attrs: {
                      src: this.$SERVER.FILEURL + params.row.c_images[0]
                    },
                    style: {
                      display: 'block',
                      width: '40px',
                      height: '40px',
                      marginTop: '10px',
                      float: 'left'
                    }
                  }),
                  h('a', {
                    style: {
                      display: 'block',
                      marginLeft: '50px',
                      height: '40px',
                      textAlign: 'left',
                      paddingTop: '10px'
                    },
                    on: {
                      click: () => {
                        this.$router.push({
                          name: 'detail',
                          params: { id: params.row._id }
                        })
                      }
                    }
                  }, params.row.c_title),
                  h('span', {
                    style: {
                      display: 'block',
                      width: '200px',
                      marginLeft: '50px',
                      textAlign: 'left',
                      marginTop: '-5px'
                    }
                  }, 'id:' + params.row._id)
                ])
              }
            },
            {
              title: '价格',
              align: 'center',
              key: 'price',
              width: 100,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.c_price / 100)
              }
            },
            {
              title: '库存',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.c_num)
              }
            },
            {
              title: '总销量',
              align: 'center',
              width: 150,
              render: (h, params) => {
                return h('span', params.row.c_sales)
              }
            },
            {
              title: '发布时间',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.create_date)
              }
            },
            {
              title: '操作',
              align: 'center',
              key: 'action',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$router.push('/release?id=' + params.row._id)
                      }
                    }
                  }, '编辑'),
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$api.post(this.$SERVER.POST_COMMODITYUPINFO, {
                          c_id: params.row._id, c_state: 2
                        }).then(res => {
                          this.getOnSale()
                          this.getOffSale()
                        })
                      }
                    }
                  }, '下架'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$api(this.$SERVER.GET_COMMODITYDEL, {
                          params: { c_id: params.row._id }
                        })
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ]
        }
      })
    },
    // 已下架
    getOffSale () {
      this.$api(this.$SERVER.GET_COMMODITYLIST, {
        params: { u_id: this.u_id, c_state: 2 }
      }).then(data => {
        this.data2 = data.data.list
        for (let i = 0; i < this.data2.length; i++) {
          this.columns2 = [
            {
              title: '商品名称',
              align: 'center',
              key: 'name',
              width: 270,
              render: (h, params) => {
                return h('div', [
                  h('img', {
                    attrs: {
                      src: this.$SERVER.FILEURL + params.row.c_images[0]
                    },
                    style: {
                      display: 'block',
                      width: '40px',
                      height: '40px',
                      marginTop: '10px',
                      float: 'left'
                    }
                  }),
                  h('a', {
                    style: {
                      display: 'block',
                      marginLeft: '50px',
                      height: '40px',
                      textAlign: 'left',
                      paddingTop: '10px'
                    },
                    on: {
                      click: () => {
                        this.$router.push({
                          name: 'detail',
                          params: { id: params.row._id }
                        })
                      }
                    }
                  }, params.row.c_title),
                  h('span', {
                    style: {
                      display: 'block',
                      width: '200px',
                      marginLeft: '50px',
                      textAlign: 'left',
                      marginTop: '-5px'
                    }
                  }, 'id:' + params.row._id)
                ])
              }
            },
            {
              title: '价格',
              align: 'center',
              key: 'price',
              width: 100,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.c_price / 100)
              }
            },
            {
              title: '库存',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.c_num)
              }
            },
            {
              title: '总销量',
              align: 'center',
              width: 150,
              render: (h, params) => {
                return h('span')
              }
            },
            {
              title: '发布时间',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.create_date)
              }
            },
            {
              title: '操作',
              align: 'center',
              key: 'action',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.show(params.index)
                      }
                    }
                  }, '编辑'),
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$api.post(this.$SERVER.POST_COMMODITYUPINFO, {
                          c_id: params.row._id, c_state: 1
                        }).then(res => {
                          this.getOnSale()
                          this.getOffSale()
                        })
                      }
                    }
                  }, '上架'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$api(this.$SERVER.GET_COMMODITYDEL, {
                          params: { c_id: params.row._id }
                        })
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ]
        }
      })
    },
    // 未发货
    getUnSend () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { s_id: this.u_id, o_state: 1 }
      }).then(data => {
        this.data3 = data.data.list
        for (let i = 0; i < this.data3.length; i++) {
          this.columns3 = [
            {
              title: '下单时间',
              align: 'center',
              key: 'datetime',
              width: 105,
              render: (h, params) => {
                return h('span', params.row.create_date)
              }
            },
            {
              title: '商品',
              align: 'center',
              key: 'name',
              width: 260,
              render: (h, params) => {
                return h('div', [
                  h('img', {
                    attrs: {
                      src: this.$SERVER.FILEURL + params.row.commodity.c_images[0]
                    },
                    style: {
                      display: 'block',
                      width: '40px',
                      height: '40px',
                      marginTop: '10px',
                      float: 'left'
                    }
                  }),
                  h('a', {
                    style: {
                      display: 'block',
                      marginLeft: '50px',
                      height: '40px',
                      textAlign: 'left',
                      paddingTop: '10px'
                    },
                    on: {
                      click: () => {
                        this.$router.push({
                          name: 'detail',
                          params: { id: params.row.c_id }
                        })
                      }
                    }
                  }, params.row.commodity.c_title),
                  h('span', {
                    style: {
                      display: 'block',
                      width: '210px',
                      marginLeft: '50px',
                      textAlign: 'left',
                      marginTop: '-5px'
                    }
                  }, '订单号:' + params.row._id)
                ])
              }
            },
            {
              title: '单价',
              align: 'center',
              key: 'price',
              width: 100,
              render: (h, params) => {
                return h('span', params.row.o_price / 100)
              }
            },
            {
              title: '数量',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.o_num)
              }
            },
            {
              title: '实收款',
              align: 'center',
              width: 80,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '买家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.b_id }
                      })
                    }
                  }
                }, params.row.b_name)
              }
            },
            {
              title: '交易状态',
              align: 'center',
              key: 'status',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.getOrderInfo(params.row)
                    }
                  }
                }, '订单详情')
              }
            },
            {
              title: '操作',
              align: 'center',
              key: 'action',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'large'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$api.post(this.$SERVER.POST_ORDERUPDATE, {
                          id: params.row._id, o_state: 2
                        }).then(data => {
                          this.$api(this.$SERVER.GET_ORDERLIST, {
                            params: { s_id: this.u_id, o_state: 1 }
                          }).then(data => {
                            this.data3 = data.data.list
                          })
                        })
                      }
                    }
                  }, '发货')
                ])
              }
            }
          ]
        }
      })
    },
    // 已发货
    getSended () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { s_id: this.u_id, o_state: 2 }
      }).then(data => {
        this.data4 = data.data.list
        for (let i = 0; i < this.data4.length; i++) {
          this.columns4 = [
            {
              title: '下单时间',
              align: 'center',
              width: 105,
              render: (h, params) => {
                return h('span', params.row.create_date)
              }
            },
            {
              title: '商品',
              align: 'center',
              key: 'name',
              width: 300,
              render: (h, params) => {
                return h('div', [
                  h('img', {
                    attrs: {
                      src: this.$SERVER.FILEURL + params.row.commodity.c_images[0]
                    },
                    style: {
                      display: 'block',
                      width: '40px',
                      height: '40px',
                      marginTop: '10px',
                      float: 'left'
                    }
                  }),
                  h('a', {
                    style: {
                      display: 'block',
                      marginLeft: '50px',
                      height: '40px',
                      textAlign: 'left',
                      paddingTop: '10px'
                    },
                    on: {
                      click: () => {
                        this.$router.push({
                          name: 'detail',
                          params: { id: params.row.c_id }
                        })
                      }
                    }
                  }, params.row.commodity.c_title),
                  h('span', {
                    style: {
                      display: 'block',
                      width: '222px',
                      marginLeft: '50px',
                      textAlign: 'left',
                      marginTop: '-5px'
                    }
                  }, '订单号:' + params.row._id)
                ])
              }
            },
            {
              title: '单价',
              align: 'center',
              key: 'price',
              width: 100,
              render: (h, params) => {
                return h('span', params.row.o_price / 100)
              }
            },
            {
              title: '数量',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '实收款',
              align: 'center',
              width: 80,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_num)
              }
            },
            {
              title: '买家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.b_id }
                      })
                    }
                  }
                }, params.row.b_name)
              }
            },
            {
              title: '交易状态',
              align: 'center',
              key: 'status',
              render: (h, params) => {
                return h('div', [
                  h('span', '已发货'),
                  h('br'),
                  h('a', {
                    on: {
                      click: () => {
                        this.getOrderInfo(params.row)
                      }
                    }
                  }, '订单详情')
                ])
              }
            }
          ]
        }
      })
    },
    // 成功的订单
    getSuccessOrder () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { s_id: this.u_id, o_state: 3 }
      }).then(data => {
        this.data5 = data.data.list
        for (let i = 0; i < this.data5.length; i++) {
          this.columns5 = [
            {
              title: '下单时间',
              align: 'center',
              width: 105,
              render: (h, params) => {
                return h('span', params.row.create_date)
              }
            },
            {
              title: '商品',
              align: 'center',
              key: 'name',
              width: 300,
              render: (h, params) => {
                return h('div', [
                  h('img', {
                    attrs: {
                      src: this.$SERVER.FILEURL + params.row.commodity.c_images[0]
                    },
                    style: {
                      display: 'block',
                      width: '40px',
                      height: '40px',
                      marginTop: '10px',
                      float: 'left'
                    }
                  }),
                  h('a', {
                    style: {
                      display: 'block',
                      marginLeft: '50px',
                      height: '40px',
                      textAlign: 'left',
                      paddingTop: '10px'
                    }
                  }, params.row.commodity.c_title),
                  h('span', {
                    style: {
                      display: 'block',
                      width: '222px',
                      marginLeft: '50px',
                      textAlign: 'left',
                      marginTop: '-5px'
                    }
                  }, '订单号:' + params.row._id)
                ])
              }
            },
            {
              title: '单价',
              align: 'center',
              key: 'price',
              width: 100,
              render: (h, params) => {
                return h('span', params.row.o_price / 100)
              }
            },
            {
              title: '数量',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '实收款',
              align: 'center',
              width: 80,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_num)
              }
            },
            {
              title: '买家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.b_id }
                      })
                    }
                  }
                }, params.row.b_name)
              }
            },
            {
              title: '交易状态',
              align: 'center',
              key: 'status',
              render: (h, params) => {
                return h('div', [
                  h('span', '交易成功'),
                  h('br'),
                  h('a', {
                    on: {
                      click: () => {
                        this.getOrderInfo(params.row)
                      }
                    }
                  }, '订单详情')
                ])
              }
            }
          ]
        }
      })
    },
    // 关闭的订单
    getClosedOrder () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { s_id: this.u_id, o_state: 0, o_del: false }
      }).then(data => {
        this.data6 = data.data.list
        for (let i = 0; i < this.data6.length; i++) {
          this.columns6 = [
            {
              title: '下单时间',
              align: 'center',
              width: 105,
              render: (h, params) => {
                return h('span', params.row.create_date)
              }
            },
            {
              title: '商品',
              align: 'center',
              key: 'name',
              width: 300,
              render: (h, params) => {
                return h('div', [
                  h('img', {
                    attrs: {
                      src: this.$SERVER.FILEURL + params.row.commodity.c_images[0]
                    },
                    style: {
                      display: 'block',
                      width: '40px',
                      height: '40px',
                      marginTop: '10px',
                      float: 'left'
                    }
                  }),
                  h('a', {
                    style: {
                      display: 'block',
                      marginLeft: '50px',
                      height: '40px',
                      textAlign: 'left',
                      paddingTop: '10px'
                    }
                  }, params.row.commodity.c_title),
                  h('span', {
                    style: {
                      display: 'block',
                      width: '222px',
                      marginLeft: '50px',
                      textAlign: 'left',
                      marginTop: '-5px'
                    }
                  }, '订单号:' + params.row._id)
                ])
              }
            },
            {
              title: '单价',
              align: 'center',
              key: 'price',
              width: 100,
              render: (h, params) => {
                return h('span', params.row.o_price / 100)
              }
            },
            {
              title: '数量',
              align: 'center',
              render: (h, params) => {
                return h('span', params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '实收款',
              align: 'center',
              width: 80,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_num)
              }
            },
            {
              title: '买家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.b_id }
                      })
                    }
                  }
                }, params.row.b_name)
              }
            },
            {
              title: '交易状态',
              align: 'center',
              key: 'status',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'large'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.$api.post(this.$SERVER.POST_ORDERUPDATE, {
                          id: params.row._id, o_del: true
                        }).then(data => {
                          this.$api(this.$SERVER.GET_ORDERLIST, {
                            params: { s_id: this.u_id, o_state: 0, o_del: false }
                          }).then(data => {
                            this.data6 = data.data.list
                          })
                        })
                      }
                    }
                  }, '删除')
                ])
              }
            }
          ]
        }
      })
    }
  },
  created () {
    this.getUserInfo()
    this.getSended()
    this.getSuccessOrder()
    this.getClosedOrder()
  }
}
