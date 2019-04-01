import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      b_id: '',
      unsendApiData: '',
      columns1: [],
      data1: [],
      columns2: [],
      data2: [],
      columns3: [],
      data3: [],
      columns4: [],
      data4: [],
      columns5: [],
      data5: []
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
    getUserInfo () {
      // this.$api(this.$SERVER.GET_CURRENTUSERINFO)
      //   .then(data => {
      this.b_id = this.userInfo._id
      this.getAllOrders()
      this.getUnsend()
      this.getSended()
      this.getSuccessOrder()
      this.getClosedOrder()
      // })
    },
    orderUpdate (params, state1, state2, del, datas) {
      this.$api.post(this.$SERVER.POST_ORDERUPDATE, {
        id: params.row._id, o_state: state1
      }).then(data => {
        this.$api(this.$SERVER.GET_ORDERLIST, {
          params: { s_id: this.u_id, o_state: state2 }
        }).then(data => {
          datas = data.data.list
        })
      })
    },
    // 所有订单
    getAllOrders () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { b_id: this.b_id, o_del: false }
      })
        .then(data => {
          this.data1 = data.data.list
          console.log(this.data1)
          for (let i = 0; i < this.data1.length; i++) {
            this.columns1 = [
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
                width: 270,
                render: (h, params) => {
                  return h('div',
                    [
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
                          width: '200px',
                          marginLeft: '50px',
                          textAlign: 'left',
                          marginTop: '-5px'
                        }
                      }, 'id:' + params.row.commodity._id)
                    ]
                  )
                }
              },
              {
                title: '单价',
                align: 'center',
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
                title: '实付款',
                align: 'center',
                render: (h, params) => {
                  return h('span', {
                    style: {
                      color: '#f00'
                    }
                  }, params.row.o_price / 100 * params.row.o_num)
                }
              },
              {
                title: '卖家',
                align: 'center',
                render: (h, params) => {
                  return h('a', {
                    on: {
                      click: () => {
                        this.$router.push({
                          name: 'userInfo',
                          params: { id: params.row.s_id }
                        })
                      }
                    }
                  }, params.row.s_name)
                }
              },
              {
                title: '操作',
                align: 'center',
                key: 'action',
                render: (h, params) => {
                  if (params.row.o_state === 1) {
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
                            this.$api.post(this.$SERVER.POST_ORDERUPDATE, {
                              id: params.row._id, o_state: 0
                            }).then(data => {
                              this.$api(this.$SERVER.GET_ORDERLIST, {
                                params: { s_id: this.u_id, o_state: 1, o_del: false }
                              }).then(data => {
                                this.data1 = data.data.list
                              })
                            })
                          }
                        }
                      }, '取消订单')
                    ])
                  } else if (params.row.o_state === 2) {
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
                              id: params.row._id, o_state: 3
                            }).then(data => {
                              this.$api(this.$SERVER.GET_ORDERLIST, {
                                params: { s_id: this.u_id, o_state: 2 }
                              }).then(data => {
                                this.data3 = data.data.list
                              })
                            })
                          }
                        }
                      }, '确认收货')
                    ])
                  } else if (params.row.o_state === 3) {
                    return h('Button', {
                      props: {
                        type: 'primary',
                        size: 'large'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {

                        }
                      }
                    }, '评价')
                  } else if (params.row.o_state === 0) {
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
                                console.log(data)
                                this.data5 = data.data.list
                              })
                            })
                          }
                        }
                      }, '删除')
                    ])
                  }
                }
              }
            ]
          }
        })
    },
    // 未发货
    getUnsend () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { b_id: this.b_id, o_state: 1, o_del: false }
      })
        .then(data => {
          this.data2 = data.data.list
          for (let i = 0; i < this.data2.length; i++) {
            this.columns2 = [
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
                width: 270,
                render: (h, params) => {
                  return h('div',
                    [
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
                          width: '200px',
                          marginLeft: '50px',
                          textAlign: 'left',
                          marginTop: '-5px'
                        }
                      }, 'id:' + params.row.commodity._id)
                    ]
                  )
                }
              },
              {
                title: '单价',
                align: 'center',
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
                title: '实付款',
                align: 'center',
                render: (h, params) => {
                  return h('span', {
                    style: {
                      color: '#f00'
                    }
                  }, params.row.o_price / 100 * params.row.o_num)
                }
              },
              {
                title: '卖家',
                align: 'center',
                render: (h, params) => {
                  return h('a', {
                    on: {
                      click: () => {
                        this.$router.push({
                          name: 'userInfo',
                          params: { id: params.row.s_id }
                        })
                      }
                    }
                  }, params.row.s_name)
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
                          this.orderUpdate(params, 0, 1, false, this.data2)
                        }
                      }
                    }, '取消订单')
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
        params: { b_id: this.b_id, o_state: 2, o_del: false }
      }).then(data => {
        this.data3 = data.data.list
        for (let i = 0; i < this.data3.length; i++) {
          this.columns3 = [
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
              width: 270,
              render: (h, params) => {
                return h('div',
                  [
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
                        width: '200px',
                        marginLeft: '50px',
                        textAlign: 'left',
                        marginTop: '-5px'
                      }
                    }, 'id:' + params.row.commodity._id)
                  ]
                )
              }
            },
            {
              title: '单价',
              align: 'center',
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
              title: '实付款',
              align: 'center',
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '卖家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.s_id }
                      })
                    }
                  }
                }, params.row.s_name)
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
                        this.orderUpdate(params, 3, 2, false, this.data3)
                      }
                    }
                  }, '确认收货')
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
        params: { b_id: this.b_id, o_state: 3 }
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
              width: 270,
              render: (h, params) => {
                return h('div',
                  [
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
                        width: '200px',
                        marginLeft: '50px',
                        textAlign: 'left',
                        marginTop: '-5px'
                      }
                    }, 'id:' + params.row.commodity._id)
                  ]
                )
              }
            },
            {
              title: '单价',
              align: 'center',
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
              title: '实付款',
              align: 'center',
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '卖家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.s_id }
                      })
                    }
                  }
                }, params.row.s_name)
              }
            },
            {
              title: '操作',
              align: 'center',
              key: 'action',
              render: (h, params) => {
                if (params.row.o_evaluate === false) {
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
                          this.$router.push({
                            name: 'evaluate',
                            params: {id: params.row._id}
                          })
                        }
                      }
                    }, '评价')
                  ])
                } else {
                  return h('span', '已评价')
                }
              }
            }
          ]
        }
      })
    },
    // 关闭的订单
    getClosedOrder () {
      this.$api(this.$SERVER.GET_ORDERLIST, {
        params: { b_id: this.b_id, o_state: 0, o_del: false }
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
              width: 270,
              render: (h, params) => {
                return h('div',
                  [
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
                        width: '200px',
                        marginLeft: '50px',
                        textAlign: 'left',
                        marginTop: '-5px'
                      }
                    }, 'id:' + params.row.commodity._id)
                  ]
                )
              }
            },
            {
              title: '单价',
              align: 'center',
              width: 100,
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_price / 100)
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
              title: '实付款',
              align: 'center',
              render: (h, params) => {
                return h('span', {
                  style: {
                    color: '#f00'
                  }
                }, params.row.o_price / 100 * params.row.o_num)
              }
            },
            {
              title: '卖家',
              align: 'center',
              render: (h, params) => {
                return h('a', {
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'userInfo',
                        params: { id: params.row.s_id }
                      })
                    }
                  }
                }, params.row.s_name)
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
                            console.log(data)
                            this.data5 = data.data.list
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
  }
}
