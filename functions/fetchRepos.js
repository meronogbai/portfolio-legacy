require('dotenv').config();
const fetch = require('node-fetch');

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'User-Agent': 'request',
  },
  body:
  `{"query": "query FetchPinnedRepos($github_login: String!) {\\n  user(login: $github_login) {\\n    pinnedItems(first: 4) {\\n      edges {\\n        node {\\n          ... on Repository {\\n            name\\n            description\\n            homepageUrl\\n            url\\n            openGraphImageUrl\\n            repositoryTopics(first: 4) {\\n              edges {\\n                node {\\n                  topic {\\n                    name\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n","variables":{"github_login":"${process.env.GITHUB_LOGIN}"},"operationName":"FetchPinnedRepos"}`,
})
  .then(response => response.json())
  .then(data => console.log(data.data.user.pinnedItems.edges));
