"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3729],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],u={title:"JuiceFS",keywords:["hudi","hive","jfs","spark","flink"],summary:"On this page, we go over how to configure Hudi with JuiceFS.",last_modified_at:new Date("2021-10-01T03:24:24.000Z")},s=void 0,c={unversionedId:"jfs_hoodie",id:"jfs_hoodie",isDocsHomePage:!1,title:"JuiceFS",description:"On this page, we explain how to use Hudi with JuiceFS.",source:"@site/docs/jfs_hoodie.md",sourceDirName:".",slug:"/jfs_hoodie",permalink:"/docs/next/jfs_hoodie",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/docs/jfs_hoodie.md",version:"current",frontMatter:{title:"JuiceFS",keywords:["hudi","hive","jfs","spark","flink"],summary:"On this page, we go over how to configure Hudi with JuiceFS.",last_modified_at:"2021-10-01T03:24:24.000Z"},sidebar:"docs",previous:{title:"Baidu Cloud",permalink:"/docs/next/bos_hoodie"},next:{title:"Docker Demo",permalink:"/docs/next/docker_demo"}},l=[{value:"JuiceFS Preparing",id:"juicefs-preparing",children:[{value:"Creating JuiceFS",id:"creating-juicefs",children:[]},{value:"JuiceFS configuration",id:"juicefs-configuration",children:[]},{value:"JuiceFS Hadoop SDK",id:"juicefs-hadoop-sdk",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On this page, we explain how to use Hudi with JuiceFS."),(0,a.kt)("h2",{id:"juicefs-preparing"},"JuiceFS Preparing"),(0,a.kt)("p",null,"JuiceFS is a high-performance distributed file system. Any data stored into JuiceFS, the data itself will be persisted in object storage (e.g. Amazon S3), and the metadata corresponding to the data can be persisted in various database engines such as Redis, MySQL, and TiKV according to the needs of the scene."),(0,a.kt)("p",null,"There are three configurations required for Hudi-JuiceFS compatibility:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating JuiceFS"),(0,a.kt)("li",{parentName:"ul"},"Adding JuiceFS configuration for Hudi"),(0,a.kt)("li",{parentName:"ul"},"Adding required jar to ",(0,a.kt)("inlineCode",{parentName:"li"},"classpath"))),(0,a.kt)("h3",{id:"creating-juicefs"},"Creating JuiceFS"),(0,a.kt)("p",null,"JuiceFS supports multiple engines such as Redis, MySQL, SQLite, and TiKV."),(0,a.kt)("p",null,"This example uses Redis as Meta Engine and AWS S3 as Data Storage in Linux env."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"JFS_LATEST_TAG=$(curl -s https://api.github.com/repos/juicedata/juicefs/releases/latest | grep 'tag_name' | cut -d '\"' -f 4 | tr -d 'v')\nwget \"https://github.com/juicedata/juicefs/releases/download/v${JFS_LATEST_TAG}/juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz\"\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir juice && tar -zxvf "juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz" -C juice\nsudo install juice/juicefs /usr/local/bin\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Format a filesystem")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"juicefs format \\\n    --storage s3 \\\n    --bucket https://<your-bucket-name> \\\n    --access-key <your-access-key-id> \\\n    --secret-key <your-access-key-secret> \\\n    redis://:<password>@<redis-host>:6379/1 \\\n    myjfs \n")),(0,a.kt)("h3",{id:"juicefs-configuration"},"JuiceFS configuration"),(0,a.kt)("p",null,"Add the required configurations in your core-site.xml from where Hudi can fetch them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<property>\n    <name>fs.defaultFS</name>\n    <value>jfs://myfs</value>\n    <description>Optional, you can also specify full path "jfs://myfs/path-to-dir" with location to use JuiceFS</description>\n</property>\n<property>\n    <name>fs.jfs.impl</name>\n    <value>io.juicefs.JuiceFileSystem</value>\n</property>\n<property>\n    <name>fs.AbstractFileSystem.jfs.impl</name>\n    <value>io.juicefs.JuiceFS</value>\n</property>\n<property>\n    <name>juicefs.meta</name>\n    <value>redis://:<password>@<redis-host>:6379/1</value>\n</property>\n<property>\n    <name>juicefs.cache-dir</name>\n    <value>/path-to-your-disk</value>\n</property>\n<property>\n    <name>juicefs.cache-size</name>\n    <value>1024</value>\n</property>\n<property>\n    <name>juicefs.access-log</name>\n    <value>/tmp/juicefs.access.log</value>\n</property>\n')),(0,a.kt)("h3",{id:"juicefs-hadoop-sdk"},"JuiceFS Hadoop SDK"),(0,a.kt)("p",null,"You can download the JuiceFS java Hadoop SDK jar from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/releases/download/v0.17.0/juicefs-hadoop-0.17.0-linux-amd64.jar"},"here"),", and place it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"classpath"),".\nYou can also visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/juicedata/juicefs/releases"},"JuiceFS Releases"),") to get the latest version or compile by your self."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"$SPARK_HOME/jars")))}d.isMDXComponent=!0}}]);