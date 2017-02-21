#需求整理
- Action 发布任务
- Store 基于Action任务做一一对应,如action.dosomething 对应onDosomething函数
- Action 发布dosomething任务,Store随即做出响应调用onDosomething函数

#测试
node test.js
