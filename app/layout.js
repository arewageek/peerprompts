import { Nav } from '@components/Nav'
import { Provider } from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
  title: 'Peer Prompts',
  description: 'Share AI Prompts with peers with ease. Get the best prompts for each usecase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <Nav />
          </div>  
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
