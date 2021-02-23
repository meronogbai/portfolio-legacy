const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const resposne = await fetch(process.env.API_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          'User-Agent': 'request',
        },
        body:
        `{"query": "query FetchPinnedRepos($github_login: String!) {\\n  user(login: $github_login) {\\n    pinnedItems(first: 4) {\\n      edges {\\n        node {\\n          ... on Repository {\\n            name\\n            description\\n            homepageUrl\\n            url\\n            openGraphImageUrl\\n            repositoryTopics(first: 4) {\\n              edges {\\n                node {\\n                  topic {\\n                    name\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n","variables":{"github_login":"${process.env.USER_LOGIN}"},"operationName":"FetchPinnedRepos"}`,
      });
    const data = await resposne.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data.data.user.pinnedItems.edges),
    };
  } catch (error) {
    const {
      status, statusText, headers, data,
    } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({
        status, statusText, headers, data,
      }),
    };
  }
};
