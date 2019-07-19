import React from 'react';
import Table from './Table/Table';
import Paginate from './Paginate/Paginate';
import SearchBar from './Search/SearchBar';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      filter: {}
    };
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.searchKeys === this.props.searchKeys) return;
    this.setState({ filter: {}, page: 1 });
  }

  handlePageClick = (direction) => {
    const page = this.state.page + direction;
    this.setState({ page: page < 1 ? 1 : page });
  };

  handleSearchBarUserSubmit = (filter) => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      filter: filter ? filter : this.state.filter,
      page: 1
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.searchKeys && (
          <SearchBar fields={this.props.searchKeys} handleSubmit={this.handleSearchBarUserSubmit} />
        )}
        <this.props.queryData filter={this.state.filter} page={this.state.page}>
          {(data) => {
            return (
              <React.Fragment>
                <hr />
                <Table
                  data={data}
                  editable={this.props.editable}
                  fields={this.props.fields}
                  links={true}
                  path={this.props.location.pathname}
                />
                <hr />
                <Paginate onPageChange={this.handlePageClick} />
              </React.Fragment>
            );
          }}
        </this.props.queryData>
      </React.Fragment>
    );
  }
}

export default List;
