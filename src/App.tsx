import React from 'react';
import create from 'zustand';
import { Button, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const [useStore] = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

const Counter = () => {
  const count = useStore((state) => state.count);
  return (
    <Text style={{ textAlign: 'center', fontSize: 30 }}>Counter: {count}</Text>
  );
};

const Controls = () => {
  const increase = useStore((state) => state.increase);
  const reset = useStore((state) => state.reset);
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Button onPress={increase} title="Up" />
      </View>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <Button onPress={reset} title="Reset" />
      </View>
    </View>
  );
};

const App = () => {
  const [t] = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 35, textAlign: 'center' }}>
        {t('common:helloWorld')}
      </Text>
      <Counter />
      <Controls />
    </View>
  );
};

export default App;
