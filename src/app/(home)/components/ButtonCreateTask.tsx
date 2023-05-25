import { PlusCircle } from 'lucide-react'

export default function ButtonCreateTask() {
  return (
    <button className="flex items-center gap-1.5 rounded-lg bg-[#1E6F9F] px-8 py-4 transition-colors hover:bg-[#4EA8DE]">
      Criar <PlusCircle width={18} />
    </button>
  )
}
