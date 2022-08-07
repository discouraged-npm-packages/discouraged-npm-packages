var { graphql } = await import('https://cdn.skypack.dev/@octokit/graphql')
var repos = await graphql(
  `
    {
      repository(owner: "discouraged-npm-packages", name: "discouraged-npm-packages") {
    discussions(categoryId: "DIC_kwDOHyE6k84CQrP4", first: 100) {
      nodes {
        title
        number
        poll {
          question
          options(first: 2) {
            nodes {
              option
              totalVoteCount
            }
          }
        }
      }
    }
  }
    }
  `,
  {
    headers: {
      authorization: `token ___`,
    },
  }
);

var polls = []
for (const disc of repos.repository.discussions.nodes) {
  const n = disc.poll.options.nodes
  polls.push([disc.title, disc.number, n.find(x => x.option.toLowerCase() === 'yes').totalVoteCount, n.find(x => x.option.toLowerCase() === 'no').totalVoteCount].join())
}
b = new Blob(['export default ' + JSON.stringify(polls, null, 2)])
location.href = URL.createObjectURL(b)
