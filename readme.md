A simple node &amp; express app running within Docker

[![Docker Image CI](https://github.com/serdar/ltest/actions/workflows/docker-image.yml/badge.svg)](https://github.com/serdar/ltest/actions/workflows/docker-image.yml)

### Building Dockerfile
`docker build . -t ntest:latest`

### Running
`docker run -p 3000:3000 -d --restart unless-stopped  ntest:latest`