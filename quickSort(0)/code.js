var a = [1, 3, 2, 4, 5, 57, 6, 46, 4, 6, 45];

console.log("排序前：" + a);

var
    // 分割方法
    partition = function (i, j) {
        // 左边和右边边界
        var l = i, r = j,
            // 划分标记
            k = i, flag = a[k];
        while (true) {
            while (a[l] <= flag && l < r) l++;
            while (a[r] >= flag && r > l) r--;
            if (l >= r) break;
            var temp = a[l];
            a[l] = a[r];
            a[r] = temp;
        }
        if (a[l] > flag) l--;
        a[k] = a[l];
        a[l] = flag;
        return l;
    },
    // 快速排序
    quickSort = function (i, j) {
        if (i < j) {
            var k = partition(i, j);
            quickSort(i, k - 1);
            quickSort(k + 1, j);
        }
    };

quickSort(0, a.length - 1);

console.log("排序后：" + a);