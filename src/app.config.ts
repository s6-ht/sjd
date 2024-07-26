export default defineAppConfig({
  pages: ['pages/index/index', "pages/user-center/index"],
  tabBar: {
    // custom: true,
    color: "#666666",
    selectedColor: "#FF5F15",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/user-center/index',
        text: '个人中心'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});