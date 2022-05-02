# gRPC in GO

From: https://grpc.io/docs/languages/go/quickstart/

Note there are three main parts:

1. The server
2. The client
3. The contract (a protobuf 3 schema)

# gRPC Service

You can recompile the proto and thus generate files with the following command:

```
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    helloworld/helloworld.proto
```



