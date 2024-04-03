import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  name,
  image,
  link,
}: Readonly<{
  name: string;
  image: string;
  link: string;
}>) {
  return (
    <Link className="flex justify-center" href={link} target="_blank">
      <div className="gpa-2 flex max-w-md cursor-pointer flex-col rounded-lg bg-mirage-200 transition hover:scale-105 dark:bg-mirage-900">
        <div className="relative flex h-full w-full justify-center">
          <Image
            alt="Mountains"
            src={image}
            className="rounded-t-lg"
            width={500}
            height={100}
          />
        </div>
        <div className="rounded-b-lg bg-mirage-200 p-2 text-center dark:bg-mirage-900">
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}
