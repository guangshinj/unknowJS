// @ts-nocheck
/* eslint-disable */
// 第一部分: ['作用域', '词法作用域', '函数作用域和块作用域', '提升', '作用域闭包'],
// 第二部分: ['关于this', 'this全面解析', '对象', '混合对象类', '原型', '行为委托'],

export const config: { [key: string]: string[][] } = {
  作用域闭包: [
    ['h1', '闭包是什么？'],
    ['p', '1. 闭包不是一个函数，更像一个词法作用域'],
    ['p', '2. 闭包包含一个特定函数，而特定函数持有闭包这个作用域（引用了闭包中的内容）'],
    ['p', '3. 闭包之外的词法作用域不能直接访问闭包的内容，但通过特定函数间接的使用了闭包中的内容'],
    ['h1', '闭包传递方式(将内部函数传递到函数所在词法作用域之外)'],
    ['p', '1. return函数'],
    ['p', '2. 函数传递'],
    ['p', '3. 闭包之外定义外部变量赋值'],
    ['h1', '闭包使用场景'],
    ['p', '1. 定时器'],
    ['p', '2. 事件监听器'],
    ['p', '3. Ajax请求'],
    ['p', '4. 跨窗口通信'],
    ['p', '5. Web Workers'],
    ['p', '6. 同步或异步任务'],
    ['p', '其他场景：let声明,模块模式等'],
    ['h1', '模块模式'],
    ['p', '1. 具备封闭函数，至少被调用一次（形成闭包条件之一）'],
    ['p', '2. 封闭函数返回内部函数，内部函数持有闭包的内容，可以访问和修改内容'],
    ['h1', '模块模式的过渡'],
    ['p', '1. 之前是通过return API接口方式'],
    ['p', '2. 经历了AMD、CMD通过define函数定义模块'],
    ['p', '3. 目前大量通过ES6的import/export方式']
  ]
}

export function handler() {
  try {
    var moduleMaker = (function CoolModule() {
      const modules = {}
      function define(name, deps, callback) {
        for (let i = 0; i < deps.length; i++) {
          deps[i] = modules[deps[i]]
        }
        console.info('view callback before apply', callback)
        modules[name] = callback.apply(callback, deps) // 核心代码
      }

      function get(name) {
        return modules[name]
      }

      return {
        define,
        get
      }
    })()

    moduleMaker.define('node', [], function() {
      console.info('view this in node', this)
      function createNode(value, next) {
        return {
          value,
          next
        }
      }
      return {
        createNode
      }
    })

    moduleMaker.define('linkList', ['node'], function(nodeAPI) {
      console.info('view this in linkList', this)
      function createLinkList(arr) {
        let parentNode = null
        for (let i = arr.length - 1; i >= 0; i--) {
          parentNode = nodeAPI.createNode(arr[i], parentNode)
        }

        return parentNode
      }

      function print(linkList) {
        let result = linkList.value
        while (linkList.next) {
          linkList = linkList.next
          result += ' => '
          result += linkList.value
        }
        return result
      }

      return {
        createLinkList,
        print
      }
    })

    const arr = [1, 3, 4, 2, 7, 9, 6]
    console.info('array', arr)
    const linkListModule = moduleMaker.get('linkList')
    const linkList = linkListModule.createLinkList(arr)
    console.info('linkList', linkListModule.print(linkList))
  } catch (e) {
    console.warn(e)
  }
}
