export default {
  formatTime: function(val, format = 0, slice = '/'){
    const date = new Date(val);
    const repair = num => num.length === 1 ? '0' + num : num;
    const aFn = [
      () => date.getFullYear() + slice,
      () => repair(date.getMonth() + 1) + slice,
      () => repair(date.getDate()) + ' ',
      () => repair(date.getHours()) + ':',
      () => repair(date.getMinutes()) + ':',
      () => repair(date.getSeconds()),
    ]
    function oFn() {
      let str = '';
      Array.isArray(format) ?
        aFn.slice(format[0], format[1]).forEach(fn => str += fn()) :
        aFn.slice(format).forEach(fn => str += fn())
      return str;
    }
    return oFn();
  }
}
