import { StyleSheet } from 'react-native';

export const loginPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0d8e1'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  form: {
    marginTop: 20
  }
});

export const signupPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0d8e1'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  form: {
    marginTop: 20
  }
});

export const navigatorStyle = StyleSheet.create({
  header: {
    backgroundColor: '#194769',
    height: 60
  }
});

export const globalStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#12d3cf',
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 10
  },
  input: {
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
  },
  inputIcon: {
    paddingLeft: 5,
    fontSize: 18,
  },
  marginTop10: {
    marginTop: 10
  },
  logo: {
    height: 80,
    width: 80
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10
  },
  headerContainer: {
    width: 420,
  },
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  iconMenu: {
    color: 'black'
  }
});

// dark-blue: #194769;
// light-gray: #d0d8e1;
// light-blue: #12d3cf;
