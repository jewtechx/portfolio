import React from 'react'
import "./connectWallet.css"

function ConnectWallet() {
  return (
    <div className="container flex wallet">
        <div className="wrapper">
            <img src="/images/CryptoWallet.png" alt="wallet" />
            <a href="/">Connect wallet</a>
        </div>
    </div>
  )
}

export default ConnectWallet
