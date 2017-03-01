#需求整理
- Store订阅Action传递过来的任务
- View 订阅Store变化
- Action发布任务action.dosomething
- Store随即做出响应调用onDosomething函数
- onDosomething函数附带新state对象触发trigger方法
- View随即做出响应调用相应的callback函数,通过setState改变view状态

#测试
node test.js
