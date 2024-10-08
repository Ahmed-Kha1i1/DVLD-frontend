import { Toaster } from "react-hot-toast";

function ToasterConfig() {
  return (
    <Toaster
      position="top-center"
      gutter={8}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        duration: 5000,
        style: {
          background: "white",
          color: "black",
        },
        success: {
          duration: 5000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  );
}

export default ToasterConfig;
