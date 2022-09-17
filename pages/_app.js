import { UserProvider } from "@auth0/nextjs-auth0";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { ThemeProvider, SSRProvider } from "react-bootstrap";
import Layout from "../Components/UI/AppWrapper/AppWrapper";
import { AUTH_CONTEXT_PROVIDER } from "../AUTH_GUARD/AUTH_GUARD";
import { NavigationContextProvider } from "../store/navigation-context";
import BootStrapContainer from "../Components/UI/BootStrap/BootStrapContainer";

function BitcoinGuesser({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider breakpoints={["xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
        <BootStrapContainer>
          <NavigationContextProvider>
            <UserProvider
            // loginUrl="https://bitcoin-price-master.vercel.app/api/auth/login"
            // profileUrl="https://bitcoin-price-master.vercel.app/api/auth/me"
            >
              <AUTH_CONTEXT_PROVIDER>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AUTH_CONTEXT_PROVIDER>
            </UserProvider>
          </NavigationContextProvider>
        </BootStrapContainer>
      </ThemeProvider>
    </SSRProvider>
  );
}

export default BitcoinGuesser;
