// 1. Definition

// A graph is a collection of nodes (called vertices) and edges (connections between vertices).

// Formally, a graph is represented as G=(V,E), where:

// V: Set of vertices.

//E: Set of edges connecting the vertices.


// 2. Types of Graphs

// Undirected Graph: Edges have no direction (e.g., friendships in a social network).

// Directed Graph (Digraph): Edges have directions (e.g., a one-way street).

// Weighted Graph: Each edge has a weight or cost (e.g., distance in a road network).

// Unweighted Graph: All edges have the same weight.

// Cyclic Graph: Contains at least one cycle.

// Acyclic Graph: Does not contain any cycles.

// Connected Graph: Every vertex is reachable from every other vertex.

// Disconnected Graph: Some vertices are not connected to others.

// Tree: A special type of acyclic connected graph.

// Bipartite Graph: Vertices can be divided into two sets, and all edges connect vertices from different sets.

// 3. Graph Representations

// Adjacency Matrix:

// A 2D array where matrix[i][j]=1 (or weight) if there is an edge between vertex i and j.

// Space complexity:  O(V^2)

// Good for dense graphs.

/*

Adjacency List:

An array of lists where each list contains the neighbors of a vertex.

Space complexity: O(V+E).

Efficient for sparse graphs.

Edge List:

A list of all edges in the form (u,v) or (u,v,weight). Good for compact edge-centric algorithms.


4. Common Graph Algorithms

Breadth-First Search (BFS):
Traverses the graph level by level (layered exploration).
Applications: Shortest path in unweighted graphs, connectivity checks.


Depth-First Search (DFS): Explores as far as possible along each branch before backtracking.
Applications: Detect cycles, connected components, topological sorting.


Dijkstra's Algorithm:
Finds the shortest path from a source vertex to all other vertices in a weighted graph (non-negative weights).


Bellman-Ford Algorithm:
Finds the shortest paths from a source, works with graphs containing negative weight edges.


Floyd-Warshall Algorithm:
Computes all-pairs shortest paths (Dynamic Programming).


Prim's Algorithm:
Finds the Minimum Spanning Tree (MST) using a greedy approach.


Kruskal's Algorithm:
Finds the MST using edge sorting and union-find.


Topological Sorting:
Orders vertices in a Directed Acyclic Graph (DAG) so all directed edges point forward.


5. Applications of Graphs

Social Networks: Users as vertices, friendships or connections as edges.

Web Crawling: Websites as vertices, hyperlinks as edges.

Transportation Networks: Locations as vertices, roads or routes as edges.

Network Flow Problems: Optimizing resource flow (e.g., max-flow min-cut theorem).

Dependency Resolution: Task scheduling using topological sort in DAGs.

Shortest Path Problems: GPS navigation, routing in networks.


6. Important Graph Theoretical Concepts
Degree:

Degree of a vertex: Number of edges connected to it.
In-degree and out-degree in directed graphs.


Path and Cycle:
Path: Sequence of edges connecting vertices.
Cycle: A path where the starting and ending vertices are the same.
Graph Coloring:


Assign colors to vertices such that no two adjacent vertices have the same color (used in resource allocation).
Strongly Connected Components (SCCs):

Subgraphs in which every vertex is reachable from every other vertex (for directed graphs).

*/
