FROM golang:1.24.3 AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download && go mod verify

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o /fizzbuzz

FROM gcr.io/distroless/base

COPY --from=builder /fizzbuzz /fizzbuzz
COPY --from=builder /app/templates/index.html templates/

EXPOSE 8080

CMD ["/fizzbuzz", "serve"]