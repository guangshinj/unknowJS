// @ts-nocheck
/* eslint-disable */
// 第一部分: ['作用域', '词法作用域', '函数作用域和块作用域', '提升', '作用域闭包'],
// 第二部分: ['关于this', 'this全面解析', '对象', '混合对象类', '原型', '行为委托'],

export const config: { [key: string]: string[][] } = {
  作用域: [
    ['h1', 'JavaScript特点'],
    ['p', 'JS是编译型语言，编译过程是在代码执行前很短的时间（一般几微妙，甚至更快）内发生的'],
    ['p', 'JS使用词法作用域，非动态作用域'],
    ['h1', '分词(Tokenizing)/词法分析(Lexing)'],
    ['p', 'var a = 2'],
    ['h1', '解析/语法分析(Parsing)'],
    ['p', '词法单元流（数组）转化成抽象语法树（AST）'],
    ['h1', '代码生成'],
    ['p', ' AST转化机器指令'],
    ['h1', '引擎在作用域查找方式'],
    [
      'p',
      'LHS（赋值操作的目标是谁），LHS失败可能会导致ReferenceError（非严格模式不会异常，会创建变量）'
    ],
    ['p', 'RHS（谁是赋值操作的源头），RHS失败导致ReferenceError']
  ]
}

export function handler() {
  try {
    console.info('1.ts')
  } catch (e) {
    console.warn(e)
  }
}
