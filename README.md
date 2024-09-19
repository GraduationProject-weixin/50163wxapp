# [首页查询更多项目](https://github.com/GraduationProject-weixin) 包安装运行


# 50163wxapp微信小程序的校园二手交易平台系统设计与开发ssm

![picture](https://raw.githubusercontent.com/GraduationProject-springboot/.github/main/img/wx.png)

### 点击播放视频 ▼
[![Watch the video](https://i.sstatic.net/Vp2cE.png)]()


# 第1章 绪论
## 1.1 研究背景
互联网时代不仅仅是通过各种各样的电脑进行网络连接的时代，也包含了移动终端连接互联网进行复杂处理的一些事情。传统的互联网时代一般泛指就是PC端，也就是电脑互联网时代，但是最近几十年，是移动互联网时代，是向下一步互联网时代过度的一个重要时代，下一个互联网时代叫物联网，而移动互联网就是一个风口，是当前社会的主流风向。目前移动互联网大行其道，人人都手中拿着智能机，手机手机，手不离机，如果开发一个用在手机上的程序软件，那是多么的符合潮流，符合管理者和客户的理想。本次就是开发微信小程序的校园二手物品交易平台，有管理员和学生两个角色。管理员可以在后台管理个人中心，学生管理，商品分类管理，商品信息管理，购买信息管理，出售信息管理，交流论坛，系统管理。学生可以注册登录，发布和购买商品，还可以收藏商品和在交流论坛发帖。
## 1.2 研究现状
当微信小程序占领了多半江山，目前不分年龄和种族，使用频率最高，覆盖面积最广。使用人群使用的大多数都是微信小程序。目前国内最火的就是微信小程序，包含一些带商城的免费管理系统，或者一些带广告的免费应用，还有好多游戏之类的应用。尤其是经过疫情涌现的互联网办公，学校的互联网教学等，都不断的刷新人们对于互联网的认知。关于二手交易方面还是采用之前的操作，没有跟上时代。用微信小程序开发一个微信小程序的校园二手物品交易平台可以测试市场反应情况，顺应用户需求。
## 1.3 目的和意义
从经济成本考虑，手机的价格比较亲民，对于不是必须在电脑上办公的人员来讲，手机上如果能解决事情就更方便了。

从使用便利角度上讲，用手机上的应用处理业务，不用考虑网线是否存在，不用考虑位置是否变化，依托无处不在的手机信号就可以在任何有信号的地方处理事务，这是多么的方便和使用，不限制时间，不限制地点，高山平原山谷都可以作为使用的地点而不影响使用的效果。

从操作角度上讲，手机的操作先天性的高于电脑的操作，因为电脑适合处理复杂的操作，而手机就是为了简化操作而生的，方便高效操作简单。

此次开发这个微信小程序的校园二手物品交易平台，不仅仅满足用户的需要，也能跟上时代的发展风向，从技术的角度还是用户的角度上进行开发都是很有意义的。
## 1.4 论文研究内容
论文设计的结构也是依照程序开发的流程进展的，也涉及到功能需求分析，功能设计与实现，程序测试等流程。

绪论：讲解课题的背景与意义，展示论文结构。

程序开发技术：讲解程序运用到的工具与技术知识。

系统分析：讲解程序的功能需求与开发可行性问题。

系统设计：讲解程序的功能与数据库的设计。

系统实现：讲解程序功能与界面实现。

系统测试：讲解程序的功能测试。
# 第2章 程序开发技术
## 2.1 Mysql数据库
为了更容易理解Mysql数据库，接下来就对其具备的主要特征进行描述。

（1）首选Mysql数据库也是为了节省开发资金，因为网络上对Mysql的源码都已进行了公开展示，开发者根据程序开发需要可以进行下载，并做一些改动就可以使用在程序中，可以推动开发者开发此程序的开发进度。

（2）SQL数据语言在Mysql里面也同样适用

（3）Mysql不仅可以支持多种编程语言，比如在校期间学到的C语言，Java语言，以及课后接触的PHP语言，C++语言等编程语言，它都能很好的支持，而且Mysql的安装与使用还不挑剔使用平台。

（4）Mysql可以支持具有千万条数据记录的数据库，电脑操作系统在进行首次安装或者是重装时，可以根据需要选择安装32位或64位操作系统，这两种操作系统对表文件的支持力度不一样，32位的操作系统最多可以存放4GB的表文件，64位操作系统最多可以存放8TB的表文件。

（5）Mysql数据库可以通过GPL协议进行个性化定制，需要开发者自己对数据库的源代码进行修改，以此开发出属于自己的Mysql。
## 2.2 Java语言
程序开发语言有很多，但是截至目前，Java语言在IT领域内，仍然是最被认可，以及被广泛运用的编写语言之一，因此在选择此程序的编写语言上，果断选择这门编程语言进行程序开发。可以说经过了这么多年的发展，Java语言不仅在Web开发领域有了突出性贡献，而且在大数据开发领域以及微信小程序开发领域都得到了广泛运用。由于Java语言拥有较强的扩展性能，并且表现出的稳定性能，让其成为大型后端系统开发语言首选，现如今，Java语言也成为了一种常用的互联网平台的解决方案。

作为一种源码在网络上开源的面向对象的程序开发Java语言，由它开发完成的程序是不可能直接运行在各大平台的，Java程序的运行，需要在操作平台上配置其运行的环境，包括数据库软件与Java程序开发软件等工具的安装与配置。在Win7，Win10或其它操作平台上配置Java程序运行环境，只要环境配置成功，Java程序都可以运行起来。
## 2.3 微信小程序介绍
小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。
## 2.4 SSM框架
本课题程序开发使用到的框架技术，英文名称缩写是SSM，在JavaWeb开发中使用的流行框架有SSH、SSM、SpringMVC等，作为一个课题程序采用SSH框架也可以，SSM框架也可以，SpringMVC也可以。SSH框架是属于重量级别的框架，配置繁琐，不够灵活，修改程序需要修改好多个文件，并且运行起来也占用内存较高，CPU使用率相对也高，SpringMVC是Spring开发的一套MVC架构，更灵活更好用，SSM框架取中间值，既没有SSH臃肿，也没有SpringMVC简化，属于中间级别的，在配置过程和使用过程中更能编写和理解。MyBatis框架取代Hibernate框架是因为它更灵活，不需要完全在框架里操作，它在数据操作上可以写出更灵活的代码，它的性能也比Hibernate框架更稳定。总的来说，使用SSM框架是通过综合考虑而使用的，网上有很多的使用教程和心得体会，而且SSM又是这么的流行，用SSM框架开发是顺其自然的。
# 第3章 系统分析
在进行系统分析之前，需要从网络上或者是图书馆的开发类书籍中收集大量的资料，因为这个环节也是帮助即将开发的程序软件制定一套最优的方案，一旦确定了程序软件需要具备的功能，就意味着接下来的工作和任务都是围绕着这个方案执行的，所以系统分析需要对程序功能反复进行思考和研究。
## 3.1可行性分析
开发一款系统软件之前，用户都会思考这个软件程序值不值得去开发，把开发软件过程中可能涉及到的问题罗列出来，并一个个分析解决，以此来确定开发这款程序软件是否有必要，这样的分析方法也能帮助用户降低损失，不至于开发者开发进度进行到一半之后，突然遇到问题就放弃对软件的开发，到那时，资金损失，人力投入等方面就损耗太大了。
### 3.1.1技术可行性分析
此次开发程序使用到的开发工具有：Mysql等工具，使用的开发语言是Java，选择的开发工具和开发语言都是在大学课堂接触并学习过，后期因为自己也比较感兴趣，所以也通过网络渠道，或借助图书馆的开发类书籍进行过软件开发知识的系统学习，让自己有了一定的知识积累，加上自己在校期间也独立开发过一些软件作品，也积累了一定的开发经验，所以这次毕设作品的制作在技术上无须担忧过多。
### 3.1.2经济可行性分析
目前的信息时代，对信息的管理趋于高效化，便捷化，这也是计算机大力普及所带来的便利，此程序软件在设备选用上，依靠的是比较大众的电脑设备，对电脑的配置没有过多要求，一般学校的计算机机房的电脑都可以满足程序开发需求，另外，开发出此款程序，让信息处理变得高效率，其所带来的高效益是远超程序开发的低成本的，因此程序开发的资金投入是可以忽略不计的。
### 3.1.3操作可行性分析
程序软件的操作界面是符合大众审美的需求，功能模块的布局也是类似于社会上同种类型的软件，因此使用者操作该软件可以无需培训就上手。加上现在计算机入驻各家各户，大部分人的计算机操作水平都比较高，这样的局面也表明开发出来的程序在操作性问题上也是不用担心的。

综合上面的可行性论证，基本可以确定程序开发完全可行。
## 3.2系统运行环境
程序经过编码可以实现对程序设计的功能。但是编码实现时需要一定的配置环境，包括了电脑上的硬件环境，也包括在电脑操作系统上安装的软件环境。

硬件环境：一台可以正常使用并能够上网的笔记本或者是电脑，电脑内存最低要求4个G，电脑的中央处理器可以配置i5CPU。

软件环境：运用的微软操作系统是比较稳定的win7旗舰版系统，采用比较熟练的360安全浏览器，并在此系统上通过浏览器下载安装好MYSQL软件等。
## 3.3系统流程分析
分析程序的流程，涉及到程序的整体操作流程，通过分析与设计，绘制的程序操作流程图见下图。此程序为了确保安全，会让使用者通过登录模块验证信息，符合要求的使用者才有权限操作程序。

![](/md/blog.001.png)

图3-1 程序操作流程图

程序处理数据会涉及到数据的录入环节，绘制的添加流程见下图。程序录入数据过程中，始终与数据库保持同步。

![](/md/blog.002.png)

图3-2 信息添加流程图

程序里面的数据也会出现错误，因此就有相应的修改数据的功能，绘制的程序修改流程见下图。此过程也是跟后台数据库进行数据同步显示。

![](/md/blog.003.png)

图3-3信息修改流程图

程序数据存放于数据仓库，有时也会涉及到数据删除，此过程对应的流程图见下图。数据信息被删除之后，数据库里面也就没有了该数据信息了。

![](/md/blog.004.png)

图3-4 信息删除流程图

第4章 系统设计
## 4.1 系统设计的原则
在系统设计过程中，也需要遵循相应的设计原则，这些设计原则可以帮助设计者在短时间内设计出符合设计规范的设计方案。设计原则主要有可靠性，安全性，可定制化，可扩展性，可维护性，可升级性以及客户体验等原则。下面就对这些原则进行简要阐述。

可靠性：一个软件是否可靠决定了其是否被用户使用，设计不可靠的软件，用户很容易就遗弃；

安全性：程序软件承担了信息的保存与管理等事务，安全性不足的软件会导致使用者承担巨大的损失；所以系统安全也是需要考虑进入的；

可定制化：市场环境从来都不是一直固定不变，面对客户群体的改变，以及使用环境的改变，市场需求的改变等因素，程序软件也要易于调整以适应各种变化；

可扩展性：程序软件在运行使用期间，也需要及时引进当下的新技术来进行系统优化，主要就是在系统功能层面，系统性能层面上进行相应的扩展，只有这样才能让系统在实际生活中继续占有市场；

可维护性：程序软件的维护需要一定量的资金，不管是排除现有程序错误，还是变更软件的现有需求，都需要在软件技术上投入一定资金，所以易于维护的软件程序就可以降低技术层面的资金消耗；

可升级性：程序软件的投入使用，会面临用户数量增多的情况，用户对软件的使用率也会提升，所以系统面临这种情况，仍然需要通过升级保持性能的合理，这样才能够适应市场；

客户体验：设计出来的程序软件在界面上不能够太复杂，要遵循界面设计的原理设计出简单，方便操作的功能操作界面，让用户易于接受软件，并乐于使用软件提供的功能。
## 4.2 功能结构设计
在管理员功能模块确定下来的基础上，对管理员各个功能进行设计，确定管理员功能的详细模块。绘制的管理员功能结构见下图。

![](/md/blog.005.png)

图4-2 管理员功能结构图
## 4.3 数据库设计
与功能结构设计一样，数据库设计也是程序开发不可避免的设计环节，数据库设计最主要的目的就是帮助运行程序存储相应的数据信息。数据库设计包含的内容有数据表结构的设计，也包含了数据库E-R图的设计。
### 4.3.1 数据库E-R图
在绘制E-R图之前，先要找出数据库的实体，明确各个实体具有的属性，比如用户信息这个实体，它具备的属性包括了用户的姓名属性，用户的密码属性，用户的创建时间属性等，所以明确了用户这个实体，以及用户实体具备的属性之后，就需要根据这些信息绘制用户实体对应的实体属性图了。绘制软件选用当下认可度高，使用范围广，操作便利的微软旗下的Visio工具。

（1）管理员实体属性图通过Visio工具绘制，绘制结果展示如下：

![](/md/blog.006.png)

图4-4 管理员实体属性图

（2）学生实体属性图通过Visio工具绘制，绘制结果展示如下：

![](/md/blog.007.png)

图4-5 学生实体属性图

（3）商品分类实体属性图通过Visio工具绘制，绘制结果展示如下：

![](/md/blog.008.png)

图4-6 商品分类实体属性图
### 4.3.2 数据库表结构
在进行这部分设计之前，需要明白和掌握数据类型以及各个数据类型的长度范围等知识，因为在一张具体的数据表中，为了方便理解，这里就举个简单的例子。比如用户信息表，这个表格的字段就是用户这个实体具备的属性，这时就需要对字段进行数据类型，以及字段长度的设置，也要设置一个主键来作为用户信息表的唯一标识。这些都是数据库表结构设计需要完成的内容。根据微信小程序的校园二手物品交易平台的功能设计以及数据库设计要求，展示该系统的数据表结构。 

1交流论坛表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|title|String|帖子标题|是|
|4|content|String|帖子内容|是|
|5|parentid|Integer|父节点id|是|
|6|userid|Integer|用户id|是|
|7|username|String|用户名|是|
|8|isdone|String|状态|是|
2公告信息表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|title|String|标题|是|
|4|introduction|String|简介|是|
|5|picture|String|图片|是|
|6|content|String|内容|是|
3学生表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|xueshengzhanghao|String|学生账号|是|
|4|mima|String|密码|是|
|5|xueshengxingming|String|学生姓名|是|
|6|xingbie|String|性别|是|
|7|lianxifangshi|String|联系方式|是|
|8|touxiang|String|头像|是|
4商品分类表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|shangpinfenlei|String|商品分类|是|
5商品信息评论表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|refid|Integer|关联表id|是|
|4|userid|Integer|用户id|是|
|5|nickname|String|用户名|是|
|6|content|String|评论内容|是|
|7|reply|String|回复内容|是|
6商品信息表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|shangpinbianhao|String|商品编号|是|
|4|shangpinmingcheng|String|商品名称|是|
|5|shangpinfenlei|String|商品分类|是|
|6|shangpinfengmian|String|商品封面|是|
|7|shuliang|Integer|数量|是|
|8|guige|String|规格|是|
|9|jiage|float|价格|是|
|10|fabushijian|datetime|发布时间|是|
|11|shangpinxiangqing|String|商品详情|是|
|12|clicktime|datetime|最近点击时间|是|
|13|clicknum|Integer|点击次数|是|
7出售信息表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|chushoubianhao|String|出售编号|是|
|4|shangpinmingcheng|String|商品名称|是|
|5|shangpinfenlei|String|商品分类|是|
|6|shangpinfengmian|String|商品封面|是|
|7|chushoushuliang|Integer|出售数量|是|
|8|chushoujiage|float|出售价格|是|
|9|guige|String|规格|是|
|10|fabushijian|date|发布时间|是|
|11|xueshengzhanghao|String|学生账号|是|
|12|xueshengxingming|String|学生姓名|是|
|13|lianxifangshi|String|联系方式|是|
|14|shangpinxiangqing|String|商品详情|是|
|15|sfsh|String|是否审核|是|
|16|shhf|String|审核回复|是|
8收藏表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|userid|Integer|用户id|是|
|4|refid|Integer|收藏id|是|
|5|tablename|String|表名|是|
|6|name|String|收藏名称|是|
|7|picture|String|收藏图片|是|
|8|type|String|类型(1:收藏,21:赞,22:踩)|是|
|9|inteltype|String|推荐类型|是|
9管理员表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|username|String|用户名|是|
|3|password|String|密码|是|
|4|role|String|角色|是|
|5|addtime|Date|新增时间|是|
10购买信息表

|序号|列名|数据类型|说明|允许空|
| :-: | :-: | :-: | :-: | :-: |
|1|Id|Int|id|否|
|2|addtime|Date|创建时间|是|
|3|dingdanbianhao|String|订单编号|是|
|4|shangpinmingcheng|String|商品名称|是|
|5|shangpinfenlei|String|商品分类|是|
|6|shangpinfengmian|String|商品封面|是|
|7|guige|String|规格|是|
|8|jiage|float|价格|是|
|9|shuliang|Integer|数量|是|
|10|zongjia|float|总价|是|
|11|goumaishijian|date|购买时间|是|
|12|xueshengzhanghao|String|学生账号|是|
|13|xueshengxingming|String|学生姓名|是|
|14|beizhu|String|备注|是|
|15|ispay|String|是否支付|是|
|16|userid|Integer|用户id|是|




# 第5章 系统实现
系统实现这个章节的内容主要还是展示系统的功能界面设计效果，在实现系统基本功能，比如修改，比如添加，比如删除等管理功能的同时，也显示出系统各个功能的界面实现效果，该部分内容一方面与前面提到的系统分析，系统设计的内容相呼应，另一方面也是一个实际成果的展示。
## 5.1管理员后台功能实现
### 5.1.1 学生管理
此页面让管理员管理学生数据，管理员可以对学生信息进行添加，修改，删除，查询操作。

![](/md/blog.009.png)

图5-1 学生管理页面
### 5.1.2 商品信息管理
此页面让管理员管理商品信息数据，商品信息管理页面见下图。此页面主要实现商品信息方面信息的新增，查询和刷新操作。

![](/md/blog.010.png)

图5-2 商品信息管理页面
### 5.1.3 商品分类
此页面显示商品分类信息，商品分类页面见下图。此页面主要让管理员对商品分类进行查询，添加，修改，删除操作。

![](/md/blog.011.png)

图5-3 商品分类页面
### 5.1.4 交流论坛
此页面显示交流论坛信息。交流论坛页面见下图。管理员可以在此界面对交流论坛进行添加，修改，查询，删除等操作。

![](/md/blog.012.png)

图5-4 交流论坛页面
## 5.2 微信小程序功能实现
### 5.2.1 首页
微信小程序输入正确的账号密码后就会默认进入首页显示界面。首页主要有轮播图，搜索框，以及下面的导航为主要组成部分。

![](/md/blog.013.png)

图5-5 首页
### 5.2.2 交流论坛
学生点击交流论坛可以看到交流论坛界面，有搜索栏，可以随便点击某个交流论坛进行查看。

![](/md/blog.014.png)

图5-6 交流论坛页面
### 5.2.3 出售信息
学生登录可以在出售信息界面看到新增按钮，可以点击按钮发布出售信息。

![](/md/blog.015.png)

图5-7 出售信息页面
### 5.2.4 我的
我的里面主要是可以进行退出，点击小齿轮就可以选择退出当前账户，也可以点击我的收藏管理，可以看到自己收藏的所有信息。

![](/md/blog.016.png)

图5-8 我的页面















