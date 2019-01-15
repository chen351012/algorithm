/**
* 初始化数据
*/
var P = [30, 35, 15, 5, 10, 20, 25]; //记录了矩阵的大小
var num = P.length - 1; //矩阵个数
var minNum = [];
var i, j; //全局复杂循环变量

/**
* 初始化数据
*/
for (i = 0; i < num; i++) {
    minNum[i] = [];
    for (j = 0; j < num; j++) {
        if (i == j) {
            minNum[i][j] = 0;
        } else {
            minNum[i][j] = "#";
        }
    }
}
/**
* 计算最优并记录下来
*/
for (i = 2; i <= num; i++) {//计算的矩阵个数，从二个开始到全部的情况
    for (j = 1; j <= num + 1 - i; j++) {//计算矩阵第j到第i+j-1个的情况
        //先初始化认为在第j分割是最优的（在第j分割的意思是j单独一个，j+1->i+j-1是一组）
        var splitIndex = j;
        var splitMin = minNum[j][i + j - 2] + P[j - 1] * P[j] * P[i + j - 1];
        minNum[j - 1][i + j - 2] = splitMin;
        for (splitIndex = j + 1; splitIndex <= i + j - 2; splitIndex++) {
            splitMin = minNum[j - 1][splitIndex - 1] + minNum[splitIndex][i + j - 2] + P[j - 1] * P[splitIndex] * P[i + j - 1];
            if (splitMin < minNum[j - 1][i + j - 2]) {
                minNum[j - 1][i + j - 2] = splitMin;
            }
        }
    }
}

// 打印结果
for (i = 0; i < num; i++) {
    for (j = i + 1; j < num; j++) {
        console.log("矩阵A" + i + "到A" + j + "需要的最少次数是：" + minNum[i][j]);
    }
}