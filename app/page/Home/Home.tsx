import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo2 } from '../../store/actions/home';
const mapStateToProps = ({ home }: any) => ({ home });
const mapDispatchProps = (dispatch: any) => ({
  addTodo2: dispatch(addTodo2())
});
import * as styles from './Home.less';
@(connect(mapStateToProps, mapDispatchProps) as any)
class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentWillMount() {
    // this.props.addTodo2;
  }
  render() {
    return <div className={styles.h100}>{this.props.home.text}</div>;
  }
}
export default Index;
