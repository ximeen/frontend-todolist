import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-neutral-900 shadow-md shadow-white/5">
      <Image
        src="/Logo.png"
        width={128}
        height={48}
        alt="Logo da aplicação, um foguete azul e roxo com o nome todo após ele"
        className="py-20"
      />
    </header>
  )
}
