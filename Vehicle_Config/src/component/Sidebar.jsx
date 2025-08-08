import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const menuItems = [
    { label: '🏠 Home', path: '/' },
    { label: 'ℹ️ About Us', path: '/about' },
    { label: '📞 Contact Us', path: '/contact' },
    { label: '❓ Help', path: '/help' },
    { label: '📝 Feedback', path: '/feedback' },
    { label: '🔐 Sign In/Out', path: '/signin' }
  ];

  return (
    <>
      {/* Sidebar Panel */}
      <div
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        style={{
          position: 'fixed',
          top: 75,
          left: collapsed ? '-160px' : '0', // Show 40px when collapsed
          height: '100vh',
          width: '200px',
          backgroundColor: 'rgba(34, 34, 34, 0.6)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          transition: 'left 0.3s ease',
          paddingTop: '60px',
          boxShadow: collapsed ? 'none' : '2px 0 10px rgba(0,0,0,0.5)',
          zIndex: 1999,
          overflow: 'hidden',
        }}
      >
        {/* Hamburger icon - visible when collapsed */}
        {collapsed && (
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '160px', // Inside visible 40px portion
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '50px',
              backgroundColor: '#111',
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px',
              cursor: 'pointer',
              zIndex: 2000,
              boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '20px',
                  height: '3px',
                  backgroundColor: '#fff',
                  margin: '4px 0',
                  borderRadius: '2px',
                }}
              />
            ))}
          </div>
        )}

        <ul style={{ listStyle: 'none', padding: '20px', margin: 0 }}>
          {menuItems.map(({ label, path }) => (
            <li key={path} style={{ marginBottom: '1rem' }}>
              <Link
                to={path}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  padding: '6px 10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = 'rgba(255,255,255,0.2)')
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = 'transparent')
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
