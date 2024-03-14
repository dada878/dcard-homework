import { ReactNode } from "react"

export default function FixedSidebar({children} : {children : ReactNode} ) {
  return <div className="flex flex-col gap-5 w-60 fixed m-10">
    {children}
  </div>
}