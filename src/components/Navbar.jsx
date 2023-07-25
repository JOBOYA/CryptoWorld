import {  Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined} from '@ant-design/icons';




export default function Navbar() {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src="" size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">
                    <h1 >CryptoWorld</h1>
                    </Link>
            </Typography.Title>
       <Menu theme="dark">
              <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>

                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
           
                </Menu>
        </div>
    </div>
    )
}
