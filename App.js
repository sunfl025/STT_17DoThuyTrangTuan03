import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
     
      {/* <StatusBar style="auto" /> */}
      <View style={styles.iconImg}>
             <Image source={require('./assets/105152.png')} style={styles.img}/>
             <View style={styles.txtLabel}>
             <Text style={styles.txt} >GROW </Text>
             <Text  style={styles.txt}>YOUR BUSSINESS</Text>
             </View>
             
      </View>
      <View style={styles.cpnBottom}>
          <View style={styles.txtBottom}>
            <Text style={styles.txtDescription}>We will help you to grow your bussiness using</Text>
            <Text style={styles.txtDescription}>Online server</Text>
          </View>
         <View style={styles.btn}>
          <TouchableOpacity style={styles.button}>
                   <Text style={styles.txtButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
                   <Text style={styles.txtButton}>Sign up</Text>
          </TouchableOpacity>
           
         </View>
      </View>
         
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#33ccff',
    padding:'10px'
  },
  iconImg:{
    width:'100%',
    height:'55%',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'100px'
  },
  img:{
    width: 150, 
    height: 150
  },
  txtLabel:{
      paddingTop:'50px',
      alignItems:'center'
  },
  txt:{
    fontSize:'30px',
    fontWeight:600,
    
    
  },
  cpnBottom:{
    flex:1,
  

  },
  txtBottom:{
    width:'100%',
    height:'30%',
    paddingTop:'50px',
    alignItems:'center'
  }
  ,
  txtDescription:{
    fontSize:'15px',
    fontWeight:500

  },
  btn:{
     width:'100%',
     height:'50%',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-around',
    
  },
  button:{
     width:'100px',
     height:'40px',
     backgroundColor:'#daa520',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:'10%',
    
     
  },
  txtButton:{
    fontSize:'26px',
    fontWeight:500
  }
  
});
