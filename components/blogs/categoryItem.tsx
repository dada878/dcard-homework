export default function CategoryItem({name, count} : {name: string, count: number}) {
    return (
        <div className="flex justify-between text-secondary cursor-pointer hover:text-primary py-2 transition">
            <p>{name}</p>
            {/* TOD: make the border color gray */}
            <div className="bg-red flex-1 border-b mx-2 -translate-y-1/2"></div>
            <p>{count} 篇</p>
        </div>
    );
}