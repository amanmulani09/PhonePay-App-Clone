import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { tabData } from './src/data/contant'
const App = () => {
  const [selectedTab,setSelectedTab] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavInner}>
          <FlatList
          data={tabData}
          renderItem={({item,index})=>(
            <TouchableOpacity style={styles.bottomTab} onPress={()=> setSelectedTab(index)}>
            <View style={[styles.tabIconContainer,{backgroundColor:index === selectedTab ? "#6739B7" : '#bdbdbd'}]}>
            <Image source={item.imagePath}
            style={styles.tabIcon}
            />
            </View>
            <Text style={styles.navTitle}>{item.title}</Text>

          </TouchableOpacity>
          )}
          horizontal={true}
          keyExtractor={(item)=> item.id + '_'}
          />
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  bottomNav:{
    width:'100%',
    height:verticalScale(70),
    backgroundColor:'#f2f2f2',
    position:'absolute',
    bottom:0
  },
  bottomNavInner:{
    width:'100%',
    height:verticalScale(55),
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  bottomTab:{
    width:verticalScale(60),
    marginLeft:verticalScale(2),
    justifyContent:'center',
    alignItems:'center'
  },
  tabIcon:{
    width:scale(14),
    height:scale(13),
    tintColor:'white'
  },
  tabIconContainer:{
    width:scale(25),
    height:scale(25),
    borderRadius:scale(17),
    justifyContent:'center',
    alignItems:'center'
  },
  navTitle:{
    fontSize:12,
    marginTop:5,
    color:''
  }
})