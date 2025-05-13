import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#262626',
          borderColor: '#333333',
          padding: 12,
          borderRadius: 8,
          borderWidth: 1,
   },
   cardText: {
          color: '#F2F2F2',
          fontSize: 14,
          paddingHorizontal: 8,
          flex: 1,
          flexShrink: 1,

   },
   circle: {
          height: 24,
          width: 24,

          borderWidth: 2,
          borderRadius: 100,
          borderColor: '#4EA8DE',

   },
   image: {
          // alignItems: 'ri'
   }
})