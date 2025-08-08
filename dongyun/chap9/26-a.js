export default function solution(nodes) {
    const lchild = (rootIndex) => {
        return rootIndex * 2 + 1;
    }

    const rchild = (rootIndex) => {
        return rootIndex * 2 + 2;
    }

    const pfromL = (rootIndex) => {
        return (rootIndex - 1) / 2;
    }

    const pfromR = (rootIndex) => {
        return (rootIndex - 2) / 2;
    }
    const answer = [];
    const preTravel = () => {
        const pre = [];
        let index = 0;
        while (pre.length < nodes.length) {
            pre.push(index);
            console.log(pre)
            if (nodes[lchild(index)] !== undefined) {
                index = lchild(index)
            } else if (nodes[rchild(index)] !== undefined) {
                index = rchild(index)
            } else {
                if (nodes[pfromL(index)] !== undefined) 
                    index = pfromL(index)         
                else (nodes[pfromR(index)] !== undefined) 
                    index = pfromR(index)
                }
            }
        
        return pre;
    }
    const p = preTravel();
    answer.push(p);

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]))

