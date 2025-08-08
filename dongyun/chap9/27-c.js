// 교재 방식

/** 책에서 소개했던 대로, left right에는 왼쪽-오른쪽 자식 노드, 가운데에 노드 값을 설정 */
class Node {
    constructor(key){
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

/** emtpy한 이진 탐색 트리 생성. 처음을 root = null로 해도 되는구나 */
class BST{
    constructor(){
        this.root = null;
    }

    insert(key){
        /** root가 빈 경우 그냥 삽입하는 걸로 root null을 처리 */
        if(!this.root){
            this.root = new Node(key);
        }
        else{
            /** 현재 보고 있는 노드를 루트 취급 */
            let curr = this.root;
            while(true){
                if(key < curr.val){
                    if(curr.left){
                        curr = curr.left;
                    }
                    else{
                        curr.left = new Node(key);
                        break;
                    }
                }
                else{
                    if(curr.right){
                        curr = curr.right;
                    }
                    else{
                        curr.right = new Node(key);
                        break;
                    }
                }
            }
        }
    }

    search(key){
        /** 루트 노드부터 탐색 시작 */
        let curr = this.root;

        /** 현재 노드가 존재 and 현재 노드 값 !== 찾으려는 값 */
        while(curr && curr.val !== key){
            if(key < curr.val){
                    if(curr.left){
                        curr = curr.left;
                    }
                }
                else{
                    if(curr.right){
                        curr = curr.right;
                    }
                }
        }
        /** 반환되는 curr는 현재 보고 있는 노드일텐데, 반복을 탈출했다는 것은 
         * curr === null 이거나 curr === key */
        return curr;
    }
}

export default function solution(lst, searchList) {
    const bst = new BST();
    for (const key of lst){
        bst.insert(key);
    }

    const result = [];

    for(const item of searchList){
        if(bst.search(item)){
            result.push(true)
        }
        else{
            result.push(false)
        }
    }

    return result;
}