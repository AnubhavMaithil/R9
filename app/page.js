"use client"

import Image from 'next/image'
import styles from './page.module.css'

import Landing from '@/Components/Landing'
import Gallery from '@/Components/Gallery'
import SlidingImages from '@/Components/SlidingImages'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const locomotivescroll = new LocomotiveScroll();
  })
  return (
    <main className={styles.main}>
      <Landing />
      <Gallery />
      <SlidingImages />
    </main>
  )
}
