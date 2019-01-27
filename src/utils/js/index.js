//数组里面最小间隔
export let minInterval = arr => {
  let min = Number.MAX_VALUE;
  if(arr.length){
    arr.reduce((q, h)=>{
      let cha = h - q;
      min = cha < min ? cha : min;
      return h;
    })
  }
  return min === Number.MAX_VALUE ? '请先点击' : min
}

export let newJson = obj => JSON.parse(JSON.stringify(obj))

export let queryVal = key => {
  let val;
  let search = window.location.search;
  if(search){
    let arr = search.slice(1).match(/[^=&]+=[^&]+/g)
    for(let i = 0, len = arr.length; i < len; i++){
      let arrI = arr[i].split('=');
      if(key == arrI[0] ){
        val = arrI[1];
        break;
      }
    }
  }
  return val;
}