var Tree = function(tree){
    "use strict";
    var self = this;

    self.tree = tree;
    self.root = new TreeNode(self.tree['root']);

    self.searchElement = function(element){
        let current_node = self.root;
        while (current_node.data !== element){
            if (element < current_node.data){
                current_node = new TreeNode(current_node.left);
            } 
            else{
                current_node = new TreeNode(current_node.right);
            }
            if (current_node === null){
                return null;
            }
        }
        return current_node;
    };

    function TreeNode (node){
        var that = this;
        that.data = node['data'];
        that.left = node['left'];
        that.right = node['right'];
    };

};
