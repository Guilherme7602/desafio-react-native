import { useState, createContext, useContext } from 'react';
import { FlatList, StyleSheet, ScrollView, Text, View, Image, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Top = createMaterialTopTabNavigator();

const ResponsesContext = createContext({});

export default function App() {
  const [answers, setAnswers] = useState({});
  return (
    <ResponsesContext.Provider value={{ answers, setAnswers }}>
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
        <Top.Screen name="Respostas" component={RespostasScreen} />        
      </Top.Navigator>
      </NavigationContainer>
    </ResponsesContext.Provider>
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
  <AnswerInput name='mtr1' />
        <Text style={styles.baitolagem}>
          2 - (Kasane Teto): Teto é frequentemente confundida
          com uma Vocaloid, mas qual é o nome do software de 
          sintetizador de voz gratuito do qual ela é originalmente 
          a UTAUloid?
        </Text>
        <AnswerInput name='mtr2' />
        <Text style={styles.baitolagem}>
          3 - (Hatsune Miku): Qual o significado das palavras 
          japonesas que compõem o nome de Hatsune Miku, que é "o 
          primeiro som do futuro"?
        </Text>
        <AnswerInput name='mtr3' />
        <Text style={styles.baitolagem}>
          4 - (Kasane Teto): Teto surgiu em uma data específica 
          como uma grande brincadeira dos fãs. Qual é essa data festiva 
          que marcou sua "origem como uma farsa"?
        </Text>
        <AnswerInput name='mtr4' />
        <Text style={styles.baitolagem}>
          5 - (Hatsune Miku): Além de cantar, Miku é famosa por se apresentar 
          "ao vivo" em shows. De que forma ela aparece no palco para o público?
        </Text>
        <AnswerInput name='mtr5' />
        <Text style={styles.baitolagem}>
          6 - (Kasane Teto): Qual item alimentar é o item característico de Kasane 
          Teto, sendo frequentemente associado a ela pelos fãs?
        </Text>
        <AnswerInput name='mtr6' />
        <Text style={styles.baitolagem}>
          7 - (Hatsune Miku): Qual é a cor de cabelo inconfundível e vibrante de Hatsune Miku?
        </Text>
        <AnswerInput name='mtr7' />
        <Text style={styles.baitolagem}>
          8 - (Kasane Teto): Na sua ficha de personagem, qual é a idade física/humana de Teto
           (apesar de ela ter 31 anos na sua forma quimera)?
        </Text>
        <AnswerInput name='mtr8' />
        <Text style={styles.baitolagem}>
          9 - (Hatsune Miku): Qual é o nome da dubladora japonesa que forneceu as amostras de voz 
          para criar o banco de voz de Miku?
        </Text>
        <AnswerInput name='mtr9' />
        <Text style={styles.baitolagem}>
          10 - (Kasane Teto): O que Teto detesta que as pessoas chamem suas maria-chiquinhas rosadas?
        </Text>
        <AnswerInput name='mtr10' />
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
        <AnswerInput name='dv1' />
        <Text style={styles.viadagem}>
          2 - (Vergil): Qual é o nome da lendária katana que Vergil empunha, a 
          qual tem o poder de separar o homem do demônio?
        </Text>
        <AnswerInput name='dv2' />
        <Text style={styles.viadagem}>
          3 - (Dante): Qual é o nome do item (na verdade, uma arma) que Dante 
          é atingido de seu irmão após o primeiro grande duelo na torre Temen-ni-gru, 
          sendo a própria espada de Dante?
        </Text>
        <AnswerInput name='dv3' />
        <Text style={styles.viadagem}>
          4 - (Vergil): Qual é o nome do pai, o lendário Cavaleiro das Trevas, 
          que tanto Dante quanto Vergil idolatram de maneiras opostas?
        </Text>
        <AnswerInput name='dv4' />
        <Text style={styles.viadagem}>
          5 - (Dante): Em DMC3, Dante encontra uma jovem caçadora de demônios que 
          tenta matá-lo inicialmente e depois se torna sua aliada. Qual é o nome dela?
        </Text>
        <AnswerInput name='dv5' />
        <Text style={styles.viadagem}>
          6 - (Vergil): Qual é o nome do vilão humano que se une a Vergil no início do jogo, 
          manipulando os irmãos para tentar obter o poder de Sparda?
        </Text>
        <AnswerInput name='dv6' />
        <Text style={styles.viadagem}>
          7 - (Dante): Qual é o nome do "estilo" de combate de Dante, focado em defesa e 
          contra-ataques?
        </Text>
        <AnswerInput name='dv7' />
        <Text style={styles.viadagem}>
          8 - (Vergil): Qual é a cor predominante do casaco longo e descolado que Vergil 
          usa, contrastando com o vermelho de Dante?
        </Text>
        <AnswerInput name='dv8' />
        <Text style={styles.viadagem}>
          9 - (Dante): Qual é o nome do style de combate de Dante focado em velocidade, 
          esquivas e ataques rápidos, que permite a ele se teletransportar a curtas 
          distâncias?
        </Text>
        <AnswerInput name='dv9' />
        <Text style={styles.viadagem}>
          10 - (Vergil): Vergil tem uma técnica de ataque rápido e silencioso usando sua 
          espada, que se tornou sua assinatura. Qual é o nome dessa técnica de teletransporte 
          e corte ultra-rápido?
        </Text>
        <AnswerInput name='dv10' />
      </View>
    </ScrollView>
  );
}

function RespostasScreen() {
  const { answers } = useContext(ResponsesContext);
  const lista = Object.keys(answers).map((key, index) => ({ id: String(index + 1), nome: answers[key] }));
  return (
    <View>
      <Text>RESPOSTAS</Text>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.nome}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'black' }} />}
        ListEmptyComponent={() => <Text>Nenhuma resposta ainda.</Text>}
      />
    </View>
  );
}

function AnswerInput({ name }) {
  const { answers, setAnswers } = useContext(ResponsesContext);
  const value = answers[name] || '';
  return (
    <TextInput
      style={styles.mresposta}
      placeholder='Coloque sua respostinha mágica aqui!'
      maxLength={50}
      inputMode='text'
      autoCapitalize='characters'
      value={value}
      onChangeText={(text) => setAnswers(prev => ({ ...prev, [name]: text }))}
    />
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
