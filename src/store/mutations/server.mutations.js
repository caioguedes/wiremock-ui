import { connect } from 'wiremock-client'

export default {
  addServer (state, server) {
    let protocol = server.protocol
    let host = server.host
    let port = server.port

    state.servers.push({
      name: server.name,
      protocol,
      host,
      port,
      mock: connect(protocol, host, port)
    })

    console.log(state.servers)
  }
}
