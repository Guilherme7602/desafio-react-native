import { StyleSheet, ScrollView, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Top = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Top.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#f0f8ff' },
        tabBarIndicatorStyle: { backgroundColor: '#ff6b6b' },
      }}>
        <Top.Screen name="Miku_Teto" component={Miku_TetoScreen} />
        <Top.Screen name="Dante_Vergil" component={Dante_VergilScreen} />        
      </Top.Navigator>
    </NavigationContainer>
  );
}

function Miku_TetoScreen() {
  return (
    <ScrollView style={styles.mtbody}>
      <View style={styles.mtheader}>
        <Text style={styles.mttitulo}>Miku e Teto</Text>
      </View>
      <View style={styles.mtnav}>
        <Image source={require('./assets/img/miku_plush.png')} style={styles.img} />
        <Image source={require('./assets/img/teto_plush.png')} style={styles.img} />
      </View>
      <View style={styles.mtmain}>
        <Text style={styles.mttitulo}>Introdução</Text>
        <Text style={styles.mttexto}>
          Chegou a hora do nosso Questionário sobre duas 
          estrelinhas incríveis! Vamos testar o quanto você conhece 
          a diva do futuro, Hatsune Miku, e a adorável fã de pão, 
          Kasane Teto. Solte suas tranças (ou suas twindrills) e 
          vamos começar essa aventura musical! ✨🎤🍞
        </Text>
      </View>
      <View style={styles.mtpr}>
        <Text style={styles.baitolagem}>
          1 - (Hatsune Miku): Qual o nome do software de 
          sintetizador vocal do qual Miku é a personagem mais 
          famosa?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('VOCALOID.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          2 - (Kasane Teto): Teto é frequentemente confundida
          com uma Vocaloid, mas qual é o nome do software de 
          sintetizador de voz gratuito do qual ela é originalmente 
          a UTAUloid?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('UTAU.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          3 - (Hatsune Miku): Qual o significado das palavras 
          japonesas que compõem o nome de Hatsune Miku, que é "o 
          primeiro som do futuro"?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('"O Primeiro Som do Futuro".')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          4 - (Kasane Teto): Teto surgiu em uma data específica 
          como uma grande brincadeira dos fãs. Qual é essa data festiva 
          que marcou sua "origem como uma farsa"?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Dia da Mentira (1º de Abril).')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          5 - (Hatsune Miku): Além de cantar, Miku é famosa por se apresentar 
          "ao vivo" em shows. De que forma ela aparece no palco para o público?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Ela aparece como uma projeção 3D holográfica.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          6 - (Kasane Teto): Qual item alimentar é o item característico de Kasane 
          Teto, sendo frequentemente associado a ela pelos fãs?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Baguete (pão francês).')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          7 - (Hatsune Miku): Qual é a cor de cabelo inconfundível e vibrante de Hatsune Miku?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Azul-turquesa (ou verde-azulado).')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          8 - (Kasane Teto): Na sua ficha de personagem, qual é a idade física/humana de Teto
           (apesar de ela ter 31 anos na sua forma quimera)?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('15,5 anos.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          9 - (Hatsune Miku): Qual é o nome da dubladora japonesa que forneceu as amostras de voz 
          para criar o banco de voz de Miku?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Saki Fujita.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.baitolagem}>
          10 - (Kasane Teto): O que Teto detesta que as pessoas chamem suas maria-chiquinhas rosadas?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Coloque sua respostinha mágica aqui!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('"Furadeiras" ou "escavadeiras".')} title='MOSTRAR RESPOSTA' />
      </View>
    </ScrollView>
  );
}

