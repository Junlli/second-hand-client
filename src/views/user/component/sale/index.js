export default {
  data () {
    return {
      columns1: [
        {
          title: '商品名称',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, 'id:' + params.row.goods.id)
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
            }, params.row.price)
          }
        },
        {
          title: '库存',
          align: 'center',
          key: 'inventory'
        },
        {
          title: '总销量',
          align: 'center',
          key: 'sales'
        },
        {
          title: '发布时间',
          align: 'center',
          key: 'datetime'
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
                    this.show(params.index)
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
                    this.remove1(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data1: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            id: '12361481248971289'
          },
          age: 18,
          price: '45.00',
          inventory: 100,
          sales: 50,
          datetime: '2018-03-31 19:14'
        }
      ],
      columns2: [
        {
          title: '商品名称',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, 'id:' + params.row.goods.id)
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
            }, params.row.price)
          }
        },
        {
          title: '库存',
          align: 'center',
          key: 'inventory'
        },
        {
          title: '总销量',
          align: 'center',
          key: 'sales'
        },
        {
          title: '发布时间',
          align: 'center',
          key: 'datetime'
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
                    this.show(params.index)
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
                    this.remove2(params.index)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      data2: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            id: '12361481248971289'
          },
          age: 18,
          price: '45.00',
          inventory: 100,
          sales: 50,
          datetime: '2018-03-31 19:14'
        }
      ],
      columns3: [
        {
          title: '成交时间',
          align: 'center',
          key: 'datetime',
          width: 110
        },
        {
          title: '商品',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, '订单号:' + params.row.goods.no)
            ])
          }
        },
        {
          title: '单价',
          align: 'center',
          key: 'price',
          width: 100,
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#f00'
              }
            }, params.row.price)
          }
        },
        {
          title: '数量',
          align: 'center',
          key: 'num'
        },
        {
          title: '实收款',
          align: 'center',
          key: 'total',
          width: 80
        },
        {
          title: '交易状态',
          align: 'center',
          key: 'status',
          render: (h, params) => {
            return h('a', '订单详情')
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
                    this.show(params.index)
                  }
                }
              }, '发货')
            ])
          }
        }
      ],
      data3: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            no: '12361481248971289'
          },
          price: '45.00',
          num: 1,
          total: '45.00',
          // status: '订单详情',
          datetime: '2018-03-31 19:14'
        }
      ],
      columns4: [
        {
          title: '成交时间',
          align: 'center',
          key: 'datetime',
          width: 110
        },
        {
          title: '商品',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, '订单号:' + params.row.goods.no)
            ])
          }
        },
        {
          title: '单价',
          align: 'center',
          key: 'price',
          width: 100,
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#f00'
              }
            }, params.row.price)
          }
        },
        {
          title: '数量',
          align: 'center',
          key: 'num'
        },
        {
          title: '实收款',
          align: 'center',
          key: 'total',
          width: 80
        },
        {
          title: '买家',
          align: 'center',
          key: 'buyer',
          render: (h, params) => {
            return h('a', params.row.buyer)
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
              h('a', '订单详情')
            ])
          }
        }
      ],
      data4: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            no: '12361481248971289'
          },
          price: '45.00',
          num: 1,
          total: '45.00',
          buyer: 'junlli',
          datetime: '2018-03-31 19:14'
        }
      ],
      columns5: [
        {
          title: '成交时间',
          align: 'center',
          key: 'datetime',
          width: 110
        },
        {
          title: '商品',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, '订单号:' + params.row.goods.no)
            ])
          }
        },
        {
          title: '单价',
          align: 'center',
          key: 'price',
          width: 100,
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#f00'
              }
            }, params.row.price)
          }
        },
        {
          title: '数量',
          align: 'center',
          key: 'num'
        },
        {
          title: '实收款',
          align: 'center',
          key: 'total',
          width: 80
        },
        {
          title: '买家',
          align: 'center',
          key: 'buyer',
          render: (h, params) => {
            return h('a', params.row.buyer)
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
              h('a', '订单详情')
            ])
          }
        }
      ],
      data5: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            no: '12361481248971289'
          },
          price: '45.00',
          num: 1,
          total: '45.00',
          buyer: 'junlli',
          datetime: '2018-03-31 19:14'
        }
      ],
      columns6: [
        {
          title: '成交时间',
          align: 'center',
          key: 'datetime',
          width: 110
        },
        {
          title: '商品',
          align: 'center',
          key: 'name',
          width: 240,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.goods.img
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
                  textAlign: 'left'
                }
              }, params.row.goods.name),
              h('span', {
                style: {
                  display: 'block',
                  width: '200px',
                  marginLeft: '50px',
                  textAlign: 'left'
                }
              }, '订单号:' + params.row.goods.no)
            ])
          }
        },
        {
          title: '单价',
          align: 'center',
          key: 'price',
          width: 100,
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#f00'
              }
            }, params.row.price)
          }
        },
        {
          title: '数量',
          align: 'center',
          key: 'num'
        },
        {
          title: '实收款',
          align: 'center',
          key: 'total',
          width: 80
        },
        {
          title: '买家',
          align: 'center',
          key: 'buyer',
          render: (h, params) => {
            return h('a', params.row.buyer)
          }
        },
        {
          title: '交易状态',
          align: 'center',
          key: 'status',
          render: (h, params) => {
            return h('div', [
              h('span', '交易关闭'),
              h('br'),
              h('a', '订单详情')
            ])
          }
        }
      ],
      data6: [
        {
          goods: {
            img: 'https://www.youzixy.com/Public/images/icon/mkhead_hover.png',
            name: '我是商品哇哈哈哈哈哈哈哈哈嗝哈',
            no: '12361481248971289'
          },
          price: '45.00',
          num: 1,
          total: '45.00',
          buyer: 'junlli',
          datetime: '2018-03-31 19:14'
        }
      ]
    }
  },
  methods: {
    // handleClearCurrentRow () {
    //   this.$refs.currentRowTable.clearCurrentRow()
    // },
    // 删除商品
    remove1 (index) {
      this.data1.splice(index, 1)
    },
    remove2 (index) {
      this.data2.splice(index, 1)
    }
  }
}
