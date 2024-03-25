export function queryToURL(query: PostQuery, page: string) {
  let queryString = new URLSearchParams();
  queryString.append("state", "open");
  const queryLabels = [];
  if (query?.category) {
    queryLabels.push(`category:${query.category}`);
  }
  if (query?.tags) {
    query.tags.forEach((tag) => {
      queryLabels.push(`tag:${tag}`);
    });
  }
  if (queryLabels.length > 0) {
    queryString.append("labels", queryLabels.join(","));
  }
  queryString.append("sort", "updated");
  queryString.append("per_page", "10");
  queryString.append("page", page);
  return queryString.toString();
}