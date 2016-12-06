var model = {
    filter: [{
        level: '1 前端进行级联渲染时，识别的关键信息',
        name: '条件名称,例如：统计主体，数据来源，地区，时间'
        fid: '条件名称对应的ID，例如：TJZT,SJLY,DQ,SJ',
        currid: '当前选中的ID,即：后台传过来的ID'
        list: [{
            name: '选项名称',
            id: '选项ID'
        }, {
            name: '选项名称N',
            id: '选项ID... N'
        }]
    }],
    table: {
        cols: [{
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
        data: [
            [
                "1",
                "2",
                "3"
            ],
            [
                "4",
                "5",
                "6"
            ]
        ],
        rows: [{
            "cname": "北京",
            "code": "bj",
            "select": true
        }, {
            "cname": "天津",
            "code": "tj",
            "select": true
        }]
    },
    explain: '字符串'
}