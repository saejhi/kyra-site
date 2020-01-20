import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index.js"
import Header from "../components/Header/index.js"

export default () => (
  <Layout>
    <div className="flex-1 absolute md:static lg:static xl:static bg-white font-body h-screen w-screen md:w-2/5 lg:w-2/5 xl:w-2/5 overflow-hidden">
      <Link to="juanaPartOneC">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          playsinline="true"
          className="object-cover bg-auto min-w-full h-full hover:opacity-75"
        >
          <source
            src={`../../videos/juanaVestBW.webm`}
            alt="Juana Vest BW webm"
            type='video/webm; codecs="vp8, vorbis"'
          />
          <source
            src={`../../videos/juanaVestBW.mp4`}
            alt="Juana Vest BW mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </Link>
    </div>
    <Header />
    <div className="flex-1 absolute md:static lg:static xl:static bg-transparent md:bg-white lg:bg-white xl:bg-white font-body h-screen w-screen md:w-2/5 lg:w-2/5 xl:w-2/5 opacity-75 md:opacity-100 lg:opacity-100 xl:opacity-100 overflow-hidden">
      <Link to="juanaPartOneC">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          playsinline="true"
          className="h-full hover:opacity-50 md:hover:opacity-75 lg:hover:opacity-75 xl:hover:opacity-75"
        >
          <source
            src={`../../videos/juanaSkirtRGB.webm`}
            alt="Juana Skirt RGB webm"
            type='video/webm; codecs="vp8, vorbis"'
          />
          <source
            src={`../../videos/juanaSkirtRGB.mp4`}
            alt="Juana Skirt RGB mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </Link>
    </div>
  </Layout>
)
