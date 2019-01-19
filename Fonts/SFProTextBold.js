import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'SFProText-Bold',
  }
});

export function SFProTextBold({ style, ...props }) {
  return (
    <Text allowFontScaling={false} {...props} style={[styles.text, style]} />
  );
}

SFProTextBold.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.any,
  ]),
  style: Text.propTypes.style,
};

SFProTextBold.defaultProps = {
  children: undefined,
  style: {}
};
