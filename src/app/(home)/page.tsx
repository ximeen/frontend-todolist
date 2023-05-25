import ButtonCreateTask from './components/ButtonCreateTask'
import Header from './components/Header'
import InputNewTask from './components/InputNewTask'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-60">
        <div className="-mt-6 flex items-center justify-center gap-2 ">
          <InputNewTask />
          <ButtonCreateTask />
        </div>
        <div className="mt-16 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-sky-500">
              Tarefas criadas
            </span>
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
              0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[#8284FA]">
              Concluidas
            </span>
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
              0
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
