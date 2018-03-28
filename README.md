## 1. 该项目用于练习 redux

    yarn add redux react-redux --save
    yarn add redux-devtools --save-dev

# 三大原则

 1. 单一数据源  

      整个应用的 `state` 被存储在一颗 `object tree` 中，并且这个 `object tree` 只存在于唯一一个 `store` 中。

 2. State是只读的  

      惟一改变 `state` 的方法就是触发 `action`，`action` 是一个用于描述已发生事件的普通对象。   

 3. 使用纯函数来执行操作  

      为了描述 action 如何改变 state tree ，你需要编写 reducers。


# react-redux connect 装饰器

    yarn add babel-plugin-transform-decorators-legacy --save

    package.json 添加
    ```
    "babel": {
        "presets": [
        "react-app"
        ],
        "plugins":["babel-plugin-transform-decorators-legacy"]
    },
    ```
# cookie-parser
