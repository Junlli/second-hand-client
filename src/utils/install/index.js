import directive from './whole/directive'
import filter from './whole/filter'

const whole = {
  directive,
  filter
}

let inistall = function (Vue, opts = {}) {

  Object.keys(whole).forEach(val => {
    let funs = whole[val];
    Object.keys(funs).forEach( key => Vue[val](key, funs[key]))
  })
}
export default inistall
