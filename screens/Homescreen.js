import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={
      present: 0,
      absent: 0
    }
  }


  updateAttendence=(roll_no, status)=>{

    console.log("yes")
    var id ='';
    if(roll_no<=9){
      id='0'+roll_no;
    }
    else{
      id=roll_no
   }

   var today=new Date();
   var dd=today.getDate();
   var mm=today.getMonth()+1;

   var yyyy=today.getFullYear();
   if(dd<10){
     dd='0'+dd
   }
    if(mm<10){
     mm='0'+mm
   }
today=mm+'-'+dd+'-'+yyyy;
var refpath=id;
var classref=db.ref(refpath);
classref.update({
  [today]: status,
})
 var count = db.ref("Class/Count/")
    count.update({
    status:status+1
    })
  }



  render() {
    return (
      <View> 
        <AppHeader />
          <Text style={styles.buttonText}> 01: John</Text>

            <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.setState({present:this.state.present+1})
            this.updateAttendence(1,present)
          }}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>

            <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
                this.setState({absent:this.state.absent+1})
            this.updateAttendence(1,absent)
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

          <Text style={styles.buttonText}> 02: Jane</Text>
          
                 <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
               this.setState({present:this.state.present+1})
            this.updateAttendence(2,present)
          }}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>

            <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
             this.setState({absent:this.state.absent+1})
            this.updateAttendence(2,absent)
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

          <Text style={styles.buttonText}> 03: Jack</Text>
                 <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
               this.setState({present:this.state.present+1})
            this.updateAttendence(3,present)
          }}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>

            <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
                this.setState({absent:this.state.absent+1})
              this.updateAttendence(3,absent)
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

          <Text style={styles.buttonText}> 04: Jim</Text>
                 <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
              this.setState({present:this.state.present+1})
            this.updateAttendence(4,present)
          }}>
          <Text style={styles.buttonText}>Present</Text>
        </TouchableOpacity>

            <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
               this.setState({absent:this.state.absent+1})
            this.updateAttendence(4,absent)
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button2, { backgroundColor: 'lightblue' }]}
          onPress={() => {
            this.props.navigation.navigate('SummaryScreen',{absent: this.state.absent, present: this.state.present});
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex',
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
    width: 100,
    height: 50,
  },
    button2: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    fontSize: 21,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
  },
});

