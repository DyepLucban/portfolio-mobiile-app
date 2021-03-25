import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { globalStyles } from '../../assets/styles/global'

export default function Home () {
  const [quote, setQuote] = useState('')

  return (
    <View style={globalStyles.homeContainer}>
      <View style={globalStyles.homeQuoteContainer}>
        <Text>QUOTE API HERE</Text>
      </View>
      <ScrollView>
        {/* SCROLL VIEW HERE */}
        <View style={globalStyles.homeTotalCount}>
          <Text style={{ fontSize: 24 }}>Something to be proud of?</Text>
          <View style={{ height:150, marginTop:20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{ height:130, width:300, marginRight: 20, backgroundColor: 'red' }}>
                <View style={{ flex: 1 }}>
                  <Text>Skills</Text>
                </View>
              </View>
              <View style={{ height:130, width:300, marginRight: 20, backgroundColor: 'red' }}>
                <View style={{ flex: 1 }}>
                  <Text>Experience</Text>
                </View>
              </View>
              <View style={{ height:130, width:300, marginRight: 20, backgroundColor: 'red' }}>
                <View style={{ flex: 1 }}>
                  <Text>Projects</Text>
                </View>
              </View>                            
            </ScrollView>
          </View>
        </View>

        {/* NEXT CONTENT HERE */}
        <View>
          <Text>asdasd</Text>
        </View>        
      </ScrollView>
    </View>    
  )
}
