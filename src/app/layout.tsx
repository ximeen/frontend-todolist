import { ReactNode } from 'react'
import '../styles/globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Task list',
  description: 'Aplicacão web, uma lista de tarefas, desenvolvido em NextJs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} bg-zinc-900 font-sans text-zinc-50`}>
        {children}
      </body>
    </html>
  )
}
