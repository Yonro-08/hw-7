import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
  components: {
    Button: {
      variants: {
        brand: {
          background: "#007bff",
          color: "white",
          _hover: { bg: "#63aeff" },
        },
      },
    },
  },
});

export const styleBoxBudget = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px",
  background: "#e2e3e5",
  padding: "20px 10px",
};
