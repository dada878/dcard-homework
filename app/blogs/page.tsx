'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import CategoryItem from '@/components/blogs/categoryItem';
import Button from '@/components/global/button';

export default function Blogs() {
  return (
    <div className="container text-center flex gap-10 p-10">
      <div className="flex flex-col gap-5 w-52">
        <Button onClick={() => {}}>
            <div className='flex gap-4 justify-center items-center'>
                <FontAwesomeIcon className="w-4" icon={faPlus} />
                <span>新增文章</span>
            </div>
        </Button>
        <div className="bg-secondary rounded-2xl p-4 flex flex-col gap-4">
            <p className="text-center font-bold text-2xl">分類</p>
            <div className="flex flex-col">
                <CategoryItem name="React.js" count={5} />
                <CategoryItem name="Vue.js" count={4} />
                <CategoryItem name="Typescript" count={3} />
                <CategoryItem name="CSS" count={12} />
                <CategoryItem name="神奇的深活日常" count={1} />
            </div>
        </div>
      </div>
      <div className="bg-secondary">
        <p>Blog 2</p>
      </div>
    </div>
  );
}
