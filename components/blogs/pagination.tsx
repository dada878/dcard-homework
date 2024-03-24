import { getPagination } from "@/actions/posts";
import LinkButton from "../global/linkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default async function Pagination({ page }: { page: string }) {
  const pagination: Pagination = await getPagination(page);
  const isOverRange = pagination.last - pagination.first + 1 > 5;
  const lastInRange =
    isOverRange && parseInt(page) + 2 < pagination.last
      ? parseInt(page) + 2
      : pagination.last;
  const firstInRange = isOverRange ? lastInRange - 4 : pagination.first;
  return (
    <div className="flex justify-center gap-4">
      {pagination.prev && (
        <LinkButton color="dark-blue" href={`/blogs?page=${pagination.prev}`}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </LinkButton>
      )}
      {Array.from({ length: lastInRange - firstInRange + 1 }).map(
        (_, index) => {
          const pageNumber = firstInRange + index;
          return (
            <LinkButton
              color={pageNumber === parseInt(page) ? "blue" : "dark-blue"}
              key={pageNumber}
              href={`/blogs?page=${pageNumber}`}
            >
              {pageNumber}
            </LinkButton>
          );
        }
      )}
      {pagination.next && (
        <LinkButton color="dark-blue" href={`/blogs?page=${pagination.next}`}>
          <FontAwesomeIcon icon={faChevronRight} />
        </LinkButton>
      )}
    </div>
  );
}
