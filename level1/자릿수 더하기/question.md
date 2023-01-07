## 문제 설명

> 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

<br> 

## 제한사항

- N의 범위 : 100,000,000 이하의 자연수

<br>

## 입출력 예

|N	|answer|
|:-:|:-----:|
|123	|6|
|987	|24|

입출력 예 설명

입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

<br>

## 풀이

- 입력받은 숫자 `n`을 문자열로 형변환을 시킨 후 자릿 수 별로 나누어 배열 형태로 변환, map()함수를 통해 배열의 합을 구한다.

```
function solution(n)
{
    var answer = 0;
    String(n).split('').map(data => answer += parseInt(data));
    return answer;
}
```