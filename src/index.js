import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

//default alck araha tha chkra ki waja sa is tara sa white kiya ha 
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#fff",
        color:"black",
      },
    }),
  },
});
// end 
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;