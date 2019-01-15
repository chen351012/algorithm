// 备忘录算法
/**
 * 矩阵连乘
 * -------------------
 * 
 * 【题目】
 * 给定n个矩形{A1,A2,...,An},
 * 其中Ai与Ai+1是可乘的，
 * 由于矩阵满足结合律，
 * 不同的加括号方法计算次数不一样，
 * 求最优的加括号方法。
 * 
 * 【思路】
 * 分别计算有1，2，3，...，n个矩阵的最优解，
 * 计算i个时候，
 * 全部的i-1的最优解已经记录下来了，
 * 保证计算不重复。
 * 
 */
#include <stdio.h>

int main()
{

    /**
     * 初始化数据
     */
    int i, j;
    // 记录了矩阵的大小
    int P[] = {30, 35, 15, 5, 10, 20, 25};
    // 矩阵个数
    int num = sizeof(P) / sizeof(int) - 1;
    // 记录最优次数
    int minNum[num][num];

    /**
    * 初始化数据
    */
    for (i = 0; i < num; i++)
    {
        minNum[i][i] = 0;
        for (j = i + 1; j < num; j++)
        {
            minNum[i][j] = -1;
        }
    }

    /**
    * 计算最优并记录下来
    */
    // 计算矩阵的个数
    for (i = 2; i <= num; i++)
    {
        // 计算第j个矩阵到第j+i-1个矩阵
        for (j = 0; j <= num + 1 - i; j++)
        {
            // 先认为在j处分割是最优的
            int splitFlag = j;
            int splitVal = minNum[j + 1][j + i - 1] + P[j] * P[j + 1] * P[j + i];
            minNum[j][j + i - 1] = splitVal;
            for (splitFlag = j + 1; splitFlag <= j + i - 2; splitFlag++)
            {
                splitVal = minNum[j][splitFlag] + minNum[splitFlag + 1][j + i - 1] + P[j] * P[splitFlag + 1] * P[j + i];
                if (splitVal < minNum[j][j + i - 1])
                {
                    minNum[j][j + i - 1] = splitVal;
                }
            }
        }
    }

    // 打印结果
    for (i = 0; i < num; i++)
    {
        for (j = i + 1; j < num; j++)
        {
            printf("矩阵A%d到A%d需要的最少次数是：%d\n", i, j, minNum[i][j]);
        }
    }
}