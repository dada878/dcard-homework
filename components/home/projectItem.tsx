import Image from 'next/image'


export default function ProjectItem({name, image} : {name : string, image: string}) {
  return (
    <div className="bg-secondary rounded-lg flex flex-col gpa-2">
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <Image
          alt='Mountains'
          src={image}
          className='rounded-t-lg'
          width={500}
          height={100}
        />
      </div>
      <div className='bg-secondary rounded-b-lg text-center p-2'>
        <p>{name}</p>
      </div>
    </div>
  );
}