import { SafeAreaView, StyleSheet,Image, Text, View, StatusBar, FlatList } from 'react-native';
import {list} from './data';
import { ProductItem } from './componets/product-item';
import { Product } from './types/Product';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Image 
        source={require('./assets/hero.jpg')}
        resizeMode='cover'
        style={styles.hero}
        />

        <View style={styles.area}>
          <Text style={styles.h1}>Produtos</Text>
          <FlatList
            data={list}
            renderItem={({item} : {item:Product}) => (<ProductItem product={item} />)}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero:{
    width: '100%',
    height: 120
  },
  area:{
    padding: 10,
    flex: 1,
  },
  h1:{
    fontSize: 24,
    marginBottom: 10
  },
});
