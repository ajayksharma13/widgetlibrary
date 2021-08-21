import * as React from "react";

import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
import Pagination, {
  PaginationProps,
} from "semantic-ui-react/dist/commonjs/addons/Pagination";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Table from "semantic-ui-react/dist/commonjs/collections/Table";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";

import { BaseComponent } from "../base";
import { withApollo } from "react-apollo";
import { TClientRoute } from "../../types";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import withRouterHOC from "../../hoc/with-router";
import "./style.scss";
import { GQLSample } from ".";
import Utils, { eResultCode } from "../../utils";
import { debounce } from "lodash";
import Loader from "semantic-ui-react/dist/commonjs/elements/Loader";
import { ButtonLink } from "../general";
import {
  CountryDocument,
  CountryQuery,
  CountryQueryVariables,
} from "../../generated/graphql";

const cities = [
  {
    id: 1,
    name: "Udaipur",
  },
  {
    id: 1,
    name: "Jaipur",
  },
];

class SampleListComponent extends BaseComponent<TClientRoute<TProps>, TState> {
  /**
   * default state
   */
  state: Readonly<TState> = {
    countries: [],
    filter: {
      totalRowCount: 0,
      noOfRecords: 10,
      pageCount: 1,
      searchText: "",
    },
    showLoader: false,
  };
  /**
   * component did mount
   */
  async componentDidMount() {
    //to fetch cities
    await this.fetchCountries({
      ...this.state.filter,
    });
  }

  /**
   * fetch cities
   */
  private async fetchCountries(values: any) {
    await Utils.asyncState(this, { showLoader: true });
    const { client } = this.props;
    const requestVariables = {};
    const { data: gqlData } = await client.query<
      CountryQuery,
      CountryQueryVariables
    >({
      query: CountryDocument,
      variables: requestVariables,
    });
    const { countries } = gqlData;
    this.setState({
      countries: countries.splice(0, 10),
    });
    // const { fetchAllBrands } = gqlData;
    // const { resultCode, message, data } = fetchAllBrands;
    // if (resultCode == eResultCode.SUCCESS) {
    //   const { result = [], filter = {} } = data;
    //   console.log(result);
    //   this.setState({
    //     filter,
    //     brands: result,
    //   });
    // } else {
    //   console.error(`Result Error Code (${resultCode}): ${message} `);
    // }
    await Utils.asyncState(this, { showLoader: false });
  }
  /**
   * page change
   * @param event
   * @param data
   */
  onPageChange = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    const { activePage } = data;
    //fetch brands
    await this.fetchCountries({
      ...this.state.filter,
      pageCount: activePage,
    });
  };

  /**
   * search for brands
   */
  searchBrands = debounce(async (value: string) => {
    //search brands
    await this.fetchCountries({
      ...this.state.filter,
      searchText: value,
      pageCount: 1,
    });
  }, 500);

  /**
   *
   * render content
   */
  private renderContent = () => {
    const {
      showLoader,
      countries,
      filter: { pageCount },
    } = this.state;

    if (showLoader) {
      return (
        <Table.Row>
          <Table.Cell colSpan={10} textAlign="left">
            <Loader
              className="line-loader"
              primary="true"
              active
              inline
              size="small"
            />
          </Table.Cell>
        </Table.Row>
      );
    }

    if (!cities.length) {
      return (
        <Table.Row>
          <Table.Cell colSpan={10}>
            <span className="no-item-span">There is no brand yet...</span>
          </Table.Cell>
        </Table.Row>
      );
    }

    return countries.map((country: any, index: number) => (
      <Table.Row key={index}>
        <Table.Cell width={1} textAlign="left">
          {index + 1 + (pageCount - 1) * 10}
        </Table.Cell>
        <Table.Cell width={14}>{country.name}</Table.Cell>
        <Table.Cell width={1} textAlign="center">
          <Icon name="edit" title="Edit" color="yellow"></Icon>
        </Table.Cell>
        {/* <Table.Cell>{_brand.isactive ? "true" : "false"}</Table.Cell>
                                    <Table.Cell>
                                        <Icon name="trash" color="red"></Icon>
                                    </Table.Cell> */}
      </Table.Row>
    ));
  };

  render() {
    const {
      countries,
      filter: { totalRowCount, noOfRecords, pageCount },
      showLoader,
    } = this.state;
    return (
      <div className="list">
        <Grid
          columns="2"
          verticalAlign="middle"
          className="list-heading-section"
        >
          <Grid.Column floated="left" className="section-items">
            <Header as="h5" className="list__header">
              List of Countries
            </Header>
          </Grid.Column>

          <Grid.Column
            floated="right"
            textAlign="right"
            className="section-items"
          >
            <Input
              icon="search"
              onChange={(e) => this.searchBrands(e.target.value)}
              placeholder="Search"
              size="mini"
            />
            <Link to="sample/form" title="Add Brand">
              <Button size="mini" className="primary m-l-15">
                Add
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
        <Segment basic className="list__table">
          <Table basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="left" width={1}>
                  S.No.
                </Table.HeaderCell>
                <Table.HeaderCell width={14}>Country Name</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign="center">
                  Action
                </Table.HeaderCell>
                {/* <Table.HeaderCell>IsActive</Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderContent()}</Table.Body>
          </Table>
        </Segment>

        <Segment basic vertical={true}>
          <Grid columns="2" verticalAlign="middle">
            <Grid.Column>
              <Header as="h5">
                Showing {pageCount} out of{" "}
                {Math.ceil(totalRowCount / noOfRecords)}
              </Header>
            </Grid.Column>
            {cities.length ? (
              <Grid.Column textAlign="right">
                <Pagination
                  size="mini"
                  activePage={pageCount}
                  onPageChange={this.onPageChange}
                  totalPages={Math.ceil(totalRowCount / noOfRecords)}
                  pointing
                  firstItem={null}
                  lastItem={null}
                  secondary
                  className="pagination-links"
                  disabled={Math.ceil(totalRowCount / noOfRecords) <= 1}
                />
              </Grid.Column>
            ) : (
              <></>
            )}
          </Grid>
        </Segment>
      </div>
    );
  }
}

/**
 * default props
 */
type TProps = {};
/**
 * brand list type
 */
// type TBrand = {
//     id?: number,
//     name: string,
//     brand: string,
//     company: string,
//     isActive: boolean,
// }

/**
 * default state
 */
type TState = {
  countries: Array<any>;
  filter: {
    totalRowCount: number;
    noOfRecords: number;
    pageCount: number;
    searchText: string;
  };
  showLoader: boolean;
};

const SampleList = compose<TClientRoute<TProps>, TProps>(
  withRouterHOC,
  withApollo
)(SampleListComponent);
export { SampleList as default };
