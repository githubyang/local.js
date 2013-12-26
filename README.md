###增强本地存储(localStorage)功能,支持多数据类型


# local.js

 * Author: Joy <anzhengchao@gmail.com>
 * Author Blog :[www.joychao.cc](www.joychao.cc)

### Overview

利用localStorage原生API封装，支持常见类型:`number`、`string`、`array`、`object`

### License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)

### User Guide

下载并引入 `local.js`:

```html
<script type="text/javascript" src="js/local.js"></script>
```
使用`L`或者`local`操作：

  ```javascript
  //insert
  L.set('username', 'Joy');
  L.set('test_int', 2);
  L.set('test_string', '3');
  L.set('test_array', [1, 2, 3, 4]);
  L.set('test_json', {user_id: 5, sex: 1});

  //get
  L.get('username');// 'Joy'
  L.get('test_int');// 2
  L.get('test_string');// 3
  L.get('test_array');// [1, 2, 3, 4]
  L.get('test_json');// {user_id: 5, sex: 1}

  //append
  L.append('username', 'chao'); // 'Joychao'
  L.append('test_int', 3); // 5 当类型为整型的时候append返回累加结果(2 + 3)
  L.append('test_string', 3); // '33'

  //delete
  L.del('username');

  L.get('username');//undefined

  //get count
  L.length;//1

  //clear all
  L.clear();

  ```

### Contributing

欢迎各位踊跃贡献代码以修正它的不足，进一步完善这个插件。

贡献，请遵循以下准则：

1. Clone/pull最新版本的Dev分支
2. pull request到相同分支
3. 批准管理员的将审查和合并拉请求


### Bugs, Issues, Feedbacks, Help?

报告任何错误，问题，意见或寻求帮助 - [Issues page](https://github.com/joychao/local.js/issues).

