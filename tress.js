const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = [];
  }

  searchChild = (name) => {
    const node = this.parent;
    if (node === null) {
      this.parent = new TreeNode(name);
      return;
    } else {
      const searchFamily = (node) => {
        if (name < node.name) {
          if (node.children === null) {
            node.children = new Node(name);
            return;
          }
        } else if (node.children !== null) {
          return searchFamily(node.children);
        }
        return null;
      };
      return searchFamily(node);
    }
    // this.children.push(node);
  };

  // removeChild = (node) => {
  //   this.children = this.children.filter((child) => child !== node);
  // };

  // traverse = () => {
  //   let nodes = [this];
  //   while (nodes.length > 0) {
  //     let current = nodes.pop();
  //     console.log(current.data);
  //     nodes = [...nodes, ...current.children];
  //   }
}

let fullName = prompt("enter child full name (done if finished):");
