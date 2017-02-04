import graphql from 'graphql-anywhere'
import query from './query.graphql'

const gitHubAPIResponse = {
  "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
  "title": "Found a bug",
  "body": "I'm having a problem with this.",
  "user": {
    "login": "octocat",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "url": "https://api.github.com/users/octocat",
  },
  "labels": [
    {
      "url": "https://api.github.com/repos/octocat/Hello-World/labels/bug",
      "name": "bug",
      "color": "f29513"
    }
  ],
};

const resolver = (fieldName, root) => root[fieldName]

const result = graphql(
  resolver,
  query,
  gitHubAPIResponse
)

console.log(result)