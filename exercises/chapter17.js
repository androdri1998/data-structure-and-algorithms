const { Trie } = require("./Tries");

const trie = new Trie();
trie.insert("livro");
trie.insert("livreto");
trie.insert("livraria");

const prefixNode = trie.search("livr");
console.log(prefixNode);
// output: TrieNode {
// children: Map(3) {
//     'o' => TrieNode { children: [Map] },
//     'e' => TrieNode { children: [Map] },
//     'a' => TrieNode { children: [Map] }
// }
// }
console.log(trie.collectAllWords(prefixNode, "livr"));
// output: [ 'livro', 'livreto', 'livraria' ]

const prefixNode2 = trie.search("livre");
console.log(prefixNode2);
// output: TrieNode { children: Map(1) { 't' => TrieNode { children: [Map] } } }
console.log(trie.collectAllWords(prefixNode2, "livre"));
// output: [ 'livreto' ]
trie.printAllKeys();
// output: l
// output: i
// output: v
// output: r
// output: o
// output: *
// output: e
// output: t
// output: o
// output: *
// output: a
// output: r
// output: i
// output: a
// output: *
console.log(trie.autocorrect(null, "livreyo"));
// output: livreto
