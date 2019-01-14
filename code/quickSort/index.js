// 递归与分治策略
/**
 * 快速排序
 * -------------------
 * 对于输入的子数组a[p:r]，按照一下3个步骤进行排序：
 * 1）分解divide：以a[p]为基准元素将a[p:r]划分成3段a[p:q-1]，a[q]和a[q+1:r]，
 *   其中a[q]不小于a[p:q-1]中的任何元素且不大于a[q+1:r]中的任何元素，下标q在划分中确定。
 * 2）递归求解conquer：通过递归调用排序，分别对a[p:q-1]和a[q+1:r]进行排序。
 * 3）合并merge：合并a[p:q-1]，a[q]和a[q+1:r]返回为最终结果。
 */

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