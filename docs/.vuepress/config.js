module.exports = {
  title: '开发文档',
  description: 'Just playing around',
  themeConfig: {
    nav:[
      { text: '指南', link: '/' },
      { text: 'API', link: '/rule/' }
    ],
    sidebar: [
      {
        title: '代码规范',
        children: [
         ['/rule/','书写风格']
        ]
      },
      {
        title: '组件',
        children: [
          ['/component/','']
        ]
      },
      {
        title: '公用函数',
        children: [
         ['/rule/','书写风格']
        ]
      },
      {
        title: '后台数据输出模型',
        children: [
          ['/component/','']
        ]
      },
      {
        title: '后台请求状态码',
        children: [
          ['/component/','']
        ]
      },
      {
        title: '开发流程',
        children: [
          ['/component/','']
        ]
      },
      {
        title: '部署',
        children: [
          ['/component/','']
        ]
      }
    ]
  }
}