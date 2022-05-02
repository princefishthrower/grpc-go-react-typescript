module go-grpc/server

go 1.17

require (
	go-grpc/utils v0.0.0-00010101000000-000000000000
	google.golang.org/grpc v1.46.0
	google.golang.org/grpc/examples v0.0.0-20220429201323-dc86d5de854f
)

require (
	github.com/golang/protobuf v1.5.2 // indirect
	golang.org/x/net v0.0.0-20201021035429-f5854403a974 // indirect
	golang.org/x/sys v0.0.0-20210119212857-b64e53b001e4 // indirect
	golang.org/x/text v0.3.3 // indirect
	google.golang.org/genproto v0.0.0-20200806141610-86f49bd18e98 // indirect
	google.golang.org/protobuf v1.27.1 // indirect
)

replace go-grpc/utils => ../utils
