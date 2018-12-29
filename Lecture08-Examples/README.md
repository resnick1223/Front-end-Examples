# Homework 8

## 8.1 使用ejs重構程式碼

- 將Sticky Note OOP版使用ejs模板重新改寫
- 增加一個路由 `/sticky/:id` 給定id後可以呈現記事內容

## 8.2 寫出一個Pokemon查詢程式

- 資料放在`pokemons.js`

```
var pokemons = [
    {name:"妙蛙種子", nationalNo:1},
    {name:"小火龍", nationalNo:4}
];
```

- 路由`/home`，重新導向`/pokemon/all`
```
res.redirect('/pokemon/all');
```
- 用ejs呈現所有的pokemons，路由 `/pokemon/all`
- 建立輸入表單 用編號查詢pokemon
- 建立查詢結果的view，路由 `/pokemon/:nationalNo`
