import React from 'react'
import './Coin.css';

const CoinHeader = () => {
  return (
    <div className="coin-container">
        <div className="coin-row">
            <div className="coin">
                <h1 style={{marginBottom: "20px"}}>Coin Name</h1>
                <p style={{marginLeft: "30px", marginBottom: "20px"}}>Symbol</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>Price</p>
                <p className='coin-volume'>Volume</p>
                <p className='coin-percent green'>Change %</p>
                <p className='coin-marketcap'>Mkt Cap</p>
            </div>
        </div>
    </div>
  )
}

export default CoinHeader;