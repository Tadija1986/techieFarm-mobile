import React from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { globalStyle, signupPageStyle } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup
    .string()
    .required('Email field is a required')
    .matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, 'Invalid email address'),
  password: yup
    .string()
    .required('Password field is a required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Password field is a required')
    .min(8, 'Password must be at least 8 characters'),
});

export default function Signup({navigation}) {
  let lastName = null;
  let email = null;
  let password = null;
  let confirmPassword = null;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={signupPageStyle.container}>
        <Image
          source={require('../assets/logo.png')}
          style={globalStyle.logo}
        />
        <Text style={signupPageStyle.title}>Log In</Text>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signupSchema}
          onSubmit={values => {
            console.log('Form:', values);
          }}>
          {props => (
            <View style={signupPageStyle.form}>
              <View style={globalStyle.inputContainer}>
                <TextInput
                  style={globalStyle.input}
                  placeholder="Enter your first name"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => lastName.focus()}
                  onChangeText={props.handleChange('firstName')}
                  onBlur={props.handleBlur('firstName')}
                  value={props.values.firstName}
                />
              </View>
              {props.touched.firstName && props.errors.firstName ? (
                <Text style={globalStyle.errorMessage}>
                  {props.errors.firstName}
                </Text>
              ) : null}
              <View style={globalStyle.inputContainer}>
                <TextInput
                  style={globalStyle.input}
                  placeholder="Enter your last name"
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (lastName = input)}
                  onSubmitEditing={() => email.focus()}
                  onChangeText={props.handleChange('lastName')}
                  onBlur={props.handleBlur('lastName')}
                  value={props.values.lastName}
                />
              </View>
              {props.touched.lastName && props.errors.lastName ? (
                <Text style={globalStyle.errorMessage}>
                  {props.errors.lastName}
                </Text>
              ) : null}
              <View style={globalStyle.inputContainer}>
                <TextInput
                  style={globalStyle.input}
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  ref={input => (email = input)}
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
                <TextInput
                  style={globalStyle.input}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  ref={input => (password = input)}
                  onSubmitEditing={() => confirmPassword.focus()}
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
              <View style={globalStyle.inputContainer}>
                <TextInput
                  style={globalStyle.input}
                  placeholder="Confirm your password"
                  secureTextEntry={true}
                  ref={input => (confirmPassword = input)}
                  onChangeText={props.handleChange('confirmPassword')}
                  onBlur={props.handleBlur('confirmPassword')}
                  value={props.values.confirmPassword}
                />
              </View>
              {props.touched.confirmPassword &&
              props.errors.confirmPassword ? (
                <Text style={globalStyle.errorMessage}>
                  {props.errors.confirmPassword}
                </Text>
              ) : null}
              <Button
                title="Sign Up"
                color="#12d3cf"
                onPress={props.handleSubmit}
              />
              <View style={globalStyle.marginTop10}>
                <Button
                  title="Log In"
                  color="#194769"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}