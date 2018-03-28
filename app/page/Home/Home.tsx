import * as React from 'react';
import { connect } from 'react-redux';
import { home } from '../../store/actions/home';
@(connect(({ home }: any) => ({ home })) as any)
class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(home('hello,world'));
  }
  render() {
    return <div>{this.props.home.text}</div>;
  }
}
export default Index;
