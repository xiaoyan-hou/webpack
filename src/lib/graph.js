function is_seller(name) {
    return /m$/.test(name);
}
export function breadth_first_search(name) {
    const graph = {
        you: ['alice', 'bob', 'claire'],
        bob: ['anuj', 'peggy'],
        alice: ['peggy'],
        claire: ['thom', 'jonny'],
        anuj: [],
        peggy: [],
        thom: [],
        jonny: []
    };

    // one queue
    const searchQueue = [];
    const searched = [];
    searchQueue.push(...graph[name]);
    let person;

    while(searchQueue.length) {
        person = searchQueue.shift();
        // not search this person
        if (!searched.includes(person)) {
            searched.push(person);
            if (is_seller(person)) {
                console.log('the person is', person);
                return true;
            } else {
                searchQueue.push(...graph[person]);
            }
        }
    }
    return false;
};
// console.log(search('you'));
function find_lowest_cost_node(costs, processed) {
    let lowest_cost = Infinity;
    let lowest_node = '';
    for (let node in costs) {
        if ( lowest_cost >= costs[node] && !processed.includes(node)) {
            lowest_cost = costs[node];
            lowest_node = node;
        }
    }
    return lowest_node;
}
function dikstra(graph, costs, parent) {
    const processed = [];
    let node = find_lowest_cost_node(costs, processed);
    while(node && !processed.includes(node)) {
        Object.keys(graph[node]).forEach(item => {
            // if item cost less than costs ,than update the costs and parent
            if (costs[node] + graph[node][item] < costs[item]) {
                costs[item] = costs[node] + graph[node][item];
                parent[item] = node;
            }
        });
        processed.push(node);
        // update node
        node = find_lowest_cost_node(costs, processed);
    }
    // find the best path through parent
    const paths = ['fin'];
    node = 'fin';
    while(parent[node]) {
        paths.unshift(parent[node]);
        node = parent[node];
    };
    // console.log(paths);
    console.log('the start to fin path is:', paths.join('-'), 'the costs is: ', costs['fin']);
};
let graph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        fin: 1
    },
    b: {
        a: 3,
        fin: 5
    },
    fin: {}
};
let costs = {
    a: 6,
    b: 2,
    fin: Infinity
};
let parent = {
    a: 'start',
    b: 'start',
    fin: ''
};
// second
graph = {
    start: {
        a: 5,
        b: 2
    },
    a: {
        c: 4,
        d: 2
    },
    b: {
        a: 8,
        d: 7
    },
    c: {
        fin: 3,
        d: 6
    },
    d: {
        fin: 1
    },
    fin: {

    }
};
costs = {
    a: 5,
    b: 2,
    c: Infinity,
    d: Infinity,
    fin: Infinity
};
parent = {
    a: 'start',
    b: 'start',
    c: '',
    d: '',
    fin: ''
};
// third
graph = {
    start: {
        a: 10
    },
    a: {
        c: 20
    },
    b: {
        a: 1
    },
    c: {
        b: 1,
        fin: 30
    },
    fin: {}
};
costs = {
    a: 10,
    b: Infinity,
    c: Infinity,
    fin: Infinity
};
parent = {
    a: 'start',
    b: '',
    c: '',
    fin: ''
};
dikstra(graph, costs, parent);

