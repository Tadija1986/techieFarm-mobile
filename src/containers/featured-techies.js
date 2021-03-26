import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import TechieItem from './techie-item';
import {addTechiesListAction} from '../common/actions/techies';

const mapStateToProps = state => {
  return {
    techies: state.techies.content,
    isLoading: state.techies.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTechiesList: techiesList => dispatch(addTechiesListAction(techiesList)),
  };
};

class GetFeaturedTechies extends React.Component {
  componentDidMount() {
    this.get();
  }

  get = () => {
    axios
      .get('http://api.techie.farm/featured-techies', '')
      .then(response => {
        this.props.loadTechiesList({
          content: response.data,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <SafeAreaView>
        {!this.props.isLoading ? (
          <FlatList
            data={this.props.techies}
            renderItem={({item}) => (
              <TechieItem techie={item} navigation={this.props.navigation} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#12d3cf" />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetFeaturedTechies);
