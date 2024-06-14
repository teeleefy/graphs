class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    while(vertexArray.length){
      let vertex = vertexArray.shift();
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let valuesArray = [];
    let exploreNeighborStack = [start];
    let visited = new Set(exploreNeighborStack);
    while(exploreNeighborStack.length){
      let currentNeighbor = exploreNeighborStack.pop();
      valuesArray.push(currentNeighbor.value);
      for(let neighbor of currentNeighbor.adjacent){
        if(!visited.has(neighbor)){
          exploreNeighborStack.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    return valuesArray;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let valuesArray = [start.value];
    let exploreNeighborQueue = [start];
    let visited = new Set(exploreNeighborQueue);
    while(exploreNeighborQueue.length){
      let currentNeighbor = exploreNeighborQueue.shift();
      for(let neighbor of currentNeighbor.adjacent){
        if(!visited.has(neighbor)){
          exploreNeighborQueue.push(neighbor);
          visited.add(neighbor);
          valuesArray.push(neighbor.value);
        }
      }
    }
    return valuesArray;
  }
}

module.exports = {Graph, Node}