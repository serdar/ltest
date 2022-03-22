A simple node &amp; express app running within Docker

### Building
`docker build . -t ntest:latest`

### Running
`docker run -p 3000:3000 -d --restart unless-stopped  ntest:latest`