import React from 'react';
import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 70px;
  background-color: white;
  margin: 0 38px ;
  border-radius: 30px;
  box-shadow: 0 4px 5px rgba(0,0,0, 0.08);
`;

const labelMap = {
  resume: 'play',
  stop: 'stop',
  plus: 'plus',
  default: 'pencil',
};

export default function IconButton({ onPress, label }) {
  return (
    <Container onPress={onPress}>
      <Icon
        name={labelMap[label] || labelMap.default }
        type="material-community"
        color="#000"
      />
    </Container>
  );
};

IconButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
};

IconButton.defaultProps = {
  onPress: () => {},
  label: '',
};
