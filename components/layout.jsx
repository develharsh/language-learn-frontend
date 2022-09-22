// import Head from "next/head";
// import Navbar from "./design/navbar";
// import Footer from "./design/footer";
// import Toast from "./design/toast";
// import { useContext } from "react";
// import { DataContext } from "../store/globalstate";
// import { ACTIONS } from "../store/actions";
import Header from "./design/header";
import Footer from "./design/footer";
import DemoPopup from "./custom/demo-popup";
import Loading from "./design/loading";
// import Subscribe from "./design/subscribe";
import Router from "next/router";
import NProgress from "nprogress";

function layout({ children }) {
  // const { dispatch } = useContext(DataContext);
  Router.events.on("routeChangeStart", (url) => {
    // dispatch({ type: ACTIONS.GLOBAL_LOADING, payload: true });
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    // dispatch({ type: ACTIONS.GLOBAL_LOADING, payload: false });
    NProgress.done();
  });
  return (
    <>
      <Header />
      <Loading />
      <DemoPopup />
      {children}
      {/* <Subscribe /> */}
      <Footer />
    </>
  );
}

export default layout;
