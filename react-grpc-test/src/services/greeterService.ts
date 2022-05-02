import * as grpcWeb from "grpc-web";
import { GreeterClient } from "../grpc/HelloworldServiceClientPb";
import { HelloReply, HelloRequest } from "../grpc/helloworld_pb";

// see README, grpc proxy exposes 8080 by default, and we use websockets
// so we use this URL
const greeterService = new GreeterClient("http://localhost:8080", null, null);

export const sayHello = (message: string, setResponseMessage: (message: string) => void) => {
  // create request with the passed string
  const request = new HelloRequest();
  request.setName(message);

  // store call so we can monitor it
  const call = greeterService.sayHello(
    request,
    { "custom-header-1": "value1" },
    (err: grpcWeb.RpcError, response: HelloReply) => {
      console.log(err)
      const responseMessage = response.getMessage()
      console.log(responseMessage);
      setResponseMessage(responseMessage)
    }
  );

  // monitor status
  call.on("status", (status: grpcWeb.Status) => {
    console.log(status);
  });
};
