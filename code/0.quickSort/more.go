package main

import "fmt"

var a = [...]int{1, 3, 2, 4, 5, 57, 6, 46, 4, 6, 45}

func printArray(pre string){
	fmt.Printf("%s",pre)
	for j:=0;j<len(a);j++ {
		fmt.Printf("%d ",a[j])
	}
	fmt.Printf("\n")
}

// 分割方法
func partition(i int, j int) int{
	// 左边和右边边界
	l := i
	r := j
	// 划分标记
	k := i
	flag := a[k]
	for true {
		for a[l] <= flag && l < r{
			l++
		}
		for a[r] >= flag && r > l{
			r--
		}
		if l >= r{
			break
		}
		temp := a[l]
		a[l] = a[r]
		a[r] = temp
	}
	if a[l] > flag{
		l--
	}
	a[k] = a[l]
	a[l] = flag
	return l
}

// 快速排序
func quickSort(i int,j int){
	if i < j {
		k := partition(i, j)
		quickSort(i, k - 1)
		quickSort(k + 1, j)
	}
}

func main() {
	
	printArray("排序前：")
	
	quickSort(0, len(a) - 1)
	
	printArray("排序后：")

}