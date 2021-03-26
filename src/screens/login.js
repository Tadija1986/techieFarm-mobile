import React from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { globalStyle, loginPageStyle } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email field is a required')
    .matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, 'Invalid email address'),
  password: yup
    .string()
    .required('Password field is a required')
    .min(8, 'Password must be at least 8 characters'),
});

export default function Login({navigation}) {
  let password = null;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={loginPageStyle.container}>
        <Image
          source={require('../assets/logo.png')}
          style={globalStyle.logo}
        />
        <Text style={loginPageStyle.title}>Log In</Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={values => {
            console.log('Form:', values);
            navigation.navigate('Home');
          }}>
          {props => (
            <View style={loginPageStyle.form}>
              <View style={globalStyle.inputContainer}>
                <Icon name="envelope" style={globalStyle.inputIcon} />
                <TextInput
                  style={globalStyle.input}
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => password.focus()}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                />
              </View>
              {props.touched.email && props.errors.email ? (
                <Text style={globalStyle.errorMessage}>
                  {props.errors.email}
                </Text>
              ) : null}
              <View style={globalStyle.inputContainer}>
                <Icon name="lock" style={globalStyle.inputIcon} />
                <TextInput
                  style={globalStyle.input}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  ref={input => (password = input)}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                />
              </View>
              {props.touched.password && props.errors.password ? (
                <Text style={globalStyle.errorMessage}>
                  {props.errors.password}
                </Text>
              ) : null}
              <Button
                title="Log In"
                color="#12d3cf"
                onPress={props.handleSubmit}
              />
              <View style={globalStyle.marginTop10}>
                <Button
                  title="Sign Up"
                  color="#194769"
                  onPress={() => navigation.navigate('Signup')}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}