import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import { DownloadLink } from '~/components/Button'
import Capsule from '~/components/Capsule'
import FeatureCard from '~/components/FeatureCard'
import { features } from '~/data/features'
import { DownloadIcon, LogoLarge, RightArrow } from '~/svg'

type TRelease = {
  version: string
  downloadLinks: {
    intel: string
    arm: string
  }
}

export default function Home({
  data,
}: InferGetStaticPropsType<any>) {
  return (
    <main
      className={`flex min-h-screen flex-col px-4 md:px-8 py-4 xl:py-8 bg-gradient-to-b xl:bg-gradient-to-bl from-green-950 via-zinc-950 to-black`}
    >
      <section className="w-full xl:w-5/6 2xl:w-3/4 flex flex-col mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <LogoLarge className="w-20 xl:w-24 text-white" />
          </Link>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between mt-8 xl:mt-20">
          <div className="flex flex-col items-center xl:items-start justify-start w-full xl:max-w-[640px]">
            <Link href="https://github.com/ssantoshp/ByteDetective" target="_blank">
              <Capsule
                text={`⭐ See on GitHub`}
                additionalStyles="mb-2 xl:mb-4 hover:bg-green-700/20 pointer"
                icon={
                  <RightArrow className="w-4 h-4 text-green-300 group-hover:text-green-400 ml-1" />
                }
              />
            </Link>
            <h1 className="text-4xl md:text-6xl py-2 tracking-tighter text-transparent font-bold bg-clip-text bg-gradient-to-br from-slate-50 to-green-700">
            Image search made intuitive
            </h1>
            <p className="mt-2 mx-1 xl:mx-0 xl:mt-4 text-base xl:text-xl text-slate-300">
            ByteDetective is a MacOS desktop app that let you search for images on your computer by describing them.{' '}
            </p>
            <div className="flex items-center mt-8">
              <DownloadLink
                label="for Apple Silicon"
                subtitle="2020 and later models"
                icon={<DownloadIcon className="w-4 h-4 mr-1.5 text-slate-50" />}
                href="https://github.com/ssantoshp/ByteDetective/releases/latest/download/ByteDetective.dmg"
              />
              <DownloadLink
                label="for Intel Chips"
                subtitle="earlier models"
                style="ml-3"
                icon={
                  <DownloadIcon className="w-4 h-4 mr-1.5 text-slate-200" />
                }
                type="secondary"
                href="https://github.com/ssantoshp/ByteDetective/releases/latest/download/ByteDetective.dmg"
              />
            </div>
          </div>
          <video
            className="w-full mt-8 md:w-3/4 lg:w-3/5 xl:mt-0 xl:w-2/5 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/yack_demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="w-full xl:w-5/6 2xl:w-3/4 flex flex-col mx-auto mt-12 xl:mt-24">
        <h3 className="text-2xl md:text-4xl w-full font-bold text-transparent text-center bg-clip-text bg-gradient-to-br from-slate-50 to-slate-600">
          Why it's awesome
        </h3>
        <p className="text-sm md:text-base text-center mt-2 text-slate-300">
          Beside the fact that it's free and open source ;)
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mt-8">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.id} />
          ))}
        </div>
      </section>
      <section className="w-full lg:w-4/5 2xl:w-3/4 flex flex-col mx-auto my-12 xl:my-24">
        <h3 className="text-lg md:text-2xl w-full font-bold text-zinc-100 text-center">
          Wanna search images faster?
        </h3>
        <div className="flex items-center mx-auto mt-4">
          <DownloadLink
            label="for Apple Silicon"
            subtitle="2020 and later models"
            icon={<DownloadIcon className="w-4 h-4 mr-1.5 text-slate-50" />}
            href="https://github.com/ssantoshp/ByteDetective/releases/latest/download/ByteDetective.dmg"
          />
          <DownloadLink
            label="for Intel Chips"
            subtitle="earlier models"
            style="ml-3"
            icon={<DownloadIcon className="w-4 h-4 mr-1.5 text-slate-200" />}
            type="secondary"
            href="https://github.com/ssantoshp/ByteDetective/releases/latest/download/ByteDetective.dmg"
          />
        </div>
      </section>
      <p className="text-xs text-zinc-400 w-full text-center">
        Built by{' '}
        <a
          href="https://github.com/ssantoshp"
          className="underline hover:text-amber-400"
        >
          Santosh Passoubady
        </a>
      </p>
    </main>
  )
}
