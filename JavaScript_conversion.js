let varever = 0;
let ever = [];

const start = () => {
  for (let i = 0; i < 20; i++) {
    ever.push([]);
  }
};

start();

const Path_index = {
  path_index: 0,
};

class Graph {
  constructor(v) {
    this.v = v;
    const adj = [];
    const weigh = [];
    for (let i = 0; i <= this.v; i++) {
      adj.push([]);
      const temp = [];
      temp.length = this.v;
      weigh.push(temp);
    }
    this.adj = adj;
    this.weigh = weigh;
  }

  allPathUtil(u, d, visited, path, Path_index) {
    let check_visit = true;
    for (let p = 1; p < this.v; p++) check_visit = check_visit && visited[p];
    if (check_visit) visited[d] = true;
    if (u !== d) visited[u] = true;
    path[Path_index.path_index] = u;
    Path_index.path_index++;

    if (u === d && visited[d]) {
      for (let i = 0; i < Path_index.path_index; i++) {
        ever[varever].push(path[i]);
      }
      varever++;
    } else {
      let i = 0;
      for (i = 0; i < this.adj[u].length; i++) {
        if (!visited[this.adj[u][i]])
          this.allPathUtil(this.adj[u][i], d, visited, path, Path_index);
      }
    }
    Path_index.path_index--;
    visited[u] = false;
  }

  addEdge(v, w, weight) {
    this.adj[v].push(w);
    this.weigh[v][w] = weight;
  }

  allPath(s, d) {
    let visited = [];
    let path = [];
    visited.length = this.v;
    visited.length = this.v;
    Path_index.path_index = 0;
    for (let i = 0; i < this.v; i++) {
      visited[i] = false;
    }
    this.allPathUtil(s, d, visited, path, Path_index);
  }
  getWeight(v, w) {
    return this.weigh[v][w];
  }
}

const shuffle_values = (status, c) => {
  switch (status) {
    case 2:
      c.c1 = c.c3;
      break;

    case 3:
      c.c2 = c.c3;
      break;

    case 4:
      c.c1 = c.c1;
      break;

    case 5:
      c.c1 = c.c2;
      break;

    case 6:
      c.c1 = c.c3;
      break;
  }
};

const main = (inputs) => {
  const[ q, w, e, r, t, y, u, a, s ] = inputs;
  let c1 = q * 3 + w * 2 + e * 8;
  let c2 = r * 12 + t * 25 + y * 15;
  let c3 = u * 0.5 + a + s * 2;

  let g;
  let status;
  if(c1&&c2&&c3)
  {
  	g = new Graph(4);
  	g.addEdge(0, 1, 3);
  	g.addEdge(0, 2, 2.5);
  	g.addEdge(0, 3, 2);
  	g.addEdge(1, 0, 3);
  	g.addEdge(1, 2, 4);
  	g.addEdge(2, 0, 2.5);
  	g.addEdge(2, 1, 4);
  	g.addEdge(2, 3, 3);
  	g.addEdge(3, 0, 2);
  	g.addEdge(3, 2, 3);
  	g.allPath(1,0);
  	g.allPath(2,0);
  	g.allPath(3,0);
  	status = 0;
  }
  else if(c1&&c2 || c1&&c3 || c3&&c2){
  	g = new Graph(3);
  	if(c1&&c2){
  		g.addEdge(0, 1, 3);
  		g.addEdge(0, 2, 2.5);
  		g.addEdge(1, 0, 3);
  		g.addEdge(1, 2, 4);
  		g.addEdge(2, 0, 2.5);
  		g.addEdge(2, 1, 4);
  		g.allPath(1,0);
  		g.allPath(2,0);
  		status = 1;
  	}
  	if(c2&&c3){
  		g.addEdge(0, 2, 2.5);
  		g.addEdge(0, 1, 2);
  		g.addEdge(2, 0, 2.5);
  		g.addEdge(2, 1, 3);
  		g.addEdge(1, 0, 2);
  		g.addEdge(1, 2, 3);
  		g.allPath(2,0);
  		g.allPath(1,0);
  		status = 2;
  	}
  	if(c1&&c3){
  		g.addEdge(0, 1, 3);
  		g.addEdge(0, 2, 2);
  		g.addEdge(1, 0, 3);
  		g.addEdge(2, 0, 2);
  		g.allPath(1,0);
  		g.allPath(2,0);
  		status = 3;
  	}
  }
  else if(c1 || c2 || c3){
  	g = new Graph(2);
  	if(c1){
  		g.addEdge(0, 1, 3);
  		g.addEdge(1, 0, 3);
  		g.allPath(1,0);
  		status = 4;
  	}
  	if(c2){
  		g.addEdge(0, 1, 2.5);
  		g.addEdge(1, 0, 2.5);
  		g.allPath(1,0);
  		status = 5;
  	}
  	if(c3){
  		g.addEdge(0, 1, 2);
  		g.addEdge(1, 0, 2);
  		g.allPath(1,0);
  		status = 6;
  	}
  }
  let sum = 0;
  let hold = 0;
  let i;
  let weight;
  let min_sum;

  const c = {
  	c1, c2, c3
  };

  shuffle_values(status, c);
  for(i=0; i<varever; i++){
  	let j, k;
  	for(j=0; j < ever[i].length; j++){
  		k = j;
  		if(ever[i][j] == 1)
  			hold += c1;
  		if(ever[i][j] == 2)
  			hold += c2;
  		if(ever[i][j] == 3)
  			hold += c3;
  		if(ever[i][j] == 0)
  			hold = 0;
  		k++;
  		if(k != ever[i].length)
  			weight = g.getWeight(ever[i][j], ever[i][k]);
  		else
  			weight = 0;
  		sum += weight*(8*parseInt((hold/5)) + 10);
  	}
  	if(i == 0)
  		min_sum = sum;
  	if(sum < min_sum)
  		min_sum = sum;
  	sum = 0;
  }
  return min_sum;
//   console.log(min_sum);
//   alert(min_sum);
//   if(!varever){
// 	console.log(0);
// 	alert(0);
//   }  
};

document.querySelector('.reset_button').addEventListener('click', (e) =>{
    const allInputFeild = document.querySelectorAll(".input__feild");
	const output = document.querySelector('.output');
	for(let i = 0; i < allInputFeild.length; i++){
		allInputFeild[i].value = '';
	}
	output.textContent = "0";
	
});

document.querySelector('.cost_button').addEventListener('click', (e) => {
	const allInputFeild = document.querySelectorAll(".input__feild");
	const output = document.querySelector('.output');
    const allNodeList = [...allInputFeild];
    const inputs = allNodeList.map((e) => (e.value === "" ? 0 : parseInt(e.value)));
	const minSum = main(inputs);
	output.textContent = minSum === undefined ? 0 : minSum;
});
	  