function Dante_VergilScreen() {
  return (
    <ScrollView style={styles.dvbody}>
      <View style={styles.mtheader}>
        <Text style={styles.dvtitulo}>Dante e Vergil</Text>
      </View>
      <View style={styles.mtnav}>
        <Image source={require('./assets/img/dante.png')} style={styles.img} />
        <Image source={require('./assets/img/vergil.png')} style={styles.img} />
      </View>
      <View style={styles.mtmain}>
        <Text style={styles.dvtitulo}>Introdução</Text>
        <Text style={styles.dvtexto}>
          E aí, gamer! 🤘 Dê um restart no seu PS2 e se prepare para o quiz 
          mais maneiro da década! Vamos descobrir se você é Dante, o caçador 
          badass com o humor no talo e uma jaqueta vermelha, ou se é Vergil, 
          o bad boy gótico e elegante que só quer mais poder. Vista sua bandana, 
          afie sua espada e mostre que seu Devil May Cry 3 está on point! Let's rock, baby! 🎸⚔️
        </Text>
      </View>
      <View style={styles.mtpr}>
        <Text style={styles.viadagem}>
          1 - (Dante):  Na abertura insana de DMC3, Dante enfrenta um ataque 
          de demônios enquanto ainda está relaxando em seu escritório. Qual 
          bjeto ele usa de forma style para ricochetear projéteis nos inimigos na cena?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Bolas de sinuca (ou bolas de bilhar).')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          2 - (Vergil): Qual é o nome da lendária katana que Vergil empunha, a 
          qual tem o poder de separar o homem do demônio?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Yamato.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          3 - (Dante): Qual é o nome do item (na verdade, uma arma) que Dante 
          é atingido de seu irmão após o primeiro grande duelo na torre Temen-ni-gru, 
          sendo a própria espada de Dante?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Rebellion.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          4 - (Vergil): Qual é o nome do pai, o lendário Cavaleiro das Trevas, 
          que tanto Dante quanto Vergil idolatram de maneiras opostas?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Sparda.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          5 - (Dante): Em DMC3, Dante encontra uma jovem caçadora de demônios que 
          tenta matá-lo inicialmente e depois se torna sua aliada. Qual é o nome dela?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Mary (Lady).')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          6 - (Vergil): Qual é o nome do vilão humano que se une a Vergil no início do jogo, 
          manipulando os irmãos para tentar obter o poder de Sparda?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Arkham.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          7 - (Dante): Qual é o nome do "estilo" de combate de Dante, focado em defesa e 
          contra-ataques?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Royal Guard..')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          8 - (Vergil): Qual é a cor predominante do casaco longo e descolado que Vergil 
          usa, contrastando com o vermelho de Dante?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Azul (ou azul-marinho).')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          9 - (Dante): Qual é o nome do style de combate de Dante focado em velocidade, 
          esquivas e ataques rápidos, que permite a ele se teletransportar a curtas 
          distâncias?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Trickster.')} title='MOSTRAR RESPOSTA' />
        <Text style={styles.viadagem}>
          10 - (Vergil): Vergil tem uma técnica de ataque rápido e silencioso usando sua 
          espada, que se tornou sua assinatura. Qual é o nome dessa técnica de teletransporte 
          e corte ultra-rápido?
        </Text>
        <TextInput
          style={styles.mresposta}
          placeholder='Não seja um noob, type a resposta já!'
          maxLength={50}
          inputMode= 'text'
          secureTextEntry
          autoCapitalize= 'characters'
        />
        <Button onPress={() => Alert.alert('Judgment Cut.')} title='MOSTRAR RESPOSTA' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mtheader: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  mttitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff5f5fff',
  },
  mtnav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 150,
    height: 150,
  },
  mttexto:{
    fontSize: 16,
  },
  mtbody:{
    backgroundColor: 'lightblue',
  },
  mtmain:{
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  mresposta:{
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: 'black',
    marginTop: 10,
    backgroundColor: 'white',
  },
  mtpr:{
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  baitolagem:{
    color: '#ff5f5fff',
    fontWeight: 'bold',
  },
  dvbody:{
    backgroundColor: '#c02727ff',
  },
  dvtitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2731c0ff',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  viadagem:{
    color: '#2731c0ff',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  dvtexto:{
    fontSize: 16,
    color: 'white',
  },
});
