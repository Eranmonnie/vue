import{ref} from 'vue'

 const globalcount = ref(10);

 const incrementglobal = ()=>{
    globalcount+= 10
 };

 
 
 export function wow () {

  const localcount = ref(100);

  const incrementlocal = ()=>{
        localcount+=100;
  };

  

  return{
    globalcount,
    localcount,
    incrementglobal,
    incrementlocal,
    


  }

 };