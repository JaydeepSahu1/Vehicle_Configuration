import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
    <Footer />
  </div>
);
export default Layout;