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
      ]
    }
  },
  methods: {
    handleClearCurrentRow () {
      this.$refs.currentRowTable.clearCurrentRow();
    }
  }
}
