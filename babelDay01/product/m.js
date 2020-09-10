let a = 10
let b = 20
    //默认文件导出 export default 只能出现一次 不然会报错
export default {
    a,
    b
}
//按需导出文件
export let s1 = 'aaa'
export let s2 = 'ccc'
export let say = () => {
        console.log('ddd');
        return `ok`
    }
    //js文件都是一个单独的模块,模块与模块之间的数据是不能直接相互访问的
    //需要在被导入js文件中  设置export default 导出