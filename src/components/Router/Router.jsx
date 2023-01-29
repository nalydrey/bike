import { createRef } from "react";
import { createBrowserRouter, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ParallaxProvider } from "react-scroll-parallax";

import {
  MainPage,
  BikesPage,
  Work,
  Accessories,
  CircularPage,
  AppPage,
  Bike4,
} from "../Pages";
import data from "../../data/data";
import "./router.scss";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import ScrollToTop from "../Main/Scroll";

const routes = [
  {
    path: "/",
    name: "COWBOY*",
    element: <MainPage data={data.main} />,
    nodeRef: createRef(),
  },
  {
    name: "E-BIKES",
    path: "/bikes",
    element: <BikesPage />,
    nodeRef: createRef(),
  },

  {
    name: "ACCESSORIES",
    path: "/accessories",
    element: <Accessories data={data.sell} />,
    nodeRef: createRef(),
  },
  {
    name: "APP",
    path: "/app",
    element: <AppPage data={data.app} />,
    nodeRef: createRef(),
  },
  {
    name: "CIRCULAR",
    path: "/circular",
    element: <CircularPage data={data.circular} />,
    nodeRef: createRef(),
  },
  {
    name: "FOR WORK",
    path: "/work",
    element: <Work data={data.work} />,
    nodeRef: createRef(),
  },
  {
    name: "",
    path: "/bike4",
    element: <Bike4 data={data.items.bike4} />,
    nodeRef: createRef(),
  },

  {
    name: "",
    path: "/bike4st",
    element: <Bike4 data={data.items.bike4st} />,
    nodeRef: createRef(),
  },
];

const AppRouter = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <Header route={routes} data={data.header} />
      <main className="container">
        <ParallaxProvider>
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={500}
              classNames="page"
              unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
          <ScrollToTop />
        </ParallaxProvider>
      </main>
      <Footer data={data.footer} />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
