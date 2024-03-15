import Link from "next/link";

export default function NavbarItem({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <Link className="transition p-3 hover:text-secondary" href={url}>
      {name}
    </Link>
  );
}
