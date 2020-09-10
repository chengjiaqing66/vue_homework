//默认导入 import 别名 from '文件路径'
import m from './m'
//按需导入
import { s1, s2 as ss2, say } from './m'
//访问默认导入的数据
console.log(m.a)
    // 访问按需导入的文件
console.log(s1);
//ss2是s2的别名
console.log(ss2);
// 访问方法
console.log(say());