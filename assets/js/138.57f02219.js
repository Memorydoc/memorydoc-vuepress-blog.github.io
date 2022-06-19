(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{643:function(a,t,s){"use strict";s.r(t);var r=s(21),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前端优化手段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端优化手段"}},[a._v("#")]),a._v(" 前端优化手段")]),a._v(" "),s("h4",{attrs:{id:"减少前端js-css-请求数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少前端js-css-请求数"}},[a._v("#")]),a._v(" 减少前端js css 请求数")]),a._v(" "),s("p",[a._v("合并css js 图片")]),a._v(" "),s("h4",{attrs:{id:"使用客户端缓冲"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端缓冲"}},[a._v("#")]),a._v(" 使用客户端缓冲")]),a._v(" "),s("p",[a._v("静态资源缓存在浏览器上，  通过设 "),s("code",[a._v("Cache-Control")]),a._v(" 和 "),s("code",[a._v("Expires")])]),a._v(" "),s("h4",{attrs:{id:"启用压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用压缩"}},[a._v("#")]),a._v(" 启用压缩")]),a._v(" "),s("p",[a._v("在服务端压缩， 在客户端解压缩\n但是会对浏览器和服务器上都会带来性能上的压力， 所以这个压缩需要权衡")]),a._v(" "),s("h4",{attrs:{id:"资源文件加载顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源文件加载顺序"}},[a._v("#")]),a._v(" 资源文件加载顺序")]),a._v(" "),s("p",[a._v("Css 放在最上面， 先渲染界面， js放在下面，如果js比较复杂，将阻塞界面渲染， 最好是将js放在最下面。")]),a._v(" "),s("h4",{attrs:{id:"减少-cookie-传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少-cookie-传输"}},[a._v("#")]),a._v(" 减少 Cookie 传输")]),a._v(" "),s("p",[a._v("每次请求 cookie都会在浏览器和服务器 进行传输，如果cookie过大，将会加大传输压力")]),a._v(" "),s("h4",{attrs:{id:"给用户一个提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#给用户一个提示"}},[a._v("#")]),a._v(" 给用户一个提示")]),a._v(" "),s("p",[a._v("当浏览器或者 服务器在进行某种操作的时候，最好给用户一个提示，这样用户会有更好的体验")]),a._v(" "),s("h3",{attrs:{id:"cdn-加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn-加速"}},[a._v("#")]),a._v(" CDN 加速")]),a._v(" "),s("p",[a._v("静态文件的CDN加速")]),a._v(" "),s("h3",{attrs:{id:"反向代理缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理缓存"}},[a._v("#")]),a._v(" 反向代理缓存")]),a._v(" "),s("p",[a._v("直接通过nginx 将静态资源反向代理返回给 客户端，都不需要将静态资源加载到服务器")]),a._v(" "),s("h3",{attrs:{id:"web-组件分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-组件分离"}},[a._v("#")]),a._v(" WEB 组件分离")]),a._v(" "),s("p",[a._v("将静态资源 设置不同域名放置在不同服务器上，因为浏览器针对于相同域名 下载资源的时候，受限于最大资源数的限制， 限制了浏览器的下载速度\n如果 将 img 部署在  img.com 域名下， 将 js 部署在 js 域名下，等等，将大大加快浏览器下载静态资源的速度")]),a._v(" "),s("h2",{attrs:{id:"后端优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端优化"}},[a._v("#")]),a._v(" 后端优化")]),a._v(" "),s("h3",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),s("p",[a._v("网站性能优化第一定律： 优先使用缓存优化性能")]),a._v(" "),s("h4",{attrs:{id:"缓存的基本原理和本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存的基本原理和本质"}},[a._v("#")]),a._v(" 缓存的基本原理和本质")]),a._v(" "),s("ul",[s("li",[a._v("频繁修改的数据，尽量不要缓存")]),a._v(" "),s("li",[a._v("缓存一定是热点数据，做不到将所有数据缓存， 缓存是在内存中缓存，缓存是比较昂贵的")]),a._v(" "),s("li",[a._v("使用缓存就要容忍一定时间的数据不一致（最终一致性）")]),a._v(" "),s("li",[a._v("缓存可用性问题： 使用集群 使缓存高可用")]),a._v(" "),s("li",[a._v("缓存预热： 缓存系统突然启动后，会对数据库压力增大，可以提前将一些热点数据提前缓存")]),a._v(" "),s("li",[a._v("缓存击穿： 持续高并发访问缓存中不存在的数据，会直接访问 数据库，给数据库造成较大的压力\n解决方法\n1.使用布隆过滤器（布隆过滤器将 访问的数据 通过不同的HASH算法， 分布到一个数组中， 不同的算法映射到不同的位置，布隆过滤器有一个特点\n就是： 布隆过滤器判断存在的 数据在 不一定存在，但是 判断"),s("strong",[a._v("不存在的")]),a._v(" 一定是"),s("strong",[a._v("不存在")]),a._v("）\n2. 持续访问 多次（三次） 不存在的数据， 如果缓存和数据库中都不存在，那么在缓存中造一条当前数据缓存，防止缓存击穿")])]),a._v(" "),s("h4",{attrs:{id:"分布式缓存与一致性哈希"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存与一致性哈希"}},[a._v("#")]),a._v(" 分布式缓存与一致性哈希")]),a._v(" "),s("p",[a._v("如果使用缓存集群，但是 如果仅仅使用一个一个服务器并排的 缓存， 会")]),a._v(" "),s("h2",{attrs:{id:"异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[a._v("#")]),a._v(" 异步")]),a._v(" "),s("h4",{attrs:{id:"同步和异步-阻塞和非阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步-阻塞和非阻塞"}},[a._v("#")]),a._v(" 同步和异步， 阻塞和非阻塞")]),a._v(" "),s("p",[a._v("同步阻塞： BIO编程\n同步非阻塞： NIO 编程\n异步非阻塞： AIO 编程")]),a._v(" "),s("p",[a._v("将消息发送到消息中间件（消息队列）， 主线程直接返回， 异步发送通知消息。(短信，邮件 等等)")]),a._v(" "),s("h2",{attrs:{id:"集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[a._v("#")]),a._v(" 集群")]),a._v(" "),s("p",[a._v("单个服务器 在并发访问的时候， 压力过大， 并发量编程， 系统吞吐量和系统性能 会逐渐降低。 这时候引入集群，将压力分摊到多个服务器上。有利于提高系统吞吐量和性能")]),a._v(" "),s("h2",{attrs:{id:"代码级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码级别"}},[a._v("#")]),a._v(" 代码级别")]),a._v(" "),s("h4",{attrs:{id:"选择合适的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的数据结构"}},[a._v("#")]),a._v(" 选择合适的数据结构")]),a._v(" "),s("p",[a._v("比如说： 在大循环中尽量不要使用"),s("code",[a._v("ArrayList")]),a._v(" ，因为会出现扩容问题")]),a._v(" "),s("h4",{attrs:{id:"选择合适的算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的算法"}},[a._v("#")]),a._v(" 选择合适的算法")]),a._v(" "),s("p",[a._v("比如说： 在排序的方法中， 选择最合适的排序算法")]),a._v(" "),s("h4",{attrs:{id:"编写最少的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写最少的代码"}},[a._v("#")]),a._v(" 编写最少的代码")]),a._v(" "),s("p",[a._v("比如说： 减少代码中不必要的部分")]),a._v(" "),s("h2",{attrs:{id:"并发编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发编程"}},[a._v("#")]),a._v(" 并发编程")]),a._v(" "),s("h4",{attrs:{id:"充分利用cpu多核-尽量使用线程池-合理设置线程数量-尽量使用jdk自带的并发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#充分利用cpu多核-尽量使用线程池-合理设置线程数量-尽量使用jdk自带的并发工具"}},[a._v("#")]),a._v(" 充分利用CPU多核，尽量使用线程池， 合理设置线程数量，尽量使用JDK自带的并发工具")]),a._v(" "),s("h4",{attrs:{id:"实现线程安全的类-避免线程安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现线程安全的类-避免线程安全问题"}},[a._v("#")]),a._v(" 实现线程安全的类，避免线程安全问题")]),a._v(" "),s("h4",{attrs:{id:"同步下减少锁的竞争"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步下减少锁的竞争"}},[a._v("#")]),a._v(" 同步下减少锁的竞争")]),a._v(" "),s("ul",[s("li",[a._v("缩小锁的范围，缩小锁的粒度， 锁分段（"),s("code",[a._v("CurrentHashMap")]),a._v("）")]),a._v(" "),s("li",[a._v("替换独占锁， 读写锁， "),s("code",[a._v("CAS")]),a._v("代替锁，"),s("code",[a._v("ThreadLocal")]),a._v(" 等等")])]),a._v(" "),s("h2",{attrs:{id:"资源复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源复用"}},[a._v("#")]),a._v(" 资源复用")]),a._v(" "),s("p",[a._v("减少开销很大的系统资源的创建和销毁")]),a._v(" "),s("h4",{attrs:{id:"单例模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[a._v("#")]),a._v(" 单例模式")]),a._v(" "),s("h4",{attrs:{id:"池化技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#池化技术"}},[a._v("#")]),a._v(" 池化技术")]),a._v(" "),s("p",[a._v("比如： 数据库连接池中的连接都是比较昂贵的资源，使用完要释放，方便其他线程获取使用")])])}),[],!1,null,null,null);t.default=v.exports}}]);