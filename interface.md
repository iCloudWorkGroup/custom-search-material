## 树形结构

>  rootpath : http://localhost/


### 初始化&动态加载
 url:dimensiontree?m=dynamic&id=0(0节点id，0是根节点)

 ```javascript
 result:[{
    id:"c000000602"
    isParent:true
    name:"产品目录"
    pId:"父级ID",
    checked:false
    }]
 ```
### 树形查询

### 树形还原
 url:dimensiontree?m=reduce&id=345
 
## 数据查询
 url:search
 返回数据

 ```javascript
 {
    explain:'指标解释',
    filter:[{
        level:1,
        name:'filter名称',
        id:'filter ID'
        }],
    table:{
        "cols": [{
            "cname": "2010年",
            "code": "2010",
            "select": true
        }, {
            "cname": "2011年",
            "code": "2011",
            "select": true
        }, {
            "cname": "2012年",
            "code": "2012",
            "select": true
        }],
        "data": [
            ["1","2","3"],
            ["4","5","6"]
        ],
        "rows": [{
            "cname": "北京",
            "code": "bj",
            "select": true
        }, {
            "cname": "天津",
            "code": "tj",
            "select": true
        }]
    }
 }
 ```
### 下拉菜单选项获取

url: filter?m=list&type=sj

post

 ```
filter:[{
    level:1,
    name:'filter名称',
    id:'filter ID'
}]
```

```
[{
    name:'filter名称',
    id:'filter ID'
    }]
```

### 收藏报表

url:save

post 

```
[{
    explain:'指标解释',
    filter:[{
        level:1,
        name:'filter名称',
        id:'filter ID'
        }],
    table:{
        "cols": [{
            "cname": "2010年",
            "code": "2010",
            "select": true
        }, {
            "cname": "2011年",
            "code": "2011",
            "select": true
        }, {
            "cname": "2012年",
            "code": "2012",
            "select": true
        }],
        "data": [
            ["1","2","3"],
            ["4","5","6"]
        ],
        "rows": [{
            "cname": "北京",
            "code": "bj",
            "select": true
        }, {
            "cname": "天津",
            "code": "tj",
            "select": true
        }]
    }
 }]
```

### 制作报告 & 下载

url: opr?m = make | download

```
[{
    explain:'指标解释',
    filter:[{
        level:1,
        name:'filter名称',
        id:'filter ID'
        }],
    table:{
        "cols": [{
            "cname": "2010年",
            "code": "2010",
            "select": true
        }, {
            "cname": "2011年",
            "code": "2011",
            "select": true
        }, {
            "cname": "2012年",
            "code": "2012",
            "select": true
        }],
        "data": [
            ["1","2","3"],
            ["4","5","6"]
        ],
        "rows": [{
            "cname": "北京",
            "code": "bj",
            "select": true
        }, {
            "cname": "天津",
            "code": "tj",
            "select": true
        }]
    }
 }]
```

response 200

