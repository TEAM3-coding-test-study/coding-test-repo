export default function solution(nodes) {
    const lchild = (rootIndex) => {
        return (rootIndex * 2 + 1);
    }

    const rchild = (rootIndex) => {
        return (rootIndex * 2 + 2);
    }

    const answer = [];

    const preOrder = (nodes, index) => {
        if (index < nodes.length) {
            let pre = `${nodes[index]} `
            console.log(pre)
            pre += preOrder(nodes, lchild(index));
            pre += preOrder(nodes, rchild(index));
            return pre;
        }
        return "";
    }

    /** 왼부오 */
    const inOrder = (nodes, index) =>{
        if(index < nodes.length){
            let mid = inOrder(nodes, lchild(index));
            mid += `${nodes[index]} `;
            mid += inOrder(nodes, rchild(index));
            return mid;
        }
        return ""
    }

    const postOrder = (nodes, index) =>{
        if(index < nodes.length){
            let post = postOrder(nodes, lchild(index));
            post += postOrder(nodes, rchild(index));
            post += `${nodes[index]} `;
            return post
        }
        return ""
    }

    const p = preOrder(nodes, 0);
    console.log(p)

    answer.push(p.slice(0,-1));
    answer.push(inOrder(nodes, 0).slice(0, - 1));
    answer.push(postOrder(nodes, 0).slice(0, - 1));
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]))

