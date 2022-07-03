console.log("graph");

//big O
// space complexity with --> adjacency list --> O(|V| square)
// space complexity with --> adjacency matrix --> O(|V| + |E|)  (very inefficient - since we are storing every thing in the table)

// time complexity --> add --> adjacency list --> O(|V| square)
// time complexity  --> add --> adjacency matrix --> O(1)

// time complexity --> remove a edge --> adjacency list --> O(1)
// time complexity  --> remove a edge--> adjacency matrix --> O(|E|) 

// time complexity --> remove a vertex --> adjacency list --> O(|V| square)
// time complexity  --> remove a vertex--> adjacency matrix --> O(|V| + |E|)

/// E is the number of edges
/// V is the number of vertex

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }
}
let myGraph = new Graph()