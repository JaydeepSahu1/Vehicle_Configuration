import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import RegistrationForm from './pages/Registration';
import WelcomePage from './pages/WelcomePage';
import DefaultConfigurationPage from './pages/DefaultConfigurationPage';
import ConfigurePage from './pages/ConfigurePage';
import InvoicePage from './pages/InvoicePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/configuration" element={<DefaultConfigurationPage />} />
          <Route path="/configure" element={<ConfigurePage/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/invoice" element={<InvoicePage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;