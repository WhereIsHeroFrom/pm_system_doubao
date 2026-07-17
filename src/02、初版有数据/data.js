const DB = {
    tasks: [
        { id: 1, name: '完成用户登录模块开发', description: '实现用户登录、注册、忘记密码等功能', priority: '高', startDate: '2026-07-01', endDate: '2026-07-10', status: '进行中', progress: 60, owner: '张三', createTime: '2026-07-01 09:00' },
        { id: 2, name: '设计数据库架构', description: '设计用户、角色、权限等表结构', priority: '高', startDate: '2026-06-25', endDate: '2026-06-30', status: '已完成', progress: 100, owner: '李四', createTime: '2026-06-25 10:00' },
        { id: 3, name: '前端页面原型设计', description: '设计首页、列表页、详情页的UI原型', priority: '中', startDate: '2026-06-28', endDate: '2026-07-05', status: '进行中', progress: 80, owner: '王五', createTime: '2026-06-28 14:00' },
        { id: 4, name: '接口文档编写', description: '编写RESTful API接口文档', priority: '中', startDate: '2026-07-02', endDate: '2026-07-08', status: '待开始', progress: 0, owner: '赵六', createTime: '2026-07-02 11:00' },
        { id: 5, name: '性能优化', description: '优化页面加载速度和接口响应时间', priority: '低', startDate: '2026-07-15', endDate: '2026-07-20', status: '待开始', progress: 0, owner: '张三', createTime: '2026-07-05 09:00' },
        { id: 6, name: '单元测试编写', description: '为核心模块编写单元测试用例', priority: '中', startDate: '2026-07-08', endDate: '2026-07-15', status: '暂停', progress: 30, owner: '李四', createTime: '2026-07-08 10:00' },
        { id: 7, name: '安全审计', description: '检查系统安全漏洞和隐患', priority: '高', startDate: '2026-07-10', endDate: '2026-07-18', status: '延期', progress: 10, owner: '王五', createTime: '2026-07-10 14:00' },
        { id: 8, name: '部署上线', description: '部署到生产环境并进行灰度发布', priority: '高', startDate: '2026-07-20', endDate: '2026-07-25', status: '待开始', progress: 0, owner: '赵六', createTime: '2026-07-12 09:00' },
        { id: 9, name: '用户反馈处理', description: '收集并处理第一批用户反馈', priority: '低', startDate: '2026-07-26', endDate: '2026-08-01', status: '待开始', progress: 0, owner: '张三', createTime: '2026-07-15 11:00' },
        { id: 10, name: '文档完善', description: '完善用户手册和开发文档', priority: '低', startDate: '2026-07-18', endDate: '2026-07-25', status: '终止', progress: 20, owner: '李四', createTime: '2026-07-18 14:00' }
    ],
    requirements: [
        { id: 1, name: '支持多语言切换', description: '实现中文、英文、日文三种语言切换', priority: '中', status: '待评审', source: '产品经理', createTime: '2026-07-01 09:00' },
        { id: 2, name: '移动端适配', description: '确保页面在手机和平板上正常显示', priority: '高', status: '评审通过', source: '用户反馈', createTime: '2026-06-28 10:00' },
        { id: 3, name: '数据导出功能', description: '支持将数据导出为Excel和PDF格式', priority: '中', status: '开发中', source: '业务部门', createTime: '2026-07-02 14:00' },
        { id: 4, name: '消息通知系统', description: '实现站内消息和邮件通知功能', priority: '高', status: '待验收', source: '产品经理', createTime: '2026-06-30 09:00' },
        { id: 5, name: '权限管理优化', description: '细化角色权限，支持自定义权限组', priority: '中', status: '已完成', source: '管理员', createTime: '2026-06-25 11:00' },
        { id: 6, name: '第三方登录', description: '支持微信、支付宝、QQ登录', priority: '低', status: '已驳回', source: '市场部门', createTime: '2026-07-03 10:00' },
        { id: 7, name: '数据分析报表', description: '增加多维度数据分析和可视化报表', priority: '高', status: '开发中', source: '运营部门', createTime: '2026-07-05 09:00' },
        { id: 8, name: 'API开放平台', description: '提供对外API接口供第三方调用', priority: '低', status: '已搁置', source: '技术部门', createTime: '2026-07-08 14:00' }
    ],
    defects: [
        { id: 1, name: '登录页面验证码不显示', description: '在Safari浏览器中验证码图片无法加载', severity: '致命', status: '待处理', owner: '张三', foundTime: '2026-07-05 09:00', fixVersion: 'V1.1' },
        { id: 2, name: '列表翻页按钮点击无响应', description: '连续点击翻页按钮后页面卡死', severity: '严重', status: '修复中', owner: '李四', foundTime: '2026-07-06 10:00', fixVersion: 'V1.0' },
        { id: 3, name: '数据导出格式错误', description: 'Excel导出时日期格式显示异常', severity: '一般', status: '待验证', owner: '王五', foundTime: '2026-07-07 14:00', fixVersion: 'V1.0' },
        { id: 4, name: '搜索功能大小写敏感', description: '搜索时区分大小写导致结果不准确', severity: '轻微', status: '已关闭', owner: '赵六', foundTime: '2026-07-04 11:00', fixVersion: 'V1.0' },
        { id: 5, name: '页面刷新后选中状态丢失', description: '刷新页面后之前选中的复选框全部清空', severity: '严重', status: '待处理', owner: '张三', foundTime: '2026-07-08 09:00', fixVersion: 'V1.1' },
        { id: 6, name: '移动端按钮点击区域过小', description: '手机端按钮点击区域太小容易误触', severity: '致命', status: '修复中', owner: '李四', foundTime: '2026-07-09 10:00', fixVersion: 'V1.1' },
        { id: 7, name: '图表数据加载缓慢', description: '大数据量时图表渲染需要5秒以上', severity: '一般', status: '重新打开', owner: '王五', foundTime: '2026-07-03 14:00', fixVersion: 'V1.2' },
        { id: 8, name: '导出文件名中文乱码', description: '导出的Excel文件中文名显示为乱码', severity: '轻微', status: '暂缓', owner: '赵六', foundTime: '2026-07-10 11:00', fixVersion: 'V1.2' }
    ]
};