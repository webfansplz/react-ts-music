import * as React from 'react';
import { connect } from 'react-redux';
import { home_req } from '../../store/actions/home';

@(connect(({ home }: any) => ({
  home
})) as any)
class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(home_req('cao'));
    setTimeout(() => {
      console.log(this.props);
    });
  }
  clilkjhsdf() {
    console.log(123);
  }
  render() {
    return <div onClick={this.clilkjhsdf}>this is Home page</div>;
  }
}
export default Index;
