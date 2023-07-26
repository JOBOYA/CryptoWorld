import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { Layout } from 'antd'
import { Typography } from 'antd'
import {Navbar , Exchanges , Homepage , Cryptocurrencies , CryptoDetails , News} from './components'
import './styles.css';




function App() {
 

  return (
    <>
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
           <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
              <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route path="/news" element={<News/>} />


           </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer ">
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          Cryptoworld <br/>
          All rights reserved
        </Typography.Title>
        <Space className='text-slate-500'>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
        
      </div>
    </div>
    </>
  )
}

export default App
