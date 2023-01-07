## 문제 설명

> 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

<br>

## 제한사항

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

<br>

## 입출력 예

|arr|return|
|:---:|:-----:|
|[1, 2, 3, 4]|2.5|
|[5, 5]|5|

## 풀이

- reduce() 함수를 이용해 배열의 누적합을 구한다음 배열의 길이로 나누면 평균 값을 구할 수 있다.

```
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
```