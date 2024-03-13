import Link from "next/link";

export default function NavbarItem({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <Link className="hover:text-secondary transition" href={url}>
      {name}
    </Link>
  );
}
