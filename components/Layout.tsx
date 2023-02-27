import Header from "./Header";
import Footer
 from "./Footer";

 interface IBasicLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
  isNotFound?: boolean;
  hideFooter?: boolean;
  hideHeader?: boolean;
  darkHeader?: boolean;
}

const Layout = ({ children }:IBasicLayoutProps) => {
  return (
    <div>
        <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
