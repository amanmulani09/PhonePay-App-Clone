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
          style={{width:'100%',marginLeft:10}}
          data={tabData}
          renderItem={({item,index})=>(
            <TouchableOpacity style={styles.bottomTab} onPress={()=> setSelectedTab(index)}>
            <View style={[styles.tabIconContainer,{backgroundColor:index === selectedTab ? "purple" : '#bdbdbd'}]}>
            <Image source={item.imagePath}
            style={styles.tabIcon}
            />
            </View>

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
    width:'44%',
    height:'100%'
  },
  tabIcon:{
    width:scale(18),
    height:scale(18),
    tintColor:'white'
  },
  tabIconContainer:{
    width:scale(34),
    height:scale(34),
    borderRadius:scale(17),
    justifyContent:'center',
    alignItems:'center'
  }
})