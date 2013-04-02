App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  // model: function() {
  //   return ['red', 'yellow', 'blue'];
  // }
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Page = DS.Model.extend({
  "url": DS.attr('string'),
  "content": DS.attr('string'),
  "site_id": DS.attr('string'),
  "create_at": DS.attr('string'),
  "title": DS.attr('string')
})






App.Page.FIXTURES =  [{"url": "http://sw.scu.edu.cn/sw/zsjy/jyxx/webinfo/2013/04/1343288900326602.htm", "content": "公司简介 北京九城志方软件科技有限公司隶属于北京九城集团，九城集团成立于1995年，2004年12月成为美国纳斯达克上市企业(NASDAQ:NINE)。凭借十多年对产品质量在供应链上的风险控制经验和能力积累，九城打造出以“透明供应链”为代表的质量智能控制体系和核心能力。为13万家中国进出口企业提供B2G(企业对政府)进出口质量通关软件及相关服务，市场占有率近90%。 2009年4月，九城集团正式进军食品B2C领域，应用“透明供应链”体系——从源头抓起，对食品产业链进行严格的全流程质量检验、追溯和展现，以安全、透明、便捷及个性化的方式向中国的白领及家庭提供新鲜、美味、营养和时尚的优质食品。立志成为中国高品质食品B2C领域的第一电子商务提供商。 九城的定位 凭借“基于供应链的产品质量数据分析能力和质量风险管理能力”（凭借“透明供应链”独特模式），为中国进出口企业提供质量通关软件及服务； 凭借“透明供应链”独特模式以及安全、透明、便捷和个性化的电子商务方式，向中国的白领家庭提供新鲜、美味、营养和时尚的有机及优质食品。 九城的使命 凭借“基于供应链的产品质量数据分析能力和质量风险管理能力”，以独创的“透明供应链”体系，让人们安全、透明、便捷及个性化地享用高品质产品和服务。 九城的愿景 让人们安全、透明、便捷及个性化地享用优质产品。 九城的目标 中国高品质食品B2C领域的第一电子商务提供商。 中国电子商务领域中最为消费者信赖的企业、最宜员工工作的企业、和最具股东长远投资价值的企业。 九城Slogan 质量透明度决定客户满意度！ 透明产生信任！ 好产品畅通天下！ 九城的发展战略 以“透明供应链”为理念，以网络技术为手段，通过构建电子商务营销平台和全程保障质量的供应链，为人们提供“放心”的优质产品。 关键数据 ·  近90%——中国最具规模化的进出口电子通关服务商（九城软件产品及相关服务的市场份额近90% ，绝对领先的市场地位） ·  134,000——市场主导者和技术领先者（[134,000] 个企业用户，遍及中国出口行业） ·  60——遍及全球的销售、服务网络系统（在全球设立60家机构） 岗位要求： 1.    完成软件系统代码的实现，编写代码注释和开发文档； 2.    辅助进行系统的功能定义,程序设计； 3.    根据设计文档或需求说明完成代码编写，调试，测试和维护； 4.    分析并解决软件开发过程中的问题； 5.    协助测试工程师制定测试计划，定位发现的问题； 6.    配合项目经理完成相关任务目标。 任职资格： 1.    大专以上学历，计算机或理工科相关专业毕业； 2.    良好的综合素质，严谨的逻辑思维能力，有志于从事专业的软件开发工作，有软件开发天赋尤佳； 3.    精通java开发，熟练运用struts2,spring,hibernate构架； 4.    熟悉常用数据结构和算法； 5.    学习能力和分析能力强。 6.    有良好的团队意识。 南宁办事处联系方式： 地址：广西南宁市民族大道82号嘉和南湖之都813室 电话：瞿经理771-5761657，王经理13982005251 邮箱：wangzhirong@ninetowns.com",
  "site_id": "sw", "create_at": "2013-04-02", "title": "北京九城志方软件科技有限公司招聘（网投）-"},
  {"url": "http://sw.scu.edu.cn/sw/xwgg/xyxw/webinfo/2012/12/1343288886725940.htm", "content": "12月18上午9点30分，在望江校区计算机学院基础教学楼B314，来自新加坡国立大学的Martin Henz教授为同学们带来了一场关于约束编程的精彩学术报告。 会议开始，我院副院长彭舰教授详细介绍了Martin Henz教授的学术背景，并代表学院对他的到来表示热烈的欢迎。 报告中，Martin Henz教授为大家形象地讲解了约束编程，他引用实例进入主题，提供一个对约束编程的直观认识，不断加入新的条件缩小搜索的范围。而后，继续深入讲解了约束编程的发展历史、原理以及应用。Martin Henz教授的讲解细致生动，与同学们互动频繁，给大家留下了非常深刻的印象。 报告持续了一个半小时，最后在热烈的掌声中结束，大家仍意犹未尽，几位同学围绕着Martin Henz教授继续求教关于约束编程的问题，Martin Henz教授也不厌其烦的一一解答。 最后，Martin Henz教授与到场的同学们合影留恋，此次报告正式结束。 (文字：蒋菱； 摄影：王喜梅) 计算机学院（软件学院）记者团 2012年12月19日 ",
  "site_id": "sw", "create_at": "2013-04-01", "title": "学术报告“关于约束编程”在我院举行-"},]
