import React from 'react'
import {motion} from "framer-motion"

import "./connectWallet.css"

function ConnectWallet() {
  return (
    <div className="container flex wallet">
        <div className="wrapper">
        <motion.img
        initial={{ opacity: 0, scale: 1.2, rotate: -270, borderRadius: '0%' }}
        animate={{ opacity: 1, scale: 1, rotate: 0, borderRadius: '100%' }}
        transition={{
          type:"spring",
          duration:0.1
        }}
        // exit={{ opacity: 0, scale: 0.5, rotate: 270, borderRadius: '0%' }}
        src={process.env.PUBLIC_URL + "/images/CryptoWallet.png"}
        alt="wallet"
      />
            <motion.a initial={{y:50}} animate={{y:0}} href="/">Connect wallet</motion.a>
        </div>
    </div>
  )
}

export default ConnectWallet
