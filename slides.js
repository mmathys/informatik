const domContainer = document.querySelector("#slides_container")

const e = React.createElement

class Slides extends React.Component {
  constructor(props) {
    super(props)
  }

  dates = [
    "24.09.2020",
    "1.10.2020",
    "8.10.2020",
    "15.10.2020",
    "22.10.2020",
    "29.10.2020",
    "5.11.2020",
    "12.11.2020",
    "19.11.2020",
    "26.11.2020",
    "3.12.2020",
    "10.12.2020",
    "17.12.2020",
  ]

  render() {
    return this.dates.map((date) => e("tr"))
  }
}

ReactDOM.render(e(Slides), domContainer)
