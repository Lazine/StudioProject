import * as React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';

const ACTION_TIMER = 400;
const COLORS = ['#FFF', '#FFD363'];

class PressAndHold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressAction: new Animated.Value(0),
      textComplete: '',
      buttonWidth: 0,
      buttonHeight: 0,
    };
  }

  // getInitialState = () => {
  //   return {
  //       pressAction: new Animated.Value(0),
  //       textComplete: '',
  //       buttonWidth: 0,
  //       buttonHeight: 0
  //   };
  // }

  componentDidMount() {
    this._value = 0;
    this.state.pressAction.addListener(v => (this._value = v.value));
  }

  handlePressIn = () => {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(this.animationActionComplete);
  };

  handlePressOut = () => {
    Animated.timing(this.state.pressAction, {
      duration: this._value * ACTION_TIMER,
      toValue: 0,
    }).start();
  };

  animationActionComplete = () => {
    let message = '';
    if (this._value === 1) {
      message = 'You held it long enough to fire the action!';
    }
    this.setState({
      textComplete: message,
    });
  };

  getButtonWidthLayout = e => {
    this.setState({
      buttonWidth: e.nativeEvent.layout.width - 6,
      buttonHeight: e.nativeEvent.layout.height - 6,
    });
  };

  getProgressStyles = () => {
    const width = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.buttonWidth],
    });
    const bgColor = this.state.pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: COLORS,
    });
    return {
      width: width,
      height: this.state.buttonHeight,
      backgroundColor: bgColor,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}>
          <View style={styles.button} onLayout={this.getButtonWidthLayout}>
            <Animated.View style={[styles.bgFill, this.getProgressStyles()]} />
            <Text style={styles.text}>Press And Hold Me</Text>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={styles.finishText}>{this.state.textComplete}</Text>
        </View>
      </View>
    );
  }
}


function MainModal({navigation}) {
  return (
    <SafeAreaView style={styles.body}>
      <Text>Modal Screen Yeah~~~</Text>
      <Button title="OPEN" onPress={() => navigation.navigate('Modal')} />
      <PressAndHold />
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: color.lightgray,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    padding: 10,
    borderWidth: 3,
    // borderRadius: 8,
    borderColor: '#606060',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#606060',
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  finishText: {
    marginTop: 12,
    color: '#606060',
  },
});

export default MainModal;
