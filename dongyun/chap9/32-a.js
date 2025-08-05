const lchild = (rootIndex) => {
    return (rootIndex * 2 + 1);
}

const rchild = (rootIndex) => {
    return (rootIndex * 2 + 2);
}

function solution(nodeinfo) {
    var answer = [[]];
    const yF = {};
    const xToIndex = {};
    const arr = [];
    for (const [index, node] of nodeinfo.entries()) {
        const [x, y] = node;
        if (yF[y] === undefined) {
            yF[y] = [x];
        }
        else {
            // y좌표로 x좌표 연결
            yF[y].push(x);
        }
        // index로 노드 번호 매기기
        xToIndex[x] = index + 1;
        // y 좌표 정렬용 배열에 추가
        arr.push(y);
    }

    arr.sort((a, b) => b - a);
    console.log(arr);

    // 가장 큰 y 좌표의 인덱스로 루트 채우기
    const tree = [xToIndex[yF[arr[0]]]]

    // 높은 y level 부터, x 좌표 순회하며 트리 채우기
    for (let i = 1; i < arr.length; i++) {
        const tempX = yF[arr[i]];
        tempX.sort((a, b)=>a-b);
        // 한 y level에 x 좌표 여러 개인 경우, 작은 쪽이 왼쪽으로.
        // 부모 노드와 비교하여 왼쪽이면 왼쪽 자식 노드..
        temp.map((x) => {
            const cur = nodeinfo[tree[i-1]][0];
            const parent = nodeinfo[tree[parent(i-1)]][0];
            // 현재 부모 보다 x 좌표 작으면, 부모의 왼쪽
            if(x < cur){
                tree[lchild(i - 1)] = xToIndex[x];
            }
            // 현재 부모 보다 x 좌표 크고, 그 부모보다 작으면 오른쪽
            else if(x > cur && x < parent){
                tree[rchild(i - 1)] = xToIndex[x];
            }
            // 현재 부모의 부모보다 크면, 순서대로 오른쪽 노드의 왼쪽/오른쪽 
            else if(x > cur && x > parent){
                if(tree[lchild(i + 1)] === undefined)
                    tree[lchild(i + 1)] = xToIndex[x];
                else
                    tree[rchild(i + 1)] = xToIndex[x];
            }         
        })
    }
    
    const preOrder = (nodes, index) => {
        if (index < nodeinfo.length) {
            let pre = `${tree[index]} `
            console.log(pre)
            pre += preOrder(nodes, lchild(index));
            pre += preOrder(nodes, rchild(index));
            return pre;
        }
        return "";
    }
    
    const postOrder = (nodes, index) =>{
        if(index < nodeinfo.length){
            let post = postOrder(nodes, lchild(index));
            post += postOrder(nodes, rchild(index));
            post += `${tree[index]} `;
            return post
        }
        return ""
    }
     answer.push(preOrder(tree, 0).slice(0, - 1).split(""));
     answer.push(postOrder(tree, 0).slice(0, - 1).split(""));

    return answer;
}