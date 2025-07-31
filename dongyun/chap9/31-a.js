class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.key = key;
    };
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        /** root가 빈 경우 그냥 삽입하는 걸로 root null을 처리 */
        if (!this.root) {
            this.root = new Node(key);
        }
        else {
            /** 현재 보고 있는 노드를 루트 취급 */
            let curr = this.root;
            while (true) {
                if (curr.left) {
                    curr = curr.left;
                }
                else if (curr.right) {
                    curr = curr.right;
                }
                else if (!curr.left) {
                    curr.left = new Node(key);
                    break;
                }
                else if (!curr.right) {
                    curr.right = new Node(key);
                    break;
                }
            }
        }
    }
}

function solution(info, edges) {
    var answer = 0;

    const tree = new Tree();

    for (const edge of edges) {
        const [parent, child] = edge;
        tree.insert(child);
    }

    let maxSheep = 0;
    const travel = (tree, cur, sheep, wolf) => {
        if (sheep <= wolf) {
            if (sheep > maxSheep)
                maxSheep = sheep;
            return;
        }

        // 1. 부모 노드로 이동하기 -> 재귀 return?

        // 2. 왼쪽 자식 노드로 이동하기
        if (tree.cur.left) {
            if (info[tree.cur.left.key] === 0 && sheep > wolf + 1) {
                travel(tree.cur.left, sheep + 1, wolf);
            }
            else if (info[tree.cur.right.key] === 1 && sheep > wolf + 1) {
                travel(tree.cur.right, sheep, wolf + 1);
            }
        }       // 3. 오른쪽 자식 노드로 이동하기
        if (tree.cur.right) {
            if (info[cur] === 0 && sheep > wolf + 1) {
                travel(cur, sheep + 1, wolf);
            }
            else if (info[cur] === 1 && sheep > wolf + 1) {
                travel(cur, sheep, wolf + 1);
            }
        }

        return;
    }

    answer = maxSheep

    return answer;
}