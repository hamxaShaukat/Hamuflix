
import { Input } from "@/components/ui/input"


export function SearchBar() {
  return (
    <div className="flex w-[32rem] items-center space-x-2">
      <Input type="text" placeholder="Serach for movies" className="" />
    </div>
  )
}
