(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{640:function(s,a,e){"use strict";e.r(a);var t=e(21),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"生成ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-key"}},[s._v("#")]),s._v(" 生成ssh-key")]),s._v(" "),e("ul",[e("li",[s._v("生成第一个ssh key，第一个去默认名字，直接一直回车")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v('ssh-keygen -t rsa -C "1322287292@qq.com”\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("生成第二个ssh key， 在第一个输入的时候，输入一个名字我这里输入的是: id_rsa_github")])]),s._v(" "),e("h4",{attrs:{id:"这时应该有四个文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#这时应该有四个文件"}},[s._v("#")]),s._v(" 这时应该有四个文件")]),s._v(" "),e("p",[e("img",{attrs:{src:"/img/pwc/sshkey2.png",alt:"ssh-key"}})]),s._v(" "),e("h2",{attrs:{id:"使用ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用ssh-key"}},[s._v("#")]),s._v(" 使用ssh-key")]),s._v(" "),e("p",[s._v("Setting -> SSH and GPG keys -> New SSH key\n"),e("img",{attrs:{src:"/img/pwc/ssh_key_1.png",alt:"ssh-key"}})]),s._v(" "),e("h2",{attrs:{id:"添加私钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加私钥"}},[s._v("#")]),s._v(" 添加私钥")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("  ssh-add ~/.ssh/id_rsa \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("  ssh-add ~/.ssh/id_rsa_github\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果出现下面的情况")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("如果执行ssh-add时提示”Could not "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" a connection to your authentication agent”，\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可执行命令:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ ssh-agent "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后再重新运行ssh-add命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("  ssh-add ~/.ssh/id_rsa \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("  ssh-add ~/.ssh/id_rsa_github\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加后我们可以通过 ssh-add -l 来确私钥列表")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ ssh-add -l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/pwc/sshkey3.png",alt:"ssh-key"}}),s._v("\n如果想删除私钥列表，可以通过 ssh-add -D 来清空私钥列表")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ ssh-add -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"创建config文件-无后缀"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建config文件-无后缀"}},[s._v("#")]),s._v(" 创建config文件（无后缀）")]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("IdentityFile 要写 /")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github.com")]),s._v("\nHost github.com\nHostName github.com\nPreferredAuthentications publickey\nIdentityFile C:/Users/sizegang/.ssh/id_rsa_github\nUser Memorydoc\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github.com")]),s._v("\nHost github.com\nHostName github.com\nPreferredAuthentications publickey\nIdentityFile C:/Users/sizegang/.ssh/id_rsa\nUser Memorydoc123\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"_5-测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试"}},[s._v("#")]),s._v(" 5.测试")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/img/pwc/sshkey4.png",alt:"ssh-key"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);