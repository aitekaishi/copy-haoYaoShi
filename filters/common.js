// 通用过滤器
import CommonUtils from '@/utils/common'
import moment from 'moment'

export default {
  /* null、undefined转空字符串 */
  empty: value => {
    return CommonUtils.isEmpty(value) ? '' : value
  },
  // 分转元,整数部分每三位用,隔开
  fen2yuan: s => {
    if (CommonUtils.isEmpty(s)) {
      return '0.00'
    }
    let n = 2
    s = parseFloat((s / 100 + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
    let l = s.split('.')[0].split('').reverse()
    let r = s.split('.')[1]
    let t = ''
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
    }
    return t.split('').reverse().join('') + '.' + r
  },
  cerIdFilter: value => {
    value += ''
    return value.slice(0, 9) + '****' + value.slice(14)
  },
  formatTime: (value, toFormate) => {
    if (toFormate) {
      return moment(value).format(toFormate)
    } else {
      return moment(value).format('YYYY-MM-DD')
    }
  }
}
