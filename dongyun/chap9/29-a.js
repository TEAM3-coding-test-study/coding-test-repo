class Node {
    constructor(name) {
        this.child = [];
        this.name = name;
    };
}
class Tree {
    constructor(enroll, referral) {
        this.root = new Node("CENTER");
        this.enroll = enroll;
        this.referral = referral;
    }
    
    search(name){
        let curr = this.root;
        while(curr && curr.name !== name){
            
        }
    }
    
    insert(name, index) {
        let curr = this.root;
        if (name === "-") {
            this.root.child.push(new Node(this.enroll[index])
        }
        else {
            for(const enr of this.enroll){
                curr = 
            }
        }
    }
}

function solution(enroll, referral, seller, amount) {
    var answer = [];

    const tree = new Tree();

    for (const [index, name] of referral.entires()) {
        tree.insert(name, index);
    }

    return answer;
}