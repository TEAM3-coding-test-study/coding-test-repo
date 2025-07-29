export default function solution(lst, searchList) {
    const result = [];
    const nodes = [lst[0]];
    let index = 0;

    const lchild = (rootIndex) => {
        return (rootIndex * 2 + 1);
    }
    const rchild = (rootIndex) => {
        return (rootIndex * 2 + 2);
    }

    const bsTree = (value, index) => {
        if (nodes[index] === undefined) {
            nodes[index] = value;
            return index;
        }
        if (value < nodes[index]) {
            bsTree(value, lchild(index));
        }
        else {
            bsTree(value, rchild(index));
        }
    }

    const searchTree = (temp, value, index) => {
        // console.log("탐색 전", value, index, nodes[index])
        if(nodes[index] === value){
            console.log("탐색 최종 성공", value, index, nodes[index])
            console.log(typeof(temp))
            // temp.push(true);
            return true;
        }

        if (index < nodes.length) {
            if (value < nodes[index]) {
                searchTree(value, lchild(index))
            }
            else {
                searchTree(value, rchild(index))
            }
        }

        console.log("탐색 최종 실패", value, index, nodes[index])
        // temp.push(false);
        return false;
    }

    /** 이진 탐색 트리 생성 */
    for (let i = 1; i < lst.length; i++) {
        bsTree(lst[i], 0);
    }

    for(const item of searchList){
        const temp = [false];
        searchTree(temp, item, 0);
        if(temp.includes(true))
            result.push(true);
        else
            result.push(false);
    }


    return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
// console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
