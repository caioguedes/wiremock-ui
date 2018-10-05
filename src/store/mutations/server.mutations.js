import { connect } from 'wiremock-client'

function addServerToState (state, server) {
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

  console.log('add Server', state.servers)
}

export default {
  addServer: addServerToState,
  updateServer (state, { serverIndex, server }) {
    state.servers.splice(serverIndex, 1)
    addServerToState(state, server)
  }
}
