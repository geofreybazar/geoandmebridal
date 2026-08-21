import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
  searchQuery: {
    [key: string]: string | string[] | undefined;
  };
};

const PaginationFooter = ({ currentPage, totalPages, searchQuery }: Props) => {
  if (totalPages <= 1) return null;

  /* ---------------- Build URL ---------------- */

  const buildUrl = (page: number) => {
    const params = new URLSearchParams();

    Object.entries(searchQuery).forEach(([key, value]) => {
      if (!value || key === "page") return;

      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else {
        params.append(key, value);
      }
    });

    params.set("page", String(page));

    return `?${params.toString()}`;
  };

  /* ---------------- Page Range ---------------- */

  const pages: number[] = [];

  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <Pagination className='mt-16'>
      <PaginationContent className='flex items-center gap-2'>
        {/* Previous */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={buildUrl(currentPage - 1)}
              className='
              border border-black/20
              rounded-md
              px-3 py-2
              text-black/70
              hover:bg-black hover:text-white
              transition
            '
            />
          </PaginationItem>
        )}

        {/* First Page */}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href={buildUrl(1)}
                isActive={currentPage === 1}
                className={`
                rounded-md px-3 py-2 text-sm
                ${
                  currentPage === 1
                    ? "bg-mocha text-white"
                    : "text-black/70 hover:bg-black hover:text-white"
                }
                transition
              `}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {start > 2 && (
              <PaginationItem>
                <PaginationEllipsis className='text-black/40' />
              </PaginationItem>
            )}
          </>
        )}

        {/* Page Numbers */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={buildUrl(page)}
              isActive={page === currentPage}
              className={`
              rounded-md px-3 py-2 text-sm
              ${
                page === currentPage
                  ? "bg-mocha text-white"
                  : "text-black/70 hover:bg-black hover:text-white"
              }
              transition
            `}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Last Page */}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis className='text-black/40' />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                href={buildUrl(totalPages)}
                isActive={currentPage === totalPages}
                className={`
                rounded-md px-3 py-2 text-sm
                ${
                  currentPage === totalPages
                    ? "bg-mocha text-white"
                    : "text-black/70 hover:bg-black hover:text-white"
                }
                transition
              `}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={buildUrl(currentPage + 1)}
              className='
              border border-black/20
              rounded-md
              px-3 py-2
              text-black/70
              hover:bg-black hover:text-white
              transition
            '
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationFooter;
