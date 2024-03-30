import React from 'react'

function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout

