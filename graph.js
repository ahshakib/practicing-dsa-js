class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vtx1, vtx2) {
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1].push(vtx2);
            this.adjacencyList[vtx2].push(vtx1);
        }
    }

    removeEdge(vtx1, vtx2) {
        if(this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(v => v !== vtx2);
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v !== vtx1);
        }
    }

    removeVertex(vtx) {
        if(this.adjacencyList[vtx]) {
            for(let neighbour of this.adjacencyList[vtx]) {
                this.adjacencyList[neighbour] = this.adjacencyList[neighbour].filter(v => v !== vtx);
            }
            delete this.adjacencyList[vtx];
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

graph.removeEdge('A', 'B');

graph.removeVertex('A');
console.log(graph);