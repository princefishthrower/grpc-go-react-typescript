import { useEffect, useState } from "react";
import { sayHello } from "../services/greeterService";

export const useGreeterService = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string
] => {
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  useEffect(() => {
    sayHello(message, setResponseMessage);
  }, [message]);

  return [message, setMessage, responseMessage];
};
