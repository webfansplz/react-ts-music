import * as React from 'react';
import { connect } from 'react-redux';
import { home, home2 } from '../../store/actions/home';
@(connect(({ home }: any) => ({ home })) as any)
class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(home('hello,world'));
    this.props.dispatch(home2('webfansplz'));
  }
  render() {
    return (
      <div>
        {this.props.home.text}-{this.props.home.text2}
      </div>
    );
  }
}
export default Index;
