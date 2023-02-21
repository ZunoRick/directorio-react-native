import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Card } from './src/components/Card';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';


function App(){

  const contactos = [
    {
      "id": 1,
      "first_name": "Blair",
      "last_name": "Sivior",
      "email": "bsivior0@chronoengine.com",
      "gender": "Female",
      "phone": "670-808-2753"
    }, {
      "id": 2,
      "first_name": "Moe",
      "last_name": "Leather",
      "email": "mleather1@jiathis.com",
      "gender": "Male",
      "phone": "270-613-8416"
    }, {
      "id": 3,
      "first_name": "Crawford",
      "last_name": "Bearns",
      "email": "cbearns2@soup.io",
      "gender": "Male",
      "phone": "349-883-1006"
    }, {
      "id": 4,
      "first_name": "Margaretha",
      "last_name": "Gockelen",
      "email": "mgockelen3@sciencedirect.com",
      "gender": "Female",
      "phone": "297-474-4186"
    }, {
      "id": 5,
      "first_name": "Shelley",
      "last_name": "Allain",
      "email": "sallain4@vinaora.com",
      "gender": "Male",
      "phone": "526-893-3589"
    }, {
      "id": 6,
      "first_name": "Jonell",
      "last_name": "Renbold",
      "email": "jrenbold5@github.io",
      "gender": "Female",
      "phone": "309-353-7968"
    }, {
      "id": 7,
      "first_name": "Zia",
      "last_name": "Casserley",
      "email": "zcasserley6@sina.com.cn",
      "gender": "Female",
      "phone": "844-407-6891"
    }, {
      "id": 8,
      "first_name": "Joellen",
      "last_name": "Alstead",
      "email": "jalstead7@prlog.org",
      "gender": "Female",
      "phone": "675-925-8964"
    }, {
      "id": 9,
      "first_name": "Jamison",
      "last_name": "Pennycord",
      "email": "jpennycord8@google.com.au",
      "gender": "Male",
      "phone": "456-455-0137"
    }, {
      "id": 10,
      "first_name": "Pierson",
      "last_name": "Americi",
      "email": "pamerici9@newsvine.com",
      "gender": "Male",
      "phone": "557-692-0421"
    }, {
      "id": 11,
      "first_name": "Ingram",
      "last_name": "Dyne",
      "email": "idynea@flickr.com",
      "gender": "Male",
      "phone": "180-499-0483"
    }, {
      "id": 12,
      "first_name": "Nollie",
      "last_name": "Dymond",
      "email": "ndymondb@ezinearticles.com",
      "gender": "Male",
      "phone": "411-539-2247"
    }
  ]

  return (
    <View>
      <ScrollView style= {{
        marginBottom: 60
      }}>
        <Header />
        {contactos.map((contacto) => (
          <Card 
            key={ contacto.id }
            contacto = { contacto }
          />
        ))}
      </ScrollView>
      <Footer/>
    </View>
  )
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
