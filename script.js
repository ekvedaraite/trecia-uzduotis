fetch(`https://party-wedding.glitch.me/v1/wedding`)
  .then(res => res.json())
  .then(data => {
    const formattedData = data.map(person => ({
      name: person.name,
      plusOne: person.plusOne ? "+" : "-",
      attending: person.attending ? "+" : "-"
    }))

    const table = document.createElement("table")
    table.classList.add("custom-table")

    const headers = Object.keys(formattedData[0])
    const headerRow = table.insertRow()

    headers.forEach(header => {
      const th = document.createElement("th")
      switch (header) {
        case "name":
          th.textContent = "Name and Last Name"
          break
        case "plusOne":
          th.textContent = "Bringing Plus One"
          break
        case "attending":
          th.textContent = "Attending"
          break
        default:
          th.textContent = header
      }

      th.classList.add("custom-th")
      headerRow.appendChild(th)
    })

    formattedData.forEach(person => {
      const row = table.insertRow()
      row.classList.add("custom-tr")

      headers.forEach(header => {
        const cell = row.insertCell()
        cell.textContent = person[header]
      })
    })

    document.body.appendChild(table)
  })
  .catch(e => console.log(e.message))
