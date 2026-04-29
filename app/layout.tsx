export const metadata = {
  title: 'Dogfood E-commerce',
  description: 'E-commerce storefront — regression test',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#fff', color: '#111' }}>
        {children}
      </body>
    </html>
  )
}
