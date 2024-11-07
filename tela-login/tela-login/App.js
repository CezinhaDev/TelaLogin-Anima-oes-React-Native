import React, {useState, useEffect} from 'react'
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard
} from 'react-native';

import mascara from './components/estilo';
export default function App() {

const [offset] = useState(new Animated.ValueXY({x:0, y:95}));
const [opacity] = useState(new Animated.Value(0));
const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}));

  useEffect(()=> {

     keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
      keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
     Animated.spring(offset.y,{
      toValue:0,
      speed:4,
      bounciness:20
      }),
      Animated.timing(opacity,{
        toValue:1,
        duration:500,
      })
    ]).start();
   

  },);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:55,
        duration:100,
      }),
      Animated.timing(logo.y,{
        toValue:65,
        duration:100,
      }),
    ]).start();
}

function keyboardDidHide() {
     Animated.parallel([
      Animated.timing(logo.x,{
        toValue:150,
        duration:100,
      }),
      Animated.timing(logo.y,{
        toValue:155,
        duration:100,
      }),
    ]).start();
}



  return (
    
    <KeyboardAvoidingView style={mascara.background}>
      <View style={mascara.containerLogo}>
        <Animated.Image style={{
          width:logo.x,
          height:logo.y,
        }} 
        source={require('./img/img.jpg')} />
      </View>

      <Animated.View 
      style={[
        mascara.container,
        {
          opacity:opacity,
          transform:[
            {translateY: offset.y}
          ]
        }
      ]}
      >


        <TextInput
          style={mascara.input}
          placeholder="Email"
          autoCorrect={false}
          onChange={() => {}}
        />

        <TextInput
          style={mascara.input}
          placeholder="Senha"
          autoCorrect={false}
          onChange={() => {}}
        />

        <TouchableOpacity style={mascara.btnSubmit}>
          <Text style={mascara.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mascara.btnRegister}>
          <Text style={mascara.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
