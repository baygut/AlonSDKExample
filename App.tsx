import {getActiveCaloriesBurned, getSteps} from 'alon-rn-sdk';
import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {HealthValue} from 'react-native-health';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DataList from './components/DataList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [output, setOutput] = React.useState([] as HealthValue[]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getSteps()
        .then(finalResults => {
          setOutput(finalResults);
          console.log(finalResults);
        })
        .catch(error => {
          console.error(error);
        });
    } else if (Platform.OS === 'android') {
      getActiveCaloriesBurned().then(finalResults => {
        console.log(finalResults[0].energy);
      });
    }
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <DataList data={output} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
