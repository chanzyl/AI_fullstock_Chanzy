// // 递归 自顶向下 每个问题都相同/相似 退出条件
/*  运行时间过长
function climstairs(n) {
    if (n == 1) return 1
    if (n == 2) return 2
    return climstairs(n - 1) + climstairs(n - 2)
}
console.log(climstairs(10));
*/

//优化 递归带来的内存问题
// 递归的优点：简单 但性能不好
// 如果不往执行栈内push太多层函数？
// 两种做法：记忆法 | for循环
/*
                        10
                9               8
            8       7       7       6
          7   6   6   5   6   5   5   4
*/


// 法1：入栈过的函数是没有必要再入栈的 -- 记忆法  [性能优化]
/*
const f = [] // 全局常量
const climbStairs = function (n) {
    // 退出条件
    if (n == 1) return 1
    if (n == 2) return 2
    if (f[n] == undefined) { // 第一次计算 之前未计算，没有值
        // 函数嵌套函数
        f[n] = climbStairs(n - 1) + climbStairs(n - 2) // 递归公式
    }
    return f[n]
}
*/


//法2：不用递归 for循环遍历 自底向下 递推 dp 动态规划

const climbStairs = function (n) {
    const f = [] // 优化
    f[1] = 1
    f[2] = 2
    for (let i = 3; i <= n; i++) {
        // 递推公式
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n]
}
