import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import reativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(reativeTime)

const moment = (date) => {
  // 超过七天 显示日期
  if (dayjs(date).isBefore(dayjs().subtract(7, 'days'))) {
    return dayjs(date).format('YYYY-MM-DD')
  } else {
    // X小时前 x天前
    return dayjs(date).locale('zh-cn').from(dayjs())
  }
}

export default {
  moment
}
