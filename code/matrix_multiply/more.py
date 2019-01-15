#!/usr/bin/python3

# 记录了矩阵的大小
P = [30, 35, 15, 5, 10, 20, 25]
# 矩阵个数
num = len(P) - 1
# 记录最优次数
minNum = []

'''
初始化数据
'''
for i in range(num):
    minNum.append([])
    for j in range(num):
        minNum[i].append(-1)
    minNum[i][i] = 0

'''
计算最优并记录下来
'''
# 计算矩阵的个数
i = 2
while i <= num:
    # 计算第j个矩阵到第j+i-1个矩阵
    j = 0
    while j <= num-i:
        # 先认为在j处分割是最优的
        splitFlag = j
        splitVal = minNum[j + 1][j + i - 1] + P[j] * P[j + 1] * P[j + i]
        minNum[j][j + i - 1] = splitVal
        splitFlag = j+1
        while splitFlag <= j + i - 2:
            splitVal = minNum[j][splitFlag] + minNum[splitFlag +
                                                     1][j + i - 1] + P[j] * P[splitFlag + 1] * P[j + i]
            if (splitVal < minNum[j][j + i - 1]):
                minNum[j][j + i - 1] = splitVal
            splitFlag += 1
        j += 1
    i += 1

# 打印结果
for i in range(num):
    for j in range(i+1, num):
        print("矩阵A"+str(i)+"到A"+str(j)+"需要的最少次数是："+str(minNum[i][j]))
