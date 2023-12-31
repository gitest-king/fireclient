import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout/Layout'
import {AuthProvider} from 'components/Provider/AuthProvider'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
