import Image from "next/image";

export default function ProjectItem({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="flex justify-center">
      <div className="dark:bg-mirage-900 bg-mirage-200 rounded-lg flex flex-col gpa-2 cursor-pointer transition hover:scale-105 max-w-md">
        <div className="w-full h-full relative flex justify-center">
          <Image
            alt="Mountains"
            src={image}
            className="rounded-t-lg"
            width={500}
            height={100}
          />
        </div>
        <div className="rounded-b-lg bg-mirage-200 dark:bg-mirage-900 text-center p-2">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}
