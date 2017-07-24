var Tree = function(tree){
    var self = this;

    self.tree = tree;
    self.root = new NodeOfTree(self.tree['root']);

    self.searchElement = function(element){
        let current_node = self.root;
        while (current_node.data !== element) {
            if (element < current_node.data) {
                current_node = new NodeOfTree(current_node.left);
            } else {
                current_node = new NodeOfTree(current_node.right);
            }
            if (current_node === null) {
                return null;
            }
        }
        return current_node;
    };

    function NodeOfTree (node) {
        var that = this;
        that.data = node['data'];
        that.left = node['left'];
        that.right = node['right'];
    };

};
