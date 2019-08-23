import { Component } from 'react'

// 公用按需加载 进入到某个页面再加载组件
class DynamicImport extends Component {
  state = {
    component: null
  }

  componentDidMount () {
    this.props.load()
    .then((component) => {
      //If the module we’re dynamically importing is using ES modules (export default),it’ll have a .default property.
      // If the module is using commonjs (module.exports), it won’t.
      this.setState(() => ({
        component: component.default ? component.default : component
      }))
    })
  }

  render() {
    return this.props.children(this.state.component)
  }
}

export default DynamicImport
