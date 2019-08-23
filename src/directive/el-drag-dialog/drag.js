export default {
  bind(el, binding, vnode) {
    // el	directive 所绑定的元素，可以用来直接操作 DOM 。 //binding	bind 的對象(傳的值或 function) //vnode	虛擬節點。 //oldVnode	上一個虛擬節點。

    // event hook
    //  bind	directive 第一次绑定到元素時調用，初始化動作(一次)。
    // inserted	被绑定元素插入父節點時調用。
    // update	directive 傳入的參數，更新的時後會調用。
    // componentUpdated	參數更新完成時調用。
    // unbind	指令與元素解除時調用。

    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    dialogHeaderEl.style.cssText += ';cursor:move;' // 變更滑鼠指標預設樣式
    dragDom.style.cssText += ';top:0px;'

    // 獲取原有屬性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const getStyle = (function() {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr]
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr]
      }
    })()

    dialogHeaderEl.onmousedown = e => {
      // 鼠標按下，計算當前元素距離可視區的距離

      // https://andyyou.github.io/2015/04/07/get-an-element-s-position-by-js/
      // https://www.cnblogs.com/xiaohuochai/p/5828369.html
      // event按下鼠标
      // 鼠标按下，计算当前元素距离可视区的距离
      // offsetLeft 表示距離最近的相對定位的父元素的左側偏移量
      // offsetTop表示元素的上外边框至offsetParent元素的上内边框之间的像素距离
      // offsetLeft表示元素的左外边框至offsetParent元素的左内边框之间的像素距离

      const disX = e.clientX - dialogHeaderEl.offsetLeft // 我現在按的這個點，相對於client的X
      const disY = e.clientY - dialogHeaderEl.offsetTop // 我現在按的這個點，相對於client的Y

      const dragDomWidth = dragDom.offsetWidth
      const dragDomheight = dragDom.offsetHeight

      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight

      // 獲取到的值帶px 正則匹配替換
      let styL = getStyle(dragDom, 'left')
      let styT = getStyle(dragDom, 'top')

      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
      } else {
        styL = +styL.replace(/\px/g, '')
        styT = +styT.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        // 通過事件委託，計算移動的距離
        let left = e.clientX - disX
        let top = e.clientY - disY

        // 邊界處理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop
        }

        // 移動當前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`

        // emit onDrag event
        vnode.child.$emit('dragDialog')
      }

      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}

// event.client 對於瀏覽器窗口
// event.page = event.client + 滾動調距離
// event.offset 滑鼠相對於事件源元素 offset意為偏移量,是事件物件距左上角為參考原點的距離。
// event.screen 滑鼠相對於螢幕左上角的X,Y坐標。
