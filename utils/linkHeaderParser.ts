const regex = /.+?\d+.+?&page=(\d).+?rel=\"(.+?)\"/g;

export function parseLinkHeader(linkHeader: string) {
  const links: { [key: string]: string } = {};
  let match;
  while ((match = regex.exec(linkHeader))) {
    links[match[2]] = match[1];
  }
  return links;
}