(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{599:function(a,t,s){"use strict";s.r(t);var r=s(21),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),s("ul",[s("li",[a._v("数据库索引，是数据库管理系统（DBMS）中的数据结构，以协助快速查询，更新数据库表中数据")]),a._v(" "),s("li",[a._v("索引类型分为三种： 普通索引（Normal）、唯一索引（Unique）、全文索引（Fulltext）")]),a._v(" "),s("li",[a._v("唯一索引值不能相同")]),a._v(" "),s("li",[a._v("主键索引又叫做特殊的唯一索引， 主键索引有一个特点： 值不能为空")])]),a._v(" "),s("h2",{attrs:{id:"索引的推引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的推引"}},[a._v("#")]),a._v(" 索引的推引")]),a._v(" "),s("h3",{attrs:{id:"二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[a._v("#")]),a._v(" 二叉树")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802133117788.png",alt:"image-20200802133117788"}})]),a._v(" "),s("blockquote",[s("p",[a._v("数据的映射是按照顺序排序的， 但是特殊情况下，会出现复杂度log(N)")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802133237801.png",alt:"image-20200802133237801"}})]),a._v(" "),s("h3",{attrs:{id:"平衡二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平衡二叉树"}},[a._v("#")]),a._v(" 平衡二叉树")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802133313595.png",alt:"image-20200802133313595"}})]),a._v(" "),s("blockquote",[s("p",[a._v("当左右子树深度差绝对值超过1之后，会出现左右旋转 如下：")])]),a._v(" "),s("ol",[s("li",[a._v("左旋")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802133411988.png",alt:"image-20200802133411988"}})]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("右旋")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802133513755.png",alt:"image-20200802133513755"}})])])]),a._v(" "),s("p",[a._v("AVL树的数据存储方式")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802133547154.png",alt:"image-20200802133547154"}})]),a._v(" "),s("p",[s("strong",[a._v("存在的问题:")]),a._v("  每个节点只会存在一个数据，这样树的深度会很大，会造成大量的IO操作， 每次查询Page的大小为16K，如果只放一个数据在节点上，会大大浪费")]),a._v(" "),s("p",[a._v("这16k的查询空间， 猜想是否可以将多个数据节点（数据、数据地址、左右子节点的指针） 存放在一个磁盘块，而每个磁盘块的大小为16k，事实证明。16k可以存放很多很多数据")]),a._v(" "),s("h3",{attrs:{id:"多路平衡二叉树-b-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路平衡二叉树-b-tree"}},[a._v("#")]),a._v(" 多路平衡二叉树（B Tree）")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802134016408.png",alt:"image-20200802134016408"}})]),a._v(" "),s("blockquote",[s("p",[a._v("节点存储索引值，也存储 子节点的地址，但是有个问题， 如果值都存储的话，势必会导致树的深度变大，因为个磁盘块是16K， 如果存放的数据的话，那么会导致纵向变大")])]),a._v(" "),s("h3",{attrs:{id:"b-tree-加强版多路平衡查找树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-加强版多路平衡查找树"}},[a._v("#")]),a._v(" B+Tree 加强版多路平衡查找树")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802162328560.png",alt:"image-20200802162328560"}})]),a._v(" "),s("h4",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),s("ul",[s("li",[a._v("B Tree 能解决的问题， B+Tree 都能解决")]),a._v(" "),s("li",[a._v("扫库、扫表能力更强")]),a._v(" "),s("li",[a._v("磁盘读写能力更强")]),a._v(" "),s("li",[a._v("排序、范围查找能力更强")]),a._v(" "),s("li",[a._v("效率更加稳定")])]),a._v(" "),s("h3",{attrs:{id:"哈希索引-只有memory存储引擎才能使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引-只有memory存储引擎才能使用"}},[a._v("#")]),a._v(" 哈希索引（只有Memory存储引擎才能使用）")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802162548129.png",alt:"image-20200802162548129"}})]),a._v(" "),s("blockquote",[s("p",[a._v("确定是不能进行对比大小， 因为hash是无序的，还会导致hash冲突问题")])]),a._v(" "),s("h2",{attrs:{id:"不同存储引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同存储引擎"}},[a._v("#")]),a._v(" 不同存储引擎")]),a._v(" "),s("h3",{attrs:{id:"mysam-主键索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysam-主键索引"}},[a._v("#")]),a._v(" MySAM 主键索引")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802162714092.png",alt:"image-20200802162714092"}})]),a._v(" "),s("blockquote",[s("p",[a._v("主键索引存储主键值、行数据地址")])]),a._v(" "),s("h3",{attrs:{id:"mysam-辅助索引-二级索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysam-辅助索引-二级索引"}},[a._v("#")]),a._v(" MySAM 辅助索引（二级索引）")]),a._v(" "),s("p",[a._v("![image-20200802163023389](/img/mysql/image-20200802163023389.png"),s("img",{attrs:{src:"/img/mysql/image-20200802163104338.png",alt:"image-20200802163104338"}})]),a._v(" "),s("blockquote",[s("p",[a._v("叶子节点存储行地址信息")])]),a._v(" "),s("h3",{attrs:{id:"innodb-主键索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb-主键索引"}},[a._v("#")]),a._v(" InnoDB 主键索引")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802163158051.png",alt:"image-20200802163158051"}})]),a._v(" "),s("blockquote",[s("p",[a._v("叶子节点存储主键值 和 行数据")])]),a._v(" "),s("h3",{attrs:{id:"innodb-辅助索引-二级索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb-辅助索引-二级索引"}},[a._v("#")]),a._v(" InnoDB 辅助索引（二级索引）")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mysql/image-20200802163250536.png",alt:"image-20200802163250536"}})]),a._v(" "),s("blockquote",[s("p",[a._v("叶子节点存储索引值 和主键值， 如果没有索引没有覆盖的话，那么会发生回表，数据会到主键索引中 根据id 再查询需要的字段")])]),a._v(" "),s("h3",{attrs:{id:"因为疑问-如果没有主键呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#因为疑问-如果没有主键呢"}},[a._v("#")]),a._v(" 因为疑问？ 如果没有主键呢？")]),a._v(" "),s("ul",[s("li",[a._v("如果定义了主索引，那么主键索引就是聚集索引")]),a._v(" "),s("li",[a._v("如果你没有主键索引，但是你有一个不包含空值的唯一索引，那么就将这个唯一索引，当做聚集索引")]),a._v(" "),s("li",[a._v("如果既没有主键主键索引，也没有不包含空值的唯一索引，那么InnoDB中会为每一个生成一个RowId 当做聚集索引")])]),a._v(" "),s("h2",{attrs:{id:"索引创建和使用原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引创建和使用原则"}},[a._v("#")]),a._v(" 索引创建和使用原则")]),a._v(" "),s("h3",{attrs:{id:"散列度小的列-不要建立索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#散列度小的列-不要建立索引"}},[a._v("#")]),a._v(" 散列度小的列，不要建立索引")]),a._v(" "),s("p",[a._v("比如在性别上， 除了男 就是女 ，那么在建立索引的时候， 还不如直接差全表快")]),a._v(" "),s("h3",{attrs:{id:"最左匹配原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最左匹配原则"}},[a._v("#")]),a._v(" 最左匹配原则")]),a._v(" "),s("h3",{attrs:{id:"覆盖索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[a._v("#")]),a._v(" 覆盖索引")]),a._v(" "),s("h3",{attrs:{id:"在什么字段上创建索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在什么字段上创建索引"}},[a._v("#")]),a._v(" 在什么字段上创建索引？")]),a._v(" "),s("ul",[s("li",[a._v("where 、join 、order by")]),a._v(" "),s("li",[a._v("索引个数不要过度")]),a._v(" "),s("li",[a._v("散列度低的字段不要创建索引")]),a._v(" "),s("li",[a._v("随机无序或者频繁更新的值，不适合建立索引（用递增的ID作为主键索引，而不要用这种无序的UUID）")]),a._v(" "),s("li",[a._v("创建复合索引时避免冗余索引")])]),a._v(" "),s("h3",{attrs:{id:"什么时候索引失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候索引失效"}},[a._v("#")]),a._v(" 什么时候索引失效")]),a._v(" "),s("ul",[s("li",[a._v("索引列上使用函数、表达式、运算符")]),a._v(" "),s("li",[a._v("出现隐式转换")]),a._v(" "),s("li",[a._v("like 条件字符前面带% （最左前缀） （不一定）ICP")]),a._v(" "),s("li",[a._v("负向查询<> != not in")])])])}),[],!1,null,null,null);t.default=v.exports}}]);