import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../../Components/Layout'
import Enzocard from '../../Components/Enzocard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Enzocard />
      </Layout>
    </>
  )
}
