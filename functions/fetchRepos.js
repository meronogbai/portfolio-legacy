const fetch = require('node-fetch');

const { API_URL, API_TOKEN, USER_LOGIN } = process.env;

exports.handler = async () => {
  try {
    const response = await fetch(API_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
          'User-Agent': 'request',
        },
        body:
          `{"query": "query FetchPinnedRepos($github_login: String!) {\\n  user(login: $github_login) {\\n    pinnedItems(first: 6) {\\n      edges {\\n        node {\\n          ... on Repository {\\n            name\\n            description\\n            homepageUrl\\n            url\\n            openGraphImageUrl\\n            repositoryTopics(first: 4) {\\n              edges {\\n                node {\\n                  topic {\\n                    name\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n","variables":{"github_login":"${USER_LOGIN}"},"operationName":"FetchPinnedRepos"}`,
      });
    if (!response.ok) throw new Error(response);
    const data = await response.json();
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
