import About from "./routerSample/About";
import Contact from "./routerSample/Contact";
import Home from "./routerSample/Home";
import Employees from "./routerSample/Employees";
import EmployeeDetail from "./routerSample/EmployeeDetail";
import CustomerList from "./routerSample/CustomerList";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import ProductsTable from "./antDesign/ProductsTable";

const { Header, Content, Footer } = Layout;


function App() {

  return (
    <>
      <BrowserRouter>

        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to='/home'>Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/contact'>Contact</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/employees'>Employee</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/customers'>Customer</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/products'>Products</Link></Menu.Item>
            </Menu>
          </Header>

          {/* content mvc deki randerBody kısmı gibi düşün */}
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

              <Switch>
                <Route path='/about'>
                  <About></About>
                </Route>

                <Route path='/contact'>
                  <Contact></Contact>
                </Route>

                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route exact path='/employees'>
                  <Employees></Employees>
                </Route>
                <Route path='/employees/:id'>
                  <EmployeeDetail></EmployeeDetail>
                </Route>
                <Route path='/customers'>
                  <CustomerList></CustomerList>
                </Route>

                <Route path='/products'>
                  <ProductsTable></ProductsTable>
                </Route>


              </Switch>

            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>



        </Layout>

      </BrowserRouter>
    </>
  );
}

export default App;
