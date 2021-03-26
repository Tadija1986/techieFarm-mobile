import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import ViewDetailsTechieItem from '../containers/view-details-techie-item';
import axios from 'axios';

class ViewDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      techies: null,
      id: props.navigation.getParam('id', '1'),
    };
  }
  componentDidMount() {
    this.get();
  }

  get = () => {
    this.setState({
      loading: true,
      techies: null,
    });
    axios
      .get(`http://api.techie.farm/featured-techies/${this.state.id}`, '')
      .then(response => {
        this.setState({
          isLoading: false,
          techies: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View>
        {!this.state.isLoading ? (
          <ViewDetailsTechieItem techie={this.state.techies} />
        ) : (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#12d3cf" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#12d3cf',
    fontSize: 23,
    textAlign: 'center',
    backgroundColor: '#194769',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 150,
  },
});

export default ViewDetailsPage;
