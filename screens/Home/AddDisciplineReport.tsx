import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, Button, Picker, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown, GroupDropdown, MultiselectDropdown } from 'sharingan-rn-modal-dropdown';
import { Text, View } from '../../components/Themed';
export const dtNameTypeDiscipline = [
  {
    value: '1',
    label: 'Vi phạm lớp'
  },
  {
    value: '2',
    label: 'Vi phạm học sinh'
  },
];
export const dtNameDiscipline = [
  {
    value: '1',
    label: 'Không có phù hiệu'
  },
  {
    value: '2',
    label: 'Chậm học'
  },
  {
    value: '3',
    label: 'Không trực nhật'
  },
  {
    value: '4',
    label: 'Đánh nhau'
  },
  {
    value: '5',
    label: 'Tập trung muộn'
  },
];

export const dtNamePupil = [
  {
    value: '1',
    label: 'Nguyễn Thanh Hoa'
  },
  {
    value: '2',
    label: 'Lê Anh Tuấn'
  },
  {
    value: '3',
    label: 'Trang'
  },
  {
    value: '4',
    label: 'Nguyễn Nhật Chiêu'
  },
  {
    value: '5',
    label: 'Lưu Văn Bình'
  },
];


export default function AddDisciplineReport() {
  const [listPupil, setListPupil] = React.useState<string[]>([]);
  const [nameTypeDiscipline, setNameTypeDiscipline] = React.useState('');
  const [nameDiscipline, setNameDiscipline] = React.useState('');
  const onChangeListPupil = (value: string[]) => {
    setListPupil(value);
  };
  const onChangeNameTypeDiscipline = (value: string) => {
    setNameTypeDiscipline(value);
  };
  const onChangeNameDiscipline = (value: string) => {
    setNameDiscipline(value);
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <View >
        
        <View style={styles.marginLR}>
            <TouchableOpacity
              style={styles.AddReportlineButtonStyle}
              activeOpacity = { .5 }
              
              onPress={()=> {
                Alert.alert("Hoàn thành chấm lớp 10A1");
              }}
          >
              <Text style={styles.TextStyle}> HOÀN TẤT </Text>
              <Ionicons name="checkmark" size={24} color="white" align="center"/>
          </TouchableOpacity>
        </View>
        <ScrollView >
          <View style={styles.container}>
            <Dropdown
              label="Loại vi phạm"
              data={dtNameTypeDiscipline}
              value={nameTypeDiscipline}
              onChange={onChangeNameTypeDiscipline}
            />
          </View>
          <View style={styles.container}>
            <Dropdown
              label="Tên vi phạm"
              data={dtNameDiscipline}
              enableSearch
              value={nameDiscipline}
              onChange={onChangeNameDiscipline}
            />
          </View>
          <View style={styles.container}>
            <MultiselectDropdown 
              label="Danh sách học sinh vi phạm"
              data={dtNamePupil}
              enableSearch
              chipType="outlined"
              value={listPupil}
              onChange={onChangeListPupil}
            />
          </View>
        </ScrollView>     
      </View> 
      <View style={styles.marginLR}>
          <TouchableOpacity
            style={styles.AddDisciplineButtonStyle}
            activeOpacity = { .5 }
            onPress={()=> {
              Alert.alert("Thêm vi phạm thành công");
            }}
        >
            <Text style={styles.TextStyle}> THÊM VI PHẠM </Text>
            <Ionicons name="add" size={24} color="white" align="center"/>
        </TouchableOpacity>
      </View>      
    </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      paddingTop: 36,
      marginLeft: 28,
      marginRight: 28,  
      marginBottom: 28,
      flex: 1,
    },
    marginLR: {
      marginLeft: 28,
      marginRight: 28,
    },
    AddDisciplineButtonStyle: { 
      marginTop:30,
      marginBottom:10,
      paddingTop:12,
      paddingBottom:12,
      backgroundColor:'#2196F3',
      borderRadius:16,
      borderWidth: 1,
      borderColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },   
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    },
    AddReportlineButtonStyle: { 
      marginTop:10,
      paddingTop:4,
      paddingBottom:8,
      backgroundColor:'#007700',
      alignContent: 'flex-end',
      width: 110,
      borderRadius:32,
      borderWidth: 1,
      borderColor: '#fff',
      justifyContent: 'space-around',
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
    },
  });