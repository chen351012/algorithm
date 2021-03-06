package main

import "fmt"

func main(){

    /**
     * 初始化数据
     */
	var i int
	var j int
    // 记录了矩阵的大小
    var P = [...] int {30, 35, 15, 5, 10, 20, 25}
    // 矩阵个数
	num := len(P) - 1
    // 记录最优次数
    var minNum [6][6]int

    /**
    * 初始化数据
    */
    for i = 0; i < num; i++ {
        minNum[i][i] = 0
        for j = i + 1; j < num; j++{
            minNum[i][j] = -1
        }
    }

    /**
    * 计算最优并记录下来
    */
    // 计算矩阵的个数
    for i = 2; i <= num; i++{
        // 计算第j个矩阵到第j+i-1个矩阵
        for j = 0; j <= num - i; j++{
            // 先认为在j处分割是最优的
            splitFlag := j
            splitVal := minNum[j + 1][j + i - 1] + P[j] * P[j + 1] * P[j + i]
            minNum[j][j + i - 1] = splitVal
            for splitFlag = j + 1; splitFlag <= j + i - 2; splitFlag++{
                splitVal = minNum[j][splitFlag] + minNum[splitFlag + 1][j + i - 1] + P[j] * P[splitFlag + 1] * P[j + i]
                if splitVal < minNum[j][j + i - 1]{
                    minNum[j][j + i - 1] = splitVal
                }
            }
        }
    }

    // 打印结果
    for i = 0; i < num; i++{
        for j = i + 1; j < num; j++{
            fmt.Printf("矩阵A%d到A%d需要的最少次数是：%d\n", i, j, minNum[i][j])
        }
    }
}