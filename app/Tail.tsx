
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from './screens/AudioList';
import { Ionicons } from '@expo/vector-icons';

export default function Tail(props: TailProps) {
  const navigation = useNavigation();

  const imageSource = props.image ? images[props.image] : null;
  return (
    <Pressable style={styles.container} onPress={() => openTail(navigation)}>
      {props.image 
      ? <Image source={imageSource} style={styles.image} />
      : <Ionicons name='book-outline' style={styles.image}/>}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

const images = {
  'book.png': require('../assets/images/book.png'),
  'icon.png': require('../assets/images/icon.png'),
};

type TailProps = {
  title: string,
  image?: 'book.png' | 'icon.png',
}

function openTail(navigation: any) {
  if (navigation) {
    navigation.navigate('AudioItem');
  }
  console.log('navigation was not defined in tail');
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 5,
    alignItems: 'center',
    height: 250,
    width: 200,
  },
  image: {
    fontSize:200,
    width: 200,
    height: 200,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5
  },
});
