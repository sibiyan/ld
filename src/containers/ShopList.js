import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Container,
  Dimmer,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
  Button,
  Icon
} from "semantic-ui-react";
import { shopListURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";

class ShopList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(shopListURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  render() {
    const { data, error, loading } = this.state;
    return (
      <Container>
        {error && (
          <Message
            error
            header="There was some errors with your submission"
            content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}
        <Item.Group divided>
          {data.map(item => {
            return (
              <Item key={item.id}>
                <Item.Image src={item.image} />
                <Item.Content>
                  <Item.Header
                    as="a"
                    onClick={() =>
                      this.props.history.push(`/shops/${item.id}/products`)
                    }
                  >
                    {item.name}
                  </Item.Header>
                  <Item.Meta>
                    <span className="cinema">{item.category}</span>
                  </Item.Meta>
                  <Item.Description>{item.place.name}</Item.Description>
                  <Item.Extra>
                    <Button
                      primary
                      floated="right"
                      as="a"
                      onClick={() =>
                        this.props.history.push(`/shops/${item.id}/products`)
                      }
                    >
                      Buy from us
                      <Icon name="right chevron" />
                    </Button>
                    <Label>{item.name}</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Container>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     refreshCart: () => dispatch(fetchCart())
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(ShopList);

export default ShopList;
