
function list(clients) {
  return clients.map((client) => {
    return `
      <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
      </li>
    `
  }).join('')
}

function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1
    } else if (a[property] < b[property]) {
      return -1
    } else {
      return 0
    }
  })
}

function total(clients) {
  return clients.reduce((sum, client) => {
    return sum + client.balance
  }, 0)
}

function info(index) {
  return clients.find((client) => {
    return client.index === index
  })
}

function search(query) {
  return clients.filter((client) => {
    return client.name.toLowerCase().includes(query.toLowerCase())
  })
}
