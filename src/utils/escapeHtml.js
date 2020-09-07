import faces from '@/assets/js/face'

const escapeHtml = (val = '') => {
  if (!val) return ''
  // 表情替换
  let result = val
  const face = /\sface\[\W{1,}]/g
  if (face.test(result)) {
    const group = result.match(face)
    group.map(item => {
      const key = item.match(/\[\S+\]/g[0])
      result = result.replace(item, `<img src="${faces[key]}">`)
    })
  }
  // 图片替换
  // 链接替换
  // 引用替换
  // 代码块替换
  // hr替换
}

export { escapeHtml }
