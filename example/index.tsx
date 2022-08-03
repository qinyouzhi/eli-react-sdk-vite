import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loading } from 'fbm-ui';
import routers from './routers';

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Router basename="/">
        <Routes>
          {routers.map((item: any, index: number) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Suspense
                    fallback={
                      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        <Loading size={40} />
                      </div>
                    }
                  >
                    <item.element />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};

const container = document.getElementById('app');
ReactDOM.render(<App />, container);
