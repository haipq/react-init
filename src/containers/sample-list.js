import { connect } from 'react-redux'
import SampleListComponent from '../components/sample-list'

export const SampleList = connect(state => ({
  sample: state.sample
}), {})(SampleListComponent)